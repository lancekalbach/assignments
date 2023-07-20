import React from "react"


export default function BlogPost(props) {

    return (
        <div className= "blog--data">
            <p className= "blog--title"> <span className="bold">{props.title}</span></p>
            <p className= "blog--sub">{props.subTitle}</p>
            <p className= "blog---author"> Started by <span className= "bold">{props.author} </span>on</p>
            <p className= "blog--date">{props.date}</p>
        </div>
    )
}