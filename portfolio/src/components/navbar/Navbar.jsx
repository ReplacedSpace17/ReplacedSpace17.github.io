import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Navbar.css";
const Navbar = ({ nombre }) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language.startsWith("en");

  const toggleLang = () => {
    i18n.changeLanguage(isEnglish ? "es" : "en");
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
          <li><a>{t("header.home")}</a></li>
          <li><a>{t("header.research")}</a></li>
          <li><a>{t("header.projects")}</a></li>
          <li><a>{t("header.contact")}</a></li>

          <li className="navbar__lang">
            <label className="switch">
              <input
                type="checkbox"
                checked={isEnglish}
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