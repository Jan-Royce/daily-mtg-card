const mongoose = require("mongoose");

exports.handler = async function (event, context) {
    const uri = process.env.MONGODB_URI;
    const dbName = 'mtg';
    
    const dailyCardSchema = new mongoose.Schema({
        _id: { type: String },
        card_data: { type: Object }
    }, { collection: 'daily_card' });
    
    const DailyCard = mongoose.models.DailyCard || mongoose.model("DailyCard", dailyCardSchema);
    
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
        
        return {
            statusCode: 200,
            body: JSON.stringify(card),
        };
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify(existing),
    };
}