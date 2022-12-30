import PokemonCard from "./PokemonCard";

const PokemonList =({ pokemons }) =>{
    
    return(
        <div className="PokemonList">
            {pokemons.map((pokemon) =>{
                return <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />;
            })}
        </div>
    )
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};

export default PokemonList;