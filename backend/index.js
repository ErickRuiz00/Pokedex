import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.listen(3001);

app.use(cors());

const getPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const { results } = response.data;
  results.sort((PokeA, PokeB) => PokeA.name.localeCompare(PokeB.name));

  const pokemonDetails = results.map(async (pokemon) => {
    const { data } = await axios.get(pokemon.url);
    return {
      id: data.id,
      name: data.name,
      type: data.types,
      url_img:
        data.sprites.other.dream_world.front_default ||
        data.sprites.front_default,
      abilities: data.abilities,
      stats: data.stats,
      height: data.height,
      weight: data.weight,
    };
  });

  return Promise.all(pokemonDetails);
};

app.get("/", async (req, res) => {
  try {
    const pokemons = await getPokemons();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Error en la petición",
      error: error.message,
    });
  }
});

console.log("server listening in port 3001");
