import React from "react";
import Navbar from "../components/navbar/Navbar";

const Example = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9ff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh" }}>
      <Navbar nombre={"titulo"} />
      
    </div>
  );
};



export default Example;