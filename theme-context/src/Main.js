import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function Main(props) {
    
    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <p>The Main area oh yeah</p>
        </div>
    )

}