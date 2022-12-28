import { useEffect, useState } from 'react';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api/index';
import logo from './statics/logo.svg';
import './App.css';


function App() {

  //Uso del state para el manejos de la lista de pokemons
  const [pokemons, setPokemons]= useState([]);

  //Hacemos uso del Hook de useEffect para obtener los datos de nustra api
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();

      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
