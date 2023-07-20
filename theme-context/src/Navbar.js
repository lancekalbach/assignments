import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function Navbar(props) {
    
    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}-theme`}>
             <ul className="nav">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}