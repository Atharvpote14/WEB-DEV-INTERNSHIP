function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">📝</span>
        <span className="brand-name">Notes App</span>
      </div>

      <div className="navbar-user">
        <img className="navbar-avatar" src={user.picture} alt={user.name} />
        <span className="navbar-username">{user.name}</span>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
