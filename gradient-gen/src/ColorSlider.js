import React, { useState } from "react"

export default function ColorSlider() {
    
    const [color, setColor] = useState({
        color1: "",
        color2: "",
        angle: "",
    })

    const handleChange = (e) => {
        console.log(e)
        const {name , value} = e.target
        setColor(prevColor => {
          return {
            ...prevColor,
            [name]: value
          }
        })
      };

    const divStyle = {
        background: `linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})`
    }

    const txtCode = `background: linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})`

    return (
        <div>
            <form>
                <input 
                    type="color"
                    name="color1"
                    value={color.color1}
                    onChange={handleChange}
                />

                <input 
                    type="color"
                    name="color2"
                    value={color.color2}
                    onChange={handleChange}
                />
                
                <input 
                    type="number"
                    name="angle"
                    value={color.angle}
                    onChange={handleChange}
                />

                <textarea
                    readOnly
                    value={txtCode}
                    rows={3}
                />
            </form>

            <p>{color.color1}</p>
            <p>{color.color2}</p>

            <div className="testbox" style={divStyle}></div>
        </div>
    )
}