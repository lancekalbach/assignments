import React, {useState} from "react"
    
export default function App() {
// const [color, setColor] = useState("pink")

//         setColor("blue")

//

const [color, setColor] = useState("pink")

setColor(prevColor => prevColor === "pink" ? "blue" : "pink")

//

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prevPeople => {
	return [
     ...prevPeople, 
     {
        firstName: "Jane", 
        lastName: "Doe"
     }
  ]
})

//

const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => {
	return [...prevColors, "green"]
})

setColors(prevColors => [...prevColors, "green"])

}

const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState=> {
	return {
		count: prevState.count + 1
	}
})

setCountObject(prevState=> ({count: prevState.count + 1}))

//

const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
})

setPerson(prevState => ({
...prevState,
age: 30
}))

//

const [colors, setColors] = useState(["pink", "blue"])

setColors("green")