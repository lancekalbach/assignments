import React from "react"
import Badge from "./Badge"

export default function Badges(props) {
    const mapBadges = props.badges.map((item,key) =>
        <Badge
            key={key}
            firstName={item.firstName}
            lastName={item.lastName}            
            email={item.email}
            placeOfBirth={item.placeOfBirth}
            phone={item.phone}
            favoriteFood={item.favoriteFood}
            aboutYourself={item.aboutYourself}
        />
    )

    return (
        <div className="badge--box">
            {mapBadges}
        </div>
    )
}