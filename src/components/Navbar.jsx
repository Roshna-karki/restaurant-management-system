import logo from "../../public/Logo.png";

const Navbar = () => {
  return (
    <header className="header bg-red-500">
        <div className="logo bg-blue-500">
          <img src={logo} alt="Spicebite Logo" className="logo-icon" />
          <span className="logo-text">Spicebite</span>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <div className="dropdown">
            <a href="#customer">Customer ▼</a>
          </div>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="start-free-btn">Start for Free</button>
        </div>
      </header>
  )
}

export default Navbar