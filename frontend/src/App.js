import { useState, useEffect } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [pokemon, setPokemon] = useState();

  return (
    <div className="app-container">
      <Sidebar pokemon={pokemon} />
      <PokemonList choosePokemon={setPokemon} />
    </div>
  );
}

export default App;
