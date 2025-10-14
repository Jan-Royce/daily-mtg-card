const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.ggbwnfv.mongodb.net/mtg?retryWrites=true&w=majority`;
const dbName = 'mtg';

const dailyCardSchema = new mongoose.Schema({
    _id: { type: String },
    card_data: { type: Object }
}, { collection: 'daily_card' });

const DailyCard = mongoose.models.DailyCard || mongoose.model("DailyCard", dailyCardSchema);

export async function getCardToday() {
    await mongoose.connect(uri, {
        dbName: dbName
    });
    
    const today = new Date().toISOString().split("T")[0];
    const existing = await DailyCard.findById(today);
    
    if(!existing) {
        const response = await fetch("https://api.scryfall.com/cards/random");
        const card = await response.json();
        
        const result = await DailyCard.findByIdAndUpdate(
            today,
            { card_data: card },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        
        return card;
    }
    
    return existing;
}