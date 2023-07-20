import React from "react";
import About from "./About.js";
import Search from "./Search.js";
import logosoup from "./logosoup.png"

export default function Home() {
    return (
        <div className="grid-container">
            <img src={logosoup} alt="logo-image" className="logo-img"/>
            <h1 className="page-name">The Meal Finder</h1>
            
            <div className="about-txt">
                <About/>
            </div>

            <div className="search-box">
                <Search/>
                <div className="results-container">
                    <ul>
                        {/* List items with food names and images */}
                    </ul>
                 </div>
            </div>
        </div>
    )
}