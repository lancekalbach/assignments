import React, {useState} from "react"

export default function DiceBox() {
    const [count, setCount] = useState(0)
    const numbrs = [1,2,3,4,5,6]
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(numbrs[Math.floor(Math.random()*numbrs.length)])}>
                Click To Roll
            </button>
        </div>
    )
}