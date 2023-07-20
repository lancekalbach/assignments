import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        firstName: ""
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(formData)

    function handleSubmit(event){
        event.preventDefault()

        let formData1 = formData.firstName

        const h1 = document.createElement("h1")
        h1.textContent= formData1
        document.getElementsByTagName("body")[0].append(h1)
    }
    

    return (
        <div className="form-container" onSubmit={handleSubmit}>

            <form className="form">
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-input"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                />

                <button className="form-submit">Submit</button>
            </form>
            
        </div>
    )
}