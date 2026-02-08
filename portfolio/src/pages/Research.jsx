import Navbar from '../components/navbar/Navbar';
import { useTranslation } from "react-i18next";
import Areas from '../components/sections/Areas';
import Publication from '../components/sections/Publications';
import Talks from '../components/sections/Talks';
import Inter_Publications from '../components/sections/Inter_Publications';
import Inter_talks from '../components/sections/Inter_Talks';

// Research.jsx
const Research = ({ publications }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Navbar nombre={t("header.research")} />
      <Areas />
      <Inter_Publications />
      <Publication publications={publications} />
      <Inter_talks />
      <Talks />
    </div>
  )
}


export default Research;
