import { useEffect, useState } from "react";
import PokemonListItem from "./PokemonListItem";
import "./Styles/PokemonList.css";

function PokemonList({ choosePokemon }) {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const getPokemons = async () => {
      const res = await fetch("http://localhost:3001/");
      const pokemonDetails = await res.json();

      setPokemonList(await Promise.all(pokemonDetails));
    };

    getPokemons();
  }, []);

  if (pokemonList.length === 0) return;

  return (
    <div className="pokemon-list">
      <h1 className="list-title">Pokemon List</h1>
      <p>Selecciona un pokemon para obtener más información</p>
      <section className="pokemon-list-container">
        {pokemonList.map((pokemon) => (
          <PokemonListItem
            pokemon={pokemon}
            key={pokemon.id}
            choosePokemon={choosePokemon}
          />
        ))}
      </section>
    </div>
  );
}
export default PokemonList;
