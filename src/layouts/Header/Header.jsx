import jslogo from "/src/assets/JavaScript-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <img className="jslogo" src={jslogo} alt="javascript" />
        <h2>JsCompiler</h2>
      </div>
      <ul className={menuOpen ? "show-menu" : ""}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/docs"}>Docs</Link></li>
        <li><Link to={"/examples"}>Examples</Link></li>
      </ul>
      <i
        onClick={toggleMenu}
        id="menuIcon"
        className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} fs-3 menuIcon`}
      ></i>
    </header>
  );
}

export default Header;
