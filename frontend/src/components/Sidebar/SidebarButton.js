import "./Styles/SidebarButton.css"

function SidebarButton({ icon, action }) {
  return (
    <div className="btn-container">
      <button onClick={action} className="sidebar-btn">{icon}</button>
    </div>
  );
}
export default SidebarButton;
