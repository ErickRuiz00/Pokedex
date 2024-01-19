import { useState, useEffect } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3001/");
      const data = await res.json();
      // console.log(data);
    };

    getData();
  }, []);

  return (
    <div className="app-container">
      <Sidebar pokemon={pokemon} />
      <PokemonList choosePokemon={setPokemon} />
    </div>
  );
}

export default App;
