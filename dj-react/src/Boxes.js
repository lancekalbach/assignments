import React from 'react'
import Square from './Square.js'
import "./index.css"

export default function Boxes(props) {
    return (
        <div className = "square--box">
            <Square className="square-1" color = {props.colors[0]}/>
            <Square className="square-2" color = {props.colors[1]}/>
            <Square className="square-3" color = {props.colors[2]}/>
            <Square className="square-4" color = {props.colors[3]}/>
        </div>
    )
}