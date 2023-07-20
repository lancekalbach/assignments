import React from "react"

export default function PetList(props) {
    return (
        <div>
            <h4>Name and breed of pet:</h4>
            <p className="pet--list--p"><span className="bold">{props.petName}</span></p>
            <p className="pet--list--p"><span className="underline">{props.petBreed}</span></p>
        </div>
    )
}