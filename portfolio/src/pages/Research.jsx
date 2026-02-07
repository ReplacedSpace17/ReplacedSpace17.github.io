import Navbar from '../components/navbar/Navbar';
import { useTranslation } from "react-i18next";
import Areas from '../components/sections/Areas';
import Publication from '../components/sections/Publications';
import Talks from '../components/sections/Talks';

const Research = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar nombre={t("header.research")} />
      <Areas />
      <Publication />
      <Talks />

    </div>
  );
};

export default Research;
