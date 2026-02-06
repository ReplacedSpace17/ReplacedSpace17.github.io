import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HeroSection from "./pages/HeroSection"
import Example from "./pages/Example"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </Router>
  )
}

export default App
