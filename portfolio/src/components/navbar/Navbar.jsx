import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import spanishFlag from "../../assets/mexico.png";

const Navbar = ({ nombre }) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Por defecto estamos en inglés
  const isSpanish = i18n.language.startsWith("es");

  const toggleLang = () => {
    // Si es español, cambiar a inglés; si no, cambiar a español
    i18n.changeLanguage(isSpanish ? "en" : "es");
  };

  const go = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <span className="navbar__brand">{nombre}</span>

        <button
          className={`navbar__toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu ${open ? "active" : ""}`}>
          <li onClick={() => go("/")}><a>{t("header.home")}</a></li>
          <li onClick={() => go("/research")}><a>{t("header.research")}</a></li>
          <li onClick={() => go("/projects")}><a>{t("header.projects")}</a></li>
          <li onClick={() => go("/contact")}><a>{t("header.contact")}</a></li>

          <li className="navbar__lang" style={{ display: "flex", alignItems: "center" }}>
            {/* Bandera siempre visible */}
            <img
              src={spanishFlag}
              alt="Español"
              style={{ width: "30px", marginRight: "10px" }}
            />

            <label className="switch">
              <input
                type="checkbox"
                // El switch indica si el idioma está en español
                checked={isSpanish}
                onChange={toggleLang}
              />
              <span className="slider"></span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
