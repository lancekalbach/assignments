import React from "react"
import data from "./data"
import FriendList from "./FriendList"

export default function App() {
    const friends = data.map(item => {
        return (
            <FriendList
            friendName={item.name}
            friendAge={item.age}
            pets={item.pets}
            />
        )
    })

    return (
        <div>
            <section className="friend-pet--list">
                {friends}
            </section>
        </div>
    )
}