import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const Card = ({ children, className, ...props }) => (
//     <div className={('card', className)} {...props}>
//         {children}
//     </div>
// );
// import { characters } from '../content/characters';


const Card = ({characters}) => {
    const [cardData, setCardData] = useState([]);
    
    useEffect(() => {
        setCardData(characters);
    }, []);

    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <div className="card__item" key={index}>
                    <div className="card__item__img">
                        <img src={card.Character_Image} alt={card.Character_Name} />
                        <h3>{card.Character_Name}</h3>
                        <p>"{card.Pitch}"</p>
                        <p>{card.Class_Names}</p>
                        <p>Summary: {card.Short_desc}</p>
                        <Link to={`/character/${card.Character_Name}`}>
                        <button>View Character</button>
                        </Link>
                    </div>
                    <div className="card__item__info">
                        
                        </div>
                </div>
            ))}
        </div>
    );
}

export default Card;