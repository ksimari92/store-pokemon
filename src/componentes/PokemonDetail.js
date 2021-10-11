import React from 'react';
import { useParams } from 'react-router';

const PokemonDetail = ({pokemons}) => {
const id = useParams();
const pokemon = pokemons.find(pokemon => pokemon.id === id )
    return ( 
        <>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.types[0].type.name}</p>
        <p>{pokemon.sprites.other.dream_world.front_default}</p>
        </>
     );
}
 
export default PokemonDetail;