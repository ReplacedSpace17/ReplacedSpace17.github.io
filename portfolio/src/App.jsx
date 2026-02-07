import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Research from "./pages/Research"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  )
}

export default App
