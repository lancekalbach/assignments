import React from "react"

export default function Badge(props) {
    return (
        <div className='badge'>
            <div className='header'>Badge:</div>
            <div className='row'>
                <p className="names--combined"><span className="bold">Name:</span> {props.firstName + " " + props.lastName}</p>
            </div>
            <div className='row'>
                <div><p><span className="bold">Phone:</span> {props.phone}</p></div>
                <div><p><span className="bold">Place of Birth:</span> {props.placeOfBirth}</p></div>
            </div>
            <div className='row'>
                <div><p><span className="bold">Favorite Food:</span> {props.favoriteFood}</p></div>
                <div><p><span class="bold">Email:</span> {props.email}</p></div>
            </div>
            <div className='about'>
                <p><span className="bold">About:</span> {props.aboutYourself}</p>
            </div>
            <div className='footer'></div>
        </div>
    )
}