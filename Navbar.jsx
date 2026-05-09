import { NavLink } from "react-router-dom";
import materiList from "../data/materi";
import "./Navbar.css";

function Navbar({ progres }) {
  const hafal = Object.values(progres).filter((s) => s === "hafal").length;
  const total = materiList.length;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          <span className="brand-icon">📖</span>
          <span>Pintar<b>Tajwid</b></span>
        </NavLink>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/belajar" className={({ isActive }) => (isActive ? "active" : "")}>
              Belajar
              {hafal > 0 && (
                <span className="progress-badge">{hafal}/{total}</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;