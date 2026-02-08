import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import './style/Projects.css';

const MyProjects = () => {
  const { t, i18n } = useTranslation();
  const projects = t("projects.my_projects", { returnObjects: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
    key={i18n.language}
      className="projects-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        width: "100vw",
        height: "100vh", // altura completa de viewport
        overflowY: "auto", // scroll solo en esta sección
        overflowX: "hidden",
      }}
    >
      <div className="projects-container" style={{ padding: "40px" }}>
        {/* Title */}
        <motion.h1
          className="projects-title"
          variants={itemVariants}
          style={{ marginBottom: "30px" }}
        >
          {t("projects.title")}
        </motion.h1>

        {/* Cards */}
        <div
          className="projects-list"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="project-card"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.45, delay: index * 0.1 }}
              style={{
                width: "248px",
                height: "355px",
                borderRadius: "12px",
                padding: "16px",
                backgroundColor: "#fff",
                boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {project.image_name && (
                <img
                  src={`/projects/${project.image_name}`}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              )}

              <h2
                className="project-name"
                style={{
                  textAlign: "center",
                  margin: "12px 0 8px 0",
                  fontSize: "18px",
                }}
              >
                {project.title}
              </h2>

              <p
                className="project-summary"
                style={{ flex: 1, textAlign: "justify", fontSize: "14px" }}
              >
                {project.resume}
              </p>

              <button
                className="project-button"
                style={{
                  backgroundColor: "#2CA0F3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "8px 0",
                  cursor: project.private ? "not-allowed" : "pointer",
                  marginTop: "12px",
                }}
                onClick={() => {
                  if (!project.private) {
                    window.open(project.link, "_blank");
                  }
                }}
              >
                {project.private ? t("projects.btn2") : t("projects.btn")}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MyProjects;
