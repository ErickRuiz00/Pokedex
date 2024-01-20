import { useState } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [pokemon, setPokemon] = useState();
  const [showStock, setShowStock] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div className="app-container">
      <Sidebar
        pokemon={pokemon}
        setShowStock={setShowStock}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
      />
      <PokemonList
        choosePokemon={setPokemon}
        showStock={showStock}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
      />
    </div>
  );
}

export default App;
