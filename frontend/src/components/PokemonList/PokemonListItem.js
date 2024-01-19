import "./Styles/PokemonListItem.css";
import SidebarButton from "../Sidebar/SidebarButton";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import axios from "axios";

function PokemonListItem({ pokemon, choosePokemon, showStock }) {
  const handleOnAdd = async (pokemon) => {
    console.log(pokemon)
    try {
      const res = await axios.post("http://localhost:3001/api/stock", {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        url_img: pokemon.url_img,
        abilities: pokemon.abilities,
        stats: pokemon.stats,
        height: pokemon.height,
        weight: pokemon.weight,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnDelete = async (pokemon) => {
    console.log(pokemon)
    try {
      console.log(pokemon);
      const res = await axios.delete(
        `http://localhost:3001/api/stock/${pokemon.id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="pokemon-item-container"
      onClick={() => choosePokemon(pokemon)}
    >
      {!showStock ? (
        <SidebarButton
          icon={<FaPlusCircle size={20} color={"green"} />}
          customStyle="pokemon-item__action-btn"
          action={() => handleOnAdd(pokemon)}
        />
      ) : (
        <SidebarButton
          icon={<FaTrash size={20} color={"red"} />}
          customStyle="pokemon-item__action-btn"
          action={() => handleOnDelete(pokemon)}
        />
      )}
      <div className="img-container">
        <img
          src={pokemon.url_img}
          alt={`Imagen de ${pokemon.name}`}
          className="pokemon-img"
        />
      </div>
      <div className="data-container">
        <small className="pokemon-id">N.° {pokemon.id}</small>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        {pokemon.type.map((hability, i) => (
          <span key={i} className={`pokemon-type ${hability}`}>
            {hability}
          </span>
        ))}
      </div>
    </div>
  );
}
export default PokemonListItem;
