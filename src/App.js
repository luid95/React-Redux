import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api/index';
import { setPokemons as setPokemonsActions} from './actions';
import logo from './statics/logo.svg';
import './App.css';


function App({pokemons, setPokemons}) {

  //Uso del state para el manejos de la lista de pokemons
  //const [pokemons, setPokemons]= useState([]);
  console.log("🚀 ~ file: App.js:16 ~ App ~ pokemons", pokemons);
  

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

//Funcion que va a recibir nuestro estado y va a retornar un objeto
//cuyas propiedades van a ser enviadas a los props del componente que se esta conectando a redux
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);