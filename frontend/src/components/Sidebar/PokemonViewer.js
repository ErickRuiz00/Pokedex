import "./Styles/PokemonViewer.css";

function PokemonViewer({ pokemon }) {
  if (!pokemon) return;

  return (
    <section className="pokemon-viewer__container">
      <div className="pokemon-viewer__details">
        <h2>{pokemon.name}</h2>
        <p>N.° {pokemon.id}</p>
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
          {pokemon.type.map((name, i) => (
            <span key={i} className={`pokemon-type ${name}`}>
              {name}
            </span>
          ))}
        </div>

        <div className="pokemon-viewer__stats-abilities">
          <h4>Ataques:</h4>
          {pokemon.abilities.map((ability, i) => (
              <span key={i} className="pokemon-ability">
                {ability} {i < pokemon.abilities.length - 1 && '|'}&nbsp;
              </span>
          ))}
        </div>

        <div className="pokemon-viewer__stats-base-stats">
          <h4>Estadísticas:</h4>
          {pokemon.stats.map((stat, i) => (
            <span key={i} className="pokemon-stat">
              {stat.name}: {stat.base_stat} {i < pokemon.stats.length - 1 && '|'}&nbsp;
            </span>
          ))}
        </div>

        <div className="pokemon-viewer__stats-weight-height">
          <span>Peso: {pokemon.weight} {'|'}&nbsp;</span>
          
          <span>Talla: {pokemon.height}</span>
        </div>
      </div>
    </section>
  );
}
export default PokemonViewer;
