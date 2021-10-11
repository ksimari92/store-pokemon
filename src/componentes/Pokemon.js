import React from 'react';
import './pokemon.css';

const Pokemon = ({ image, name}) => {
    return (
        <div className="pokemon-container">
                <img className="img-pokemon" src={image} alt={name} />
        </div>
    );
}

export default Pokemon;