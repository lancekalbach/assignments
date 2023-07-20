import React from "react"
import PetList from "./PetList"

export default function FriendList(props) {
    console.log('props in friend list', props)
    const {friendName, friendAge, pets} = props
    const petInfo = pets.map(item => {
        return (
            <PetList classname="pet--list"
            petName={item.name}
            petBreed={item.breed}
            />
        )
    })

    return (
        <div className="list--background--change">
            <p className="friend--name">Name: <span className="bold">{friendName}</span></p>
            <p className="friend--age">Age: <span className="age--ital"><span className="bold">{friendAge}</span></span></p>
            <section>
                {petInfo}
            </section>
        </div>
    )
}