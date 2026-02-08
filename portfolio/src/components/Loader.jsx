// src/components/Loader.jsx
import React from "react";
import "./sections/style/Loader.css"; // lo veremos después

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;
