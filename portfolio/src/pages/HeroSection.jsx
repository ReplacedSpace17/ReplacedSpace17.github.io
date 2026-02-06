import React from "react"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "../components/idioma/Idioma"

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="hero">
      {/* Selector de idioma */}
      <div className="language-switcher">
        <LanguageSwitcher />
      </div>

      <h1>{t("hero.title")}</h1>
      <p>{t("hero.description")}</p>

      <button className="btn">
        {t("hero.projects")}
      </button>
    </section>
  )
}

export default HeroSection
