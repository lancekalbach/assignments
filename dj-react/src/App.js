import React, {useState} from "react"
import Boxes from "./Boxes"
import "./index.css"
import Square from "./Square"

export default function App(props) {
  
const [colors, setColors] = useState(['white', 'white', 'white', 'white'])

const button1 = () => {
  if (colors[0] === 'white') {
    setColors(prevColors => {
      console.log('colors before set', colors)
      return prevColors.map(color => color = 'black')
    })
  } else if (colors[0] === 'black') {
    setColors(prevColors => {
      return prevColors.map(color => color = 'white')
    })
  }
}

const button2 = () => {
  if (colors[0] === 'white') {
    setColors(prevColors => {
      return [ 'purple', 'purple', ...prevColors.slice(2) ]
    })
  } else if (colors[0] === 'purple') {
    setColors(prevColors => {
      return [ 'white', 'white', 'white', 'white']
    })
  }
  }

    
const button3 = () => {
    
}
const button4 = () => {
    
}   
console.log('colors outside setter function', colors)
  return (
    <div>
        {colors.map((square, index) => {
          return (
            <Square colors={colors} index={index} setColors={setColors}/>
          )
        })}
      <div>
          <button onClick={button1}>Button 1</button>
          <button onClick={button2}>Button 2</button>
        </div>
      </div>
  )
}
