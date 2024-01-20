import "./Styles/SearchBar.css";
import axios from "axios";

function SearchBar({ setPokemonList, pokemonList, setShowStock }) {
  const handleSearch = async (e) => {
    try {
      setShowStock(false);
      if (e.target.value === "") {
        const { data } = await axios.get("http://localhost:3001/api/");
        setPokemonList(data);
      } else {
        const pokemonToFind = e.target.value;
        const { data } = await axios.post(
          `http://localhost:3001/api/${pokemonToFind}`,
          { poke: pokemonList }
        );
        if (data.success) setPokemonList(data.matchedPokemonDetails);
        else setPokemonList([]);
      }
    } catch (error) {
      console.log("Ocurrió un problema al buscar el pokemon");
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        name=""
        id=""
        className="search-input"
        onChange={handleSearch}
      />
      <button className="search-button">&#128269;</button>
    </div>
  );
}
export default SearchBar;
