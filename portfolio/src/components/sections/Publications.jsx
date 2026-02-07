import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import './style/home.css';

const Publication = () => {
  const { t } = useTranslation();
  const [works, setWorks] = useState([]);

  useEffect(() => {
    // Obtener publicaciones desde ORCID en formato JSON
    fetch("https://pub.orcid.org/v3.0/0009-0006-4378-461X/works", {
      headers: {
        Accept: "application/json" // IMPORTANTE: obtener JSON
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data["group"]) {
          // Cada grupo puede tener varios work-summary
          const publications = data.group.map(group => group["work-summary"][0]);
          setWorks(publications);
        }
      })
      .catch(err => console.error("Error fetching ORCID works:", err));
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}>
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "28px",
            color: "#4e4e4e",
            fontFamily: "Inter",
            fontWeight: 600,
            marginBottom: "24px"
          }}
        >
          {t("research.publications")}
        </motion.h1>

        {works.map((work, index) => (
          <motion.div
            key={work["put-code"]}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              backgroundColor: "#fafafa",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <a
              href={work["external-ids"]["external-id"][0]["external-id-url"]["value"]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "18px", fontWeight: 500, color: "#007ACC", textDecoration: "none" }}
            >
              {work.title.title.value}
            </a>
            <span style={{ fontSize: "14px", color: "#666", marginTop: "4px" }}>
              {work["journal-title"] ? work["journal-title"].value : "Journal / Conference"} - {work["publication-date"]?.year?.value || "Year N/A"}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Publication;
