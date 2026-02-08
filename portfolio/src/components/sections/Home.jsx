import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import "./style/home.css";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import email from "../../assets/email.svg";
import foto from "../../assets/images/photo.jpg";
import { useNavigate } from "react-router-dom";

/* =======================
   Animations
======================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const HomeSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
  };

  /* =======================
     Social URLs
  ======================= */

  const socials = [
    {
      icon: linkedin,
      url: "https://www.linkedin.com/in/replacedspace17/",
      label: "LinkedIn profile",
    },
    {
      icon: github,
      url: "https://github.com/replacedspace17",
      label: "GitHub profile",
    },
    {
      icon: instagram,
      url: "https://www.instagram.com/replacedspace17.py",
      label: "Instagram profile",
    },
    {
      icon: email,
      url: "mailto:replacedspace17@gmail.com",
      label: "Email contact",
    },
  ];

  /* =======================
     Init tsParticles
  ======================= */

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  /* =======================
     Particle options
  ======================= */

  const particlesOptions = useMemo(
    () => ({
      fullScreen: false,
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      particles: {
        color: { value: "#263057" },
        links: {
          enable: true,
          color: "#263057",
          distance: 150,
          opacity: 0.1,
        },
        move: { enable: true, speed: 0.3 },
        number: { density: { enable: true }, value: 120 },
        opacity: { value: 0.2 },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <motion.section
    key={i18n.language}
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ===============================
          PARTICLES BACKGROUND
      =============================== */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Particles options={particlesOptions} />
      </div>

      {/* ===============================
          MAIN CONTENT
      =============================== */}
      <div
        style={{
          width: "80vw",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ===== Left content ===== */}
        <motion.div
          variants={containerVariants}
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "2.5rem",
              color: "#111",
              marginBottom: "10px",
            }}
          >
            {t("home.title")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "22px",
              color: "#4e4e4e",
              fontFamily: "Inconsolata",
              fontWeight: 300,
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            {t("home.description")}
          </motion.p>

          {/* ===============================
              SOCIAL ICONS (WITH LINKS)
          =============================== */}
          <motion.div
            variants={containerVariants}
            style={{ display: "flex", marginTop: "20px" }}
          >
            {socials.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                variants={fadeUp}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  marginRight: "16px",
                  display: "inline-flex",
                }}
              >
                <motion.img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: "26px",
                    cursor: "pointer",
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* ===============================
              CTA BUTTON
          =============================== */}
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="wave-button"
            style={{ marginTop: "30px" }}
            onClick={() => go("/contact")}
          >
            {t("home.button")}
          </motion.button>
        </motion.div>

        {/* ===== Right content (Photo) ===== */}
        <motion.div
          variants={fadeRight}
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="profile-wrapper">
            <img src={foto} alt="Profile" className="profile-image" />
          </div>
        </motion.div>
      </div>

      {/* ===============================
          SCROLL INDICATOR
      =============================== */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ zIndex: 2 }}
      >
        <span></span>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
