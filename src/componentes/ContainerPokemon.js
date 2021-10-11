import React from 'react';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';
import { useState, useEffect } from 'react';

const ContainerPokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [cargarMas, setCargarMas] = useState(['https://pokeapi.co/api/v2/pokemon?limit=20']);
    const [search, setSearch] = useState('');
    const getPokemons = async () => {
        const response = await fetch(cargarMas);
        const data = await response.json();

        setCargarMas(data.next);

        function crearObjetoPokemon(result) {
            result.forEach(async (pokemom) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemom.name}`);
                const data = await res.json();

                setPokemons(currentList => [...currentList, data]);

                console.log(pokemons);
            })
        }
        crearObjetoPokemon(data.results);

    }

    useEffect(() => {
        getPokemons()
    }, []);

    return (
        <>
            <input type='text' id='mi-pokemon' onChange={(e) => setSearch(e.target.value)} placeholder='Encuentra tu pokemon ... ' />
            <div className="container-pokemon">
                {pokemons.filter((pokemon) => {
                    if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
                        return pokemon;
                    }
                }).map((pokemon, index) =>
                    <Link to={`/pokemon/${pokemon.id}`}>

                        <Pokemon
                            name={pokemon.name}
                            type={pokemon.types[0].type.name}
                            id={pokemon.id}
                            image={pokemon.sprites.other.dream_world.front_default}
                            key={index}
                        />
                    </Link>

                )
                }
            </div>
            <div className="boton">
                <button className="btn-cargar" onClick={() => { getPokemons() }}>Cargar más...</button>
            </div>
            <div />
        </>
    );
}

export default ContainerPokemon;