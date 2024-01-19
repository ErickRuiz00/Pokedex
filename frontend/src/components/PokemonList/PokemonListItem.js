import "./Styles/PokemonListItem.css";

function PokemonListItem({ pokemon, choosePokemon }) {
  return (
    <div
      className="pokemon-item-container"
      onClick={() => choosePokemon(pokemon)}
    >
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
          <span key={i} className={`pokemon-type ${hability.type.name}`}>
            {" "}
            {hability.type.name}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
export default PokemonListItem;
