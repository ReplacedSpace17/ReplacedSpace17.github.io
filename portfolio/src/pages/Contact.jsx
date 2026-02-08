import Navbar from '../components/navbar/Navbar';
import HomeSection from '../components/sections/Home';
import About from '../components/sections/About';
import { useTranslation } from "react-i18next";
import ContactSection from '../components/sections/Contact';

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Navbar nombre={t("header.contact")} />
      <ContactSection />
    </div>
  );
};

export default Contact;
