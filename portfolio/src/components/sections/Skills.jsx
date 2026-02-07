import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import './style/home.css';

// Iconos
import {SiNginx, SiTypescript, SiJavascript, SiPython, SiGo, SiReact, SiExpress, SiTensorflow, SiPytorch, SiDeno, SiFlask, SiFastapi, SiGin, SiMysql, SiMongodb, SiPostgresql, SiSqlite, SiFirebase, SiLinux } from "react-icons/si";
import { FaJava, FaNodeJs, FaMicrosoft, FaGitAlt, FaDocker} from "react-icons/fa";
import { MdOutlineHub } from "react-icons/md";

const Skills = () => {
  const { t } = useTranslation();

  const languages = [
    { icon: <SiTypescript size={40} color="#3178C6" />, name: "TypeScript" },
    { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiPython size={40} color="#fee20cff" />, name: "Python" },
    { icon: <FaJava size={40} color="#007396" />, name: "Java" },
    { icon: <SiGo size={40} color="#00ADD8" />, name: "Go" },
    { icon: <SiLinux size={40} color="#000000ff" />, name: "Linux" },
    { icon: <FaGitAlt size={40} color="#F05032" />, name: "Git" },
    { icon: <FaDocker size={40} color="#2496ED" />, name: "Docker" }
  ];

  const libraries = [
    { icon: <SiReact size={40} color="#61DAFB" />, name: "React" },
    { icon: <FaNodeJs size={40} color="#339933" />, name: "Node.js" },
    { icon: <SiExpress size={40} color="#000000" />, name: "Express" },
    { icon: <SiTensorflow size={40} color="#FF6F00" />, name: "TensorFlow" },
    { icon: <SiPytorch size={40} color="#EE4C2C" />, name: "PyTorch" },
    { icon: <SiDeno size={40} color="#000000" />, name: "Deno" },
    { icon: <SiFlask size={40} color="#000000" />, name: "Flask" },
    { icon: <SiFastapi size={40} color="#009688" />, name: "FastAPI" },
    { icon: <SiGin size={40} color="#00BEBE" />, name: "Gin" },
    { icon: <SiFirebase size={40} color="#FFCA28" />, name: "Firebase" },
    { icon: <FaMicrosoft size={40} color="#0089D6" />, name: "Azure" },
    { icon: <SiNginx size={40} color="#FF5722" />, name: "Nginx" },
    { icon: <MdOutlineHub size={40} color="#000000" />, name: "MQTT" },
  ];

  const databases = [
    { icon: <SiMysql size={40} color="#4479A1" />, name: "MySQL" },
    { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
    { icon: <SiPostgresql size={40} color="#336791" />, name: "PostgreSQL" },
    { icon: <SiSqlite size={40} color="#003B57" />, name: "SQLite" },
  ];

  // Variants de animación
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const renderIcons = (items) => (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      justifyContent: "center",
      marginTop: "12px"
    }}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ textAlign: "center" }}
        >
          {item.icon}
          <div style={{ fontSize: "14px", marginTop: "6px", color: "#4e4e4e" }}>{item.name}</div>
        </motion.div>
      ))}
    </div>
  );

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
        display: "flex",
        flexDirection: "column",
        alignItems: "start"
      }}>
        {/* Languages */}
        <motion.p
          variants={paragraphVariants}
          style={{
            fontSize: "22px",
            fontFamily: "Inter",
            fontWeight: 400,
            marginTop: "16px",
            color: "#4e4e4e"
          }}
        >
          {t("skills.languages")}
        </motion.p>
        {renderIcons(languages)}

        {/* Libraries */}
        <motion.p
          variants={paragraphVariants}
          style={{
            fontSize: "22px",
            fontFamily: "Inter",
            fontWeight: 400,
            marginTop: "32px",
            color: "#4e4e4e"
          }}
        >
          {t("skills.libraries")}
        </motion.p>
        {renderIcons(libraries)}

        {/* Databases */}
        <motion.p
          variants={paragraphVariants}
          style={{
            fontSize: "22px",
            fontFamily: "Inter",
            fontWeight: 400,
            marginTop: "32px",
            color: "#4e4e4e"
          }}
        >
          {t("skills.databases")}
        </motion.p>
        {renderIcons(databases)}
      </div>
    </motion.section>
  );
};

export default Skills;
