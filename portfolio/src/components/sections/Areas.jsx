import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import './style/home.css';

const Areas = () => {
  const { t } = useTranslation();

  // Animaciones
  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const labelVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#ffffffff"
      }}
    >
      <div style={{
        width: "80%",
        maxWidth: "1200px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        {/* Párrafo animado */}
        <motion.p
          variants={paragraphVariants}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "22px",
            color: "#4e4e4e",
            fontFamily: "Inter",
            fontWeight: 400,
            lineHeight: "1.8",
            textAlign: "justify",
            marginBottom: "24px"
          }}
        >
          {t("about_me.description")}
        </motion.p>

        <div style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}>
          {t("about_me.labels", { returnObjects: true }).map((label, index) => (
            <motion.div
              key={index}
              variants={labelVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: '12px 20px',
                backgroundColor: "#ffffff",
                border: '1px solid #C8C8C8',
                borderRadius: '30px',
                fontSize: "14px",
                color: "#333",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Areas;
