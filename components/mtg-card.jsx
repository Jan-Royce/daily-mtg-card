export function MtgCard({ data }) {
    const formats = [
        'standard',
        'alchemy',
        'pioneer',
        'historic',
        'modern',
        'brawl',
        'legacy',
        'timeless',
        'vintage',
        'pauper',
        'commander',
        'penny',
        'oathbreaker'
    ];
    
    // TODO handling different card layouts, ie flip, split, etc
    // maybe create different components for distinct layouts to enable flipping
    
    return (
        <div className="bg-neutral-200 flex flex-wrap px-6 py-8 rounded-lg">
            <div className="mtg-card w-full sm:w-1/2">
                <img src={data.card_faces ? data.card_faces[0].image_uris.png : data.image_uris.png} alt={data.name} />
            </div>
            <div className="text-black w-full sm:w-1/2 mt-4 sm:mt-0 border-x-1 border-y-4 border-l border-y-black border-x-neutral-400">
                <h2 className="card-title px-4 py-1 border-b-1 border-neutral-400 text-xl">
                    <span className="card-name">{data.name}</span> <span className="card-mana-cost">{data.mana_cost}</span>
                </h2>
                
                <div className="card-type-line px-4 py-1 border-b-1 border-neutral-400">
                    <p>{data.type_line}</p>
                </div>
                
                <div className="card-oracle-text px-4 py-1 border-b-1 border-neutral-400">
                    <pre className="font-sans whitespace-pre-wrap break-normal">{data.oracle_text}</pre>
                    { data.flavor_text && 
                        <p className="font-serif italic text-sm text-neutral-600 mt-1">{data.flavor_text}</p>
                    }
                </div>
                
                { data.power && data.toughness &&
                    <div className="card-stats px-4 py-1 border-b-1 border-neutral-400">
                    <p>{data.power}/{data.toughness}</p>
                </div>
                }
                
                <div className="card-legality flex flex-wrap px-4 py-1">
                    { data.legalities && (
                        Object.entries(data.legalities).map(([key, value]) => (
                            formats.includes(key) ? (
                                <div key={key} className="flex w-1/2 text-xs my-1 items-center">
                                    <span className="uppercase bg-green-400 mr-2 px-1 py-1 w-1/2 text-center rounded-sm">{value.replace('_', ' ')}</span> <span className="capitalize">{key}</span>
                                </div>
                            ) : null
                        ))
                    )}
                </div>
                
            </div>
        </div>
    );
}
