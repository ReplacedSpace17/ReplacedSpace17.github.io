import { useState } from "react";
import "./Navbar.css";

const Navbar = ({nombre}) => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en"); // 'en' o 'es'

  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
    // Aquí puedes agregar lógica para cambiar textos globalmente
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <span className="navbar__brand">{nombre}</span>

        {/* Hamburger toggle */}
        <button
          className={`navbar__toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul className={`navbar__menu ${open ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              {lang === "en" ? "Home" : "Inicio"}
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              {lang === "en" ? "Research" : "Investigación"}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              {lang === "en" ? "Projects" : "Proyectos"}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              {lang === "en" ? "Contact" : "Contacto"}
            </a>
          </li>

          {/* Language switch */}
          <li className="navbar__lang">
            <label className="switch">
              <input type="checkbox" checked={lang === "es"} onChange={toggleLang} />
              <span className="slider"></span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
