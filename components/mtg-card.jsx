export function MtgCard({ data, className }) {
    return (
        <div className="bg-neutral-200 flex flex-wrap px-6 py-8 rounded-lg">
            <div className="mtg-card w-full sm:w-1/2">
                <img src={data.image_uris.png} alt={data.name} />
            </div>
            <div className="text-black w-full sm:w-1/2 mt-4 sm:mt-0 px-4 py-2 border-x-1 border-y-4 border-l border-y-black border-x-neutral-400">
                <h2 className="text-2xl">
                    <span className="card-name">{data.name}</span> <span className="card-mana-cost">{data.mana_cost}</span>
                </h2>
                
                <div className="card-oracle-text">
                    <p>{data.oracle_text}</p>
                </div>
            </div>
        </div>
    );
}
