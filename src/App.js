import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api/index';
import { getPokemonsWithDetails, setLoading } from './actions';
import logo from './statics/logo.svg';
import './App.css';


function App() {

  //Uso de useSelector
  const pokemons = useSelector(state => state.get('pokemons')).toJS();
  const loading = useSelector(state => state.get('loading'));
  const dispatch = useDispatch();

  //Hacemos uso del Hook de useEffect para obtener los datos de nustra api
  useEffect(() => {
    const fetchPokemons = async () => {
      //disparamos la accion para mostrar el loading
      dispatch(setLoading(true));
      
      //disparamos la accion para la carga de los datos
      const pokemonsRes = await getPokemon();
      
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      { loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={pokemons} /> }
      
    </div>
  );
}

export default App;