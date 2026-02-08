// App.jsx
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Research from "./pages/Research"
import ScrollToTop from "./components/ScrollToTop"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  const [publications, setPublications] = useState([])

  useEffect(() => {
    fetch("https://pub.orcid.org/v3.0/0009-0006-4378-461X/works", {
      headers: { Accept: "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        if (data?.group) {
          const pubs = data.group
            .map(group => group["work-summary"][0])
            .filter(Boolean)
          setPublications(pubs)
        }
      })
      .catch(err => console.error("Error fetching ORCID publications:", err))
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/research" element={<Research publications={publications} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
