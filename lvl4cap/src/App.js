import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home.js";
import Random from "./Random.js"
import Meals from "./Meals.js";

export default function App() {
    return (
        <Router>
            <div className="dropdown">
            <nav className="navbar">
                Hover for more
                <div className="dropdown-content">
                    <Link to="home">
                        Home
                    </Link>

                    <Link to="random">
                        Random Meal
                    </Link>

                    <Link to="list">
                        Meal Category List
                    </Link>

                </div>
            </nav>
            </div>

            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="random" element={<Random/>}/>
                <Route path="list" element={<Meals/>}/>
            </Routes>
    </Router>
    )
}