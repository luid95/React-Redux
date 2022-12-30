//Action_Creator: 
//Es una funcion que retrona un action 
//O objeto que describe el cambio que va a pasar
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})