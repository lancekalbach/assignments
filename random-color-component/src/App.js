import React from "react"

//Creating the function for react and exporting it
export default function App() {
    //Setting the color components and setting up state
    const [color, setColor] = React.useState({})

    //function to set the color to color on click
    function getColor() {
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => res.json()) // this is taking the result from the api and putting it in json
            .then(res => setColor(res.colors[0].hex))
    }
    //creating useEffect function to pull data from the api and setting the data to the setColor
    React.useEffect(function() {
        console.log("Effect ran")
        getColor()
        // fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        //     .then(res => res.json()) // this is taking the result from the api and putting it in json
        //     .then(res => setColor(res.colors[0].hex))
            //.then(data => setColor(data)) //this is taking the data within the api and pushing it to setColor
            // .then(data => console.log(data)) //this is taking the data within the api and pushing it to setColor
            // I am not understanding how to set the background color to the color that is within the api
            // document.body.style.backgroundColor = color //This is accessing the body and trying to set the background color to the color within the api, not sure if this is working
            //console.log(color.colors[0].hex)
            //console.log(data.data.colors[0].hex)
    }, [])
//creating the div and the button and setting the function to handle the click 
    return (
        <div>
            <button onClick = {getColor} >Get Next Color</button>
            <div className = "background--color" style={{background: `#${color}`}}></div>
        </div>
    )
}

//Push the data to the color component 
//I am trying to take the color data from the api 
//and set that color background color


