import React from 'react'
import "./index.css"

export default function Square(props){
    const {colors, index, setColors} = props
    return (
        <div className = {`square square-${index}`} key = {index}
            style = {{
                backgroundColor: colors[index]
            }}>
        </div>
    )
}