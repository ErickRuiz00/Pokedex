import axios from "axios";

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

const getPokemonDetails = async (limit, page) => {
  const startIndex = limit * (page - 1);
  const endIndex = startIndex + limit;
  const paginatedPokemons = cachedPokemons.slice(startIndex, endIndex);

  return Promise.all(
    paginatedPokemons.map(async (pokemon) => {
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
