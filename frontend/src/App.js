import { useState } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [pokemon, setPokemon] = useState();
  const [showStock, setShowStock] = useState(false);

  return (
    <div className="app-container">
      <Sidebar pokemon={pokemon} setShowStock={setShowStock} />
      <PokemonList choosePokemon={setPokemon} showStock={showStock}/>
    </div>
  );
}

export default App;
