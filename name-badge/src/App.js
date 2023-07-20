import React from "react"
import Badges from "./Badges"

export default function App() {
    const [formData, setFormData] = React.useState ({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        aboutYourself: "",
        badges: []
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const badgeObj = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            placeOfBirth: formData.placeOfBirth,
            phone: formData.phone,
            favoriteFood: formData.favoriteFood,
            aboutYourself: formData.aboutYourself
        }
        console.log(badgeObj)
        if (formData.firstName === '' || 
            formData.lastName === '' || 
            formData.email === '' || 
            formData.placeOfBirth === '' || 
            formData.phone === '' || 
            formData.favoriteFood === '' || 
            formData.aboutYourself === '' || 
            formData.firstName < 3  || 
            formData.lastName < 3  || 
            formData.email < 3  || 
            formData.placeOfBirth < 3  || 
            formData.phone < 3  || 
            formData.favoriteFood < 3 || 
            formData.aboutYourself < 3 ){
            alert('Your inputs need to have at least three characters.')
        }  if(!Number(formData.phone)){
                alert("Only use numbers for your phone number")
            } else {
                setFormData(prevFormData =>{
                    return {
                        badges: [...prevFormData.badges, badgeObj],
                        firstName: "",
                        lastName: "",
                        email: "",
                        placeOfBirth: "",
                        phone: "",
                        favoriteFood: "",
                        aboutYourself: ""
                    }
                })
            }
}

console.log(formData)
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="user--first--name"
                    onChange={handleChange}
                    value={formData.firstName}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="user--last--name"
                    onChange={handleChange}
                    value={formData.lastName}
                />

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="user--email"
                    onChange={handleChange}
                    value={formData.email}
                />

                <input 
                    type="text"
                    placeholder="Place of Birth"
                    name="placeOfBirth"
                    className="user--place--of--birth"
                    onChange={handleChange}
                    value={formData.placeOfBirth}
                />

                <input 
                    type="phone"
                    placeholder="Phone Number"
                    name="phone"
                    className="user--phone--number"
                    onChange={handleChange}
                    value={formData.phone}
                />

                <input
                    type="text"
                    placeholder="Favorite Food"
                    name="favoriteFood"
                    className="user--favorite--food"
                    onChange={handleChange}
                    value={formData.favoriteFood}
                />

                <textarea
                    placeholder="About Yourself"
                    name="aboutYourself"
                    className="user--about"
                    onChange={handleChange}
                    value={formData.aboutYourself}
                />

                <button>Submit</button>
            </form>
            <footer className="badge--footer"></footer>

            <Badges badges={formData.badges}/>

        </div>
    )
}