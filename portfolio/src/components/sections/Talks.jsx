import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import './style/Talks.css';

const Talks = () => {
  const { t, i18n } = useTranslation();
  const talks = t("research.list", { returnObjects: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
    key={i18n.language}
      className="talks-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={containerVariants}
    >
      <div className="talks-container">
        {/* Title */}
        <motion.h1
          className="talks-title"
          variants={itemVariants}
        >
          {t("research.talks")}
        </motion.h1>

        {/* List */}
        <div className="talks-list">
          {talks.map((talk, index) => (
            <motion.article
              key={index}
              className="talks-card"
              variants={itemVariants}
            >
              <div className="talks-year">
                {talk.year}
              </div>

              <div className="talks-content">
                <span className="talks-name">
                  {talk.name}
                </span>

                <span className="talks-location">
                  {talk.location}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Talks;
