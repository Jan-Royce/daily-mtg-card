'use client';

import { useEffect, useState } from 'react';
import { MtgCard } from 'components/mtg-card';

export function MtgCardOfTheDay() {
    const [card, setCard] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/.netlify/functions/getData")
            .then(res => res.json())
            .then(data => setCard(data.card_data))
            .catch(() => setError(true));
    }, []);
    
    return (
        <div>
            {error && <span className="text-red-400">Something went wrong 😣 </span>}
            {!card && !error && <span>Loading...</span>}
            {card && <MtgCard data={card} />}
        </div>
    );
}