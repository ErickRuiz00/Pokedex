import "./Styles/SidebarButton.css"

function SidebarButton({ icon, action, customStyle }) {
  return (
    <div className="btn-container">
      <button onClick={action} className={`sidebar-btn ${customStyle}`}>{icon}</button>
    </div>
  );
}
export default SidebarButton;
