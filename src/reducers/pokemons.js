import { SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = ({
    pokemons: [],
    loading: false,
});

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            return {...state, pokemons:action.payload };
        case SET_LOADING:
            return {...state, loading:action.payload };
    //valor por defecto
    default:
        return state;
    }
}