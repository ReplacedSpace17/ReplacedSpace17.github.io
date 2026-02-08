import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./style/areas.css";

import dna from "../../assets/dna.svg";
import vision from "../../assets/vision.svg";
import iot from "../../assets/iot.svg";
import rocket from "../../assets/rocket.svg";

const areaIcons = [dna, vision, iot, rocket];

const Areas = () => {
  const { t, i18n } = useTranslation();

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const areas = t("research.section1_areas", { returnObjects: true });
console.log("Areas:", areas);

  return (
    <motion.section
    key={i18n.language}
      className="areas-section"
      initial="hidden"
      whileInView="visible"
      
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="areas-container">
        {/* Título */}
        <div className="areas-title-wrapper">
          <h1 className="areas-title">
            {t("research.research")}
          </h1>
        </div>

        {/* Párrafo */}
        <motion.p
          className="areas-paragraph"
          variants={paragraphVariants}
          transition={{ duration: 0.8 }}
        >
          {t("research.section1")}
        </motion.p>

        {/* Cards */}
        <div className="areas-cards">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              className="area-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "0px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <img
                src={areaIcons[index]}
                alt={area}
                className="area-card-icon"
              />

              <div className="area-card-label">
                {area}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        {/* Scroll indicator */}
  <div className="scroll-indicator">
    <span className="scroll-line" />
    <span className="scroll-dot" />
  </div>
    </motion.section>
  );
};

export default Areas;
