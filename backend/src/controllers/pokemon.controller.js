import axios from "axios";
import Pokemon from "../models/pokemon.model.js";

let cachedPokemons = [];

const getAllPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const { results } = response.data;
  cachedPokemons = await results.sort((PokeA, PokeB) =>
    PokeA.name.localeCompare(PokeB.name)
  );
};

const getPokemonDetails = async (
  limit = 500,
  page = 1,
  pokemons = cachedPokemons
) => {
  const startIndex = limit * (page - 1);
  const endIndex = startIndex + limit;
  const paginatedPokemons = pokemons.slice(startIndex, endIndex);

  return Promise.all(
    paginatedPokemons.map(async (pokemon) => {
      const { data } = await axios.get(pokemon.url);
      const { abilities, stats, types } = data;

      const newAbilities = abilities.map((entry) => entry.ability.name);
      const newTypes = types.map((entry) => entry.type.name);
      const newStats = stats.map((entry) => {
        return {
          base_stat: entry.base_stat,
          name: entry.stat.name,
        };
      });

      const pokemonDetails = {
        id: data.id,
        name: data.name,
        type: newTypes,
        url_img:
          data.sprites.other.dream_world.front_default ||
          data.sprites.front_default,
        abilities: newAbilities,
        stats: newStats,
        height: data.height,
        weight: data.weight,
      };

      return pokemonDetails;
    })
  );
};

export const fetchPokemons = async (req, res) => {
  try {
    if (cachedPokemons.length === 0) await getAllPokemons();
    const limit = req.query.limit || 32;
    const page = req.query.page || 1;
    const paginatedPokemons = await getPokemonDetails(limit, page);

    res.json(paginatedPokemons);
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Error en la petición",
      error: error.message,
    });
  }
};

export const findPokemon = async (req, res) => {
  try {
    if (req.params.name === "") {
      const pokemons = await getPokemonDetails();
      res.json({
        success: true,
        matchedPokemonDetails: pokemons,
      });
    }
    const findName = req.params.name.toLowerCase();

    const matchedPokemons = cachedPokemons.filter((pokemon) =>
      pokemon.name.includes(findName)
    );

    if (matchedPokemons.length === 0)
      return res.json({
        success: false,
        message: "Sin coincidencias",
      });

    const matchedPokemonDetails = await getPokemonDetails(
      32,
      1,
      matchedPokemons
    );

    res.json({
      success: true,
      matchedPokemonDetails,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Ocurrió un error con la solicitud",
      error: error.message,
    });
  }
};

export const addNewPokemon = async (req, res) => {
  const { id, name, type, url_img, abilities, stats, height, weight } =
    req.body;
  try {
    const newPokemon = new Pokemon({
      id,
      name,
      type,
      url_img,
      abilities,
      stats,
      height,
      weight,
    });
    const addedPokemon = await newPokemon.save();
    res.json(addedPokemon);
  } catch (error) {
    res.json(error);
  }
};

export const getMyPokemons = async (req, res) => {
  try {
    const data = await Pokemon.find();
    res.json(data);
  } catch (error) {
    res.json({
      success: false,
      message: "Ocurrio un error en la solicitud",
      error: error.message,
    });
  }
};

export const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findOneAndDelete({ id });
    if (!pokemon)
      return res.status(404).json({ message: "Pokemon no encontrado" });

    const data = await Pokemon.find();
    res.json(data);
  } catch (err) {
    res.json({
      success: false,
      message: "Ocurrio un error en la solicitud",
      error: err.message,
    });
  }
};
