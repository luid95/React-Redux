import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { fetchPokemonWithDetails } from './slices/dateSlice';
import './App.css';


function App() {

  //Uso de useSelector
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();

  //Hacemos uso del Hook de useEffect para obtener los datos de nustra api
  useEffect(() => {
    dispatch(fetchPokemonWithDetails());

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