import { useEffect } from 'react';
import { Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api/index';
import { setPokemons } from './actions';
import logo from './statics/logo.svg';
import './App.css';


function App() {

  //Uso de useSelector
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  //Hacemos uso del Hook de useEffect para obtener los datos de nustra api
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();

      dispatch(setPokemons(pokemonsRes));
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