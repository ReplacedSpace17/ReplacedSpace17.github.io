import Navbar from '../components/navbar/Navbar';
import HomeSection from '../components/sections/Home';
import About from '../components/sections/About';
import { useTranslation } from "react-i18next";
import Inter_About from '../components/sections/InterAbout';
import Inter_Skills from '../components/sections/Inter_Skills';
import Skills from '../components/sections/Skills';

const Inicio = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar nombre={t("header.home")} />
      <HomeSection />
      <Inter_About />
      <About />
      <Inter_Skills />
      <Skills />

    </div>
  );
};

export default Inicio;
