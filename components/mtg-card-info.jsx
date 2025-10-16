export function MtgCardInfo({ cardData }) {
    return (
        <div>
            <h2 className="card-title px-4 py-1 border-b-1 border-neutral-400 text-xl">
                {
                    cardData.color_indicator &&
                    <span className="card-color-indicator mr-1">
                        ({cardData.color_indicator})
                    </span>
                }
                <span className="card-name">{cardData.name}</span> <span className="card-mana-cost">{cardData.mana_cost}</span>
            </h2>

            <div className="card-type-line px-4 py-1 border-b-1 border-neutral-400">
                <p>{cardData.type_line}</p>
            </div>

            <div className="card-oracle-text px-4 py-1 border-b-1 border-neutral-400">
                <pre className="font-sans whitespace-pre-wrap break-normal">{cardData.oracle_text}</pre>
                {cardData.flavor_text &&
                    <p className="font-serif italic text-sm text-neutral-600 mt-1">{cardData.flavor_text}</p>
                }
            </div>

            {cardData.power && cardData.toughness &&
                <div className="card-stats px-4 py-1 border-b-1 border-neutral-400">
                    <p>{cardData.power}/{cardData.toughness}</p>
                </div>
            }
        </div>
    )
}