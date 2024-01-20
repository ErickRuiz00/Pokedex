import { useEffect } from "react";
import PokemonListItem from "./PokemonListItem";
import axios from "axios";
import Loader from "../Loader";
import "./Styles/PokemonList.css";

function PokemonList({
  choosePokemon,
  showStock,
  pokemonList,
  setPokemonList,
}) {
  useEffect(() => {
    try {
      if (!showStock) {
        const getPokemons = async () => {
          const pokemonDetails = await axios.get("http://localhost:3001/api/");
          setPokemonList(pokemonDetails.data);
        };

        getPokemons();
      } else {
        const getPokemons = async () => {
          const pokemonDetails = await axios.get(
            "http://localhost:3001/api/stock"
          );
          setPokemonList(pokemonDetails.data);
        };

        getPokemons();
      }
    } catch (error) {
      console.log(error);
    }
  }, [showStock]);

  if (showStock && pokemonList.length === 0)
    return (
      <div className="empty-list">
        <p>Aún no tienes pokemons</p>
      </div>
    );
  if (pokemonList.length === 0) return <Loader />;

  return (
    <div className="pokemon-list">
      <h1 className="list-title">
        {showStock ? "Mis pokemons" : "Lista de Pokemons"}
      </h1>
      <p>Selecciona un pokemon para obtener más información</p>
      <section className="pokemon-list-container">
        {pokemonList.map((pokemon) => (
          <PokemonListItem
            pokemon={pokemon}
            key={pokemon.id}
            choosePokemon={choosePokemon}
            showStock={showStock}
          />
        ))}
      </section>
    </div>
  );
}
export default PokemonList;
