import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <p>{props.image}</p>
            <p className="card--text">{props.place}</p>
            <p className="card--text"> Average price to visit: ${props.price}</p>
            <p className="card--text"> Best time to go: {props.timeToGo}</p>
        </div>
    )
}