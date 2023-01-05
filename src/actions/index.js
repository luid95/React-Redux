//Action_Creator: 
//Es una funcion que retrona un action 
//O objeto que describe el cambio que va a pasar
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";
import { getPokemonDetails } from '../api/index';

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    //Obtener los detalles de los pokemons
    const pokemonDetailed = await Promise.all(
        pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonDetailed));
};