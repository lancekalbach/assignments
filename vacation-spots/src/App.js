import React from "react"
import Card from "./Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                place={item.place}
                price={item.price}
                timeToGo={item.timeToGo}
                image={item.image}
            />
        )
    })        
    
    return (
        <div>
            {cards}
        </div>
    )
}