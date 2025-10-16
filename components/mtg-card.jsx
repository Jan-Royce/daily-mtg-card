import { MtgCardInfo } from 'components/mtg-card-info';

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
    
    const legalityColor = {
        legal : "bg-green-400",
        not_legal : "bg-gray-500 text-white",
        restricted : "bg-yellow-300"
    };
    
    const multiFace = [
        //card_faces
        'split',
        'flip',
        'transform',
        'double_faced_token',
        'modal_dfc',
        'adventure',
        'reversible_card',
        //all_parts
        'meld',
    ];
    
    const hasBack = [
        //card_faces
        'transform',
        'double_faced_token',
        'modal_dfc',
        'reversible_card',
        //all_parts
        'meld',
    ];
    
    const cardData = data;
    
    console.log(Object.entries(cardData.card_faces))
    
    // TODO continue updating diff layout support
    // add flip/rotate buttons for specific layouts
    
    return (
        <div className="bg-neutral-200 flex flex-wrap px-6 py-8 rounded-lg">
            <div className="mtg-card w-full sm:w-1/2">
                {cardData.layout == 'meld' || !hasBack.includes(cardData.layout) &&
                    <img src={cardData.image_uris.png} alt={cardData.name} />
                }
                
                {hasBack.includes(cardData.layout) && cardData.layout != 'meld' &&
                    Object.entries(cardData.card_faces).map(([key, face]) => (
                        <div key={key}>
                            <img src={face.image_uris.png} alt={face.name} />
                        </div>
                    ))
                }
                
                {/* TODO: meld */}
            </div>
            <div className="text-black w-full sm:w-1/2 mt-4 sm:mt-0 border-x-1 border-y-4 border-l border-y-black border-x-neutral-400">
                
                { cardData.layout == 'meld' || !multiFace.includes(cardData.layout) &&
                    <MtgCardInfo cardData={cardData} />
                }
                
                { multiFace.includes(cardData.layout) && cardData.layout != 'meld' &&
                    Object.entries(cardData.card_faces).map(([key, face]) =>  (
                        <MtgCardInfo cardData={face} key={key}/>
                    ))
                }
                
                <div className="card-legality flex flex-wrap px-4 py-1">
                    { cardData.legalities && (
                        Object.entries(cardData.legalities).map(([key, value]) => (
                            formats.includes(key) ? (
                                <div key={key} className="flex w-1/2 text-xs my-1 items-center">
                                    <span className={`uppercase ${legalityColor[value]} mr-2 px-1 py-1 w-1/2 text-center rounded-sm`}>{value.replace('_', ' ')}</span> <span className="capitalize">{key}</span>
                                </div>
                            ) : null
                        ))
                    )}
                </div>
                
            </div>
        </div>
    );
}
