import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function Footer(props) {
    
    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <p>Footer</p>
        </div>
    )

}