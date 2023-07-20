import React from "react";
import RandomMeal from "./RandomMeal.js";

export default function Random() {
    return (
        <div className="grid-container">
            <h1 className="page-name">The Meal Finder</h1>

            <div className="search-box">
               <RandomMeal/>
            </div>
        </div>
    )
}