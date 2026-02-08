import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./style/Publications.css";

const Publication = ({ publications }) => {
  const { t, i18n } = useTranslation();

  const sortedWorks = useMemo(() => {
    return [...publications].sort((a, b) => {
      const yearA = a?.["publication-date"]?.year?.value || 0;
      const yearB = b?.["publication-date"]?.year?.value || 0;
      return yearB - yearA;
    });
  }, [publications]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="publications-section">
      <div className="publications-container">
        {/* Título */}
        <motion.h1
          className="publications-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {t("research.publications")}
        </motion.h1>

        <div className="publications-list">
          {sortedWorks.map((work) => {
            const year = work?.["publication-date"]?.year?.value || "—";
            const url =
              work?.["external-ids"]?.["external-id"]?.[0]?.["external-id-url"]
                ?.value;

            return (
              <motion.article
                key={work["put-code"]}
                className="publication-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="publication-year">{year}</div>
                <div className="publication-content">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-title"
                  >
                    {work?.title?.title?.value || "Untitled publication"}
                  </a>
                  <span className="publication-meta">
                    {work?.["journal-title"]?.value || "Journal / Conference"}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publication;
