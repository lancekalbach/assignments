import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Services from "./Services.js"

export default function App() {
    return (
        <Router>
            <nav className="nav-bar link-container">
            <div className="all-links">
                <Link to="/" className="link-one">
                    Home
                </Link>
            
                <Link to="/about" className="link-two">
                    About
                </Link>
                <Link to="/services" className="link-three">
                    Services
                </Link>
            </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
        </Router>
    )
}