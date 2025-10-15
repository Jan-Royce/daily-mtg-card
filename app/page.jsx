import { MtgCardOfTheDay } from 'components/mtg-card-of-the-day';

export default async function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <h1 className="mt-8 text-center uppercase">
                MTG: Card of the Day
                <br />
                <span className="text-xl text-neutral-300">next card in 00:00:00</span>
            </h1>
            <section className="flex flex-col gap-4">
                <MtgCardOfTheDay />
            </section>
        </div>
    );   
}