import PokemonViewer from "./PokemonViewer";
import SearchBar from "./SearchBar";
import SidebarButton from "./SidebarButton";
import {
  FaBox,
  FaHome,
  FaPlusCircle,
  FaRegEdit,
  FaTrash,
} from "react-icons/fa";
import "./Styles/Sidebar.css";

const btnOpt = {
  size: 20,
  color: "white",
};

function Sidebar({ pokemon }) {
  return (
    <div className="main-container">
      <img src="/images/pokedex-logo.png" alt="Logo Pokedex" className="logo" />
      <SearchBar />
      <div className="btn-section">
        <SidebarButton
          icon={<FaHome size={btnOpt.size} color={btnOpt.color} />}
        />
        <SidebarButton
          icon={<FaBox size={btnOpt.size} color={btnOpt.color} />}
        />
        <SidebarButton
          icon={<FaPlusCircle size={btnOpt.size} color={btnOpt.color} />}
        />
        <SidebarButton
          icon={<FaRegEdit size={btnOpt.size} color={btnOpt.color} />}
        />
        <SidebarButton
          icon={<FaTrash size={btnOpt.size} color={btnOpt.color} />}
        />
      </div>
      <PokemonViewer pokemon={pokemon} />
    </div>
  );
}

export default Sidebar;
