import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Switch, Route, Link
} from "react-router-dom";
import Pokemon from './componentes/Pokemon';
import Header from './componentes/Header';
import PokemonDetail from './componentes/PokemonDetail';
import './App.css'
import titulo from './logo.png'
import ContainerPokemon from './componentes/ContainerPokemon';



function App() {
  // const [pokemons, setPokemons] = useState([]);
  // const [cargarMas, setCargarMas] = useState(['https://pokeapi.co/api/v2/pokemon?limit=20']);

  // const getPokemons = async () => {
  //   const response = await fetch(cargarMas);
  //   const data = await response.json();

  //   setCargarMas(data.next);

  //   function crearObjetoPokemon(result) {
  //     result.forEach(async (pokemom) => {
  //       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemom.name}`);
  //       const data = await res.json();

  //       setPokemons(currentList => [...currentList, data]);

  //       console.log(pokemons);
  //     })
  //   }
  //   crearObjetoPokemon(data.results);

  // }

  // useEffect(() => {
  //   getPokemons()
  // }, []);

  return (
    <div className="App">
      <Header logo={titulo}/>
     
    <BrowserRouter>
  
      <Route path="/" component={ContainerPokemon}> </Route>
    
    </BrowserRouter>
    </div>

  );
}

export default App;
