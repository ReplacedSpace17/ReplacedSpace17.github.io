import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

import "./style/contact.css";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import emailIcon from "../../assets/email.svg";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const [sending, setSending] = useState(false);

  const socials = [
    { icon: linkedin, url: "https://www.linkedin.com/in/replacedspace17/", label: "LinkedIn profile" },
    { icon: github, url: "https://github.com/replacedspace17", label: "GitHub profile" },
    { icon: instagram, url: "https://www.instagram.com/replacedspace17.py", label: "Instagram profile" },
    { icon: emailIcon, url: "mailto:replacedspace17@gmail.com", label: "Email contact" },
  ];

  useEffect(() => {
    initParticlesEngine(async (engine) => await loadSlim(engine));
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: false,
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    particles: {
      color: { value: "#263057" },
      links: { enable: true, color: "#263057", distance: 150, opacity: 0.1 },
      move: { enable: true, speed: 0.3 },
      number: { density: { enable: true }, value: 120 },
      opacity: { value: 0.2 },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), []);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    setSending(true);

    emailjs.send(
      "service_k9iamal",         // Service ID
      "template_arctq5v",        // Template ID
      {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        time: new Date().toLocaleString(),
      },
      "1PQEWWkyrYQTgoGKe"        // Public Key
    )
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "¡Correo enviado!",
        text: "Tu mensaje se ha enviado correctamente.",
        confirmButtonColor: "#263057",
      });
      form.reset();
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        confirmButtonColor: "#263057",
      });
    })
    .finally(() => setSending(false));
  };

  return (
    <motion.section
    key={i18n.language}
      className="contact-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <Particles options={particlesOptions} />
      </div>

      <div style={{ width: "80vw", maxWidth: "1200px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          style={{
            width: "80%",
            maxWidth: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(250, 250, 250, .8)",
            padding: "20px",
            borderRadius: "20px",
            border: "2px solid rgba(0, 0, 0, 0.23)"
          }}
        >
          <motion.h1 variants={fadeUp} style={{ fontSize: "2.5rem", color: "#111", marginBottom: "10px" }}>
            {t("contact.title")}
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: "16px", color: "#4e4e4e", fontFamily: "Inconsolata", fontWeight: 400 }}>
            {t("contact.description")}
          </motion.p>

          <motion.form variants={fadeUp} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder={t("contact.name")} required />
            <input type="email" name="email" placeholder={t("contact.email")} required />
            <textarea name="message" placeholder={t("contact.message")} required style={{ resize: "none" }}></textarea>
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
              <button type="submit" className="button-send" disabled={sending}>
                {sending ? "Enviando..." : t("contact.btn_email")}
              </button>
            </div>
          </motion.form>

          <motion.div variants={containerVariants} style={{ display: "flex", marginTop: "20px" }}>
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
                style={{ marginRight: "16px", display: "inline-flex" }}
              >
                <motion.img src={item.icon} alt={item.label} style={{ width: "26px", cursor: "pointer" }} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
