import Navbar from '../components/navbar/Navbar';
import { useTranslation } from "react-i18next";
import MyProjects from '../components/sections/Projects';

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Navbar nombre={t("header.projects")} />
      <MyProjects />
    </div>
  );
};

export default Projects;
