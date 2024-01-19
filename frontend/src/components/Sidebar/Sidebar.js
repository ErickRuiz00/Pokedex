import PokemonViewer from "./PokemonViewer";
import SearchBar from "./SearchBar";
import SidebarButton from "./SidebarButton";
import { FaBox, FaHome } from "react-icons/fa";
import "./Styles/Sidebar.css";

const btnOptions = {
  size: 20,
  color: "white",
};

function Sidebar({ pokemon, setShowStock }) {
  return (
    <div className="main-container">
      <img src="/images/pokedex-logo.png" alt="Logo Pokedex" className="logo" />
      <SearchBar />
      <div className="btn-section">
        <SidebarButton
          icon={<FaHome size={btnOptions.size} color={btnOptions.color} />}
          action={() => setShowStock(false)}
        />
        <SidebarButton
          icon={<FaBox size={btnOptions.size} color={btnOptions.color} />}
          action={() => setShowStock(true)}
        />
      </div>
      <PokemonViewer pokemon={pokemon} />
    </div>
  );
}

export default Sidebar;
