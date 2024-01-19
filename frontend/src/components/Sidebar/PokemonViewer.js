import "./Styles/PokemonViewer.css";

function PokemonViewer({ pokemon }) {
  if (!pokemon) return;

  return (
    <section className="pokemon-viewer__container">
      <div className="pokemon-viewer__details">
        <h2>{pokemon.name}</h2>
        <p>{pokemon.id}</p>
      </div>

      <div className="pokemon-viewer__img-container">
        <img
          src={pokemon.url_img}
          alt={`Imagen de ${pokemon.name}`}
          className="pokemon-viewer__img"
        />
      </div>

      <div className="pokemon-viewer__stats">
        <div className="pokemon-viewer__stats-type">
          {pokemon.type.map((hability, i) => (
            <span key={i} className={`pokemon-type ${hability.type.name}`}>
              {hability.type.name}
            </span>
          ))}
        </div>

        <div className="pokemon-viewer__stats-abilities">
          {pokemon.abilities.map((ability, i) => (
            <span key={i} className="pokemon-ability">
              {ability.ability.name}
            </span>
          ))}
        </div>

        <div className="pokemon-viewer__stats-base-stats">
          {pokemon.stats.map((stat, i) => (
            <span key={i} className="pokemon-stat">
              {stat.stat.name}:{stat.base_stat}
            </span>
          ))}
        </div>

        <div className="pokemon-viewer__stats-weight-height">
          <span>Weight: {pokemon.weight}</span>
          <span>Height: {pokemon.height}</span>
        </div>
      </div>
    </section>
  );
}
export default PokemonViewer;
