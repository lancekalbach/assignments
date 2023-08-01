import React from "react";
import RandomMeal from "./RandomMeal.js";
import logosoup from "./logosoup.png"

export default function Random() {
    return (
        <div className="grid-container">
            <img src={logosoup} alt="logo-image" className="logo-img"/>
            <h1 className="page-name">The Meal Finder</h1>

            <div className="search-box">
               <RandomMeal/>
            </div>
        </div>
    )
}