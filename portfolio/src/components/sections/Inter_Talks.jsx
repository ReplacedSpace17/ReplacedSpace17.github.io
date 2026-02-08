import image from "../../assets/images/talks.jpg";
import { useTranslation } from "react-i18next";

const Inter_talks = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        width: "100vw",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // esto hace el efecto parallax al hacer scroll
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Capa semi-transparente para mejorar legibilidad */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // negro semi-transparente
          //filtro blur
           backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)", // Safari
          zIndex: 1,
        }}
      />
      {/* Texto encima */}
      <h1
        style={{
          fontSize: "6rem",
          zIndex: 2, // por encima de la capa transparente
          margin: 0,
          padding: "0 20px",
          lineHeight: 1.2,
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)", // para que resalte sobre la imagen
        }}
      >
        {t("research.talks")}
      </h1>
    </div>
  );
};

export default Inter_talks;
