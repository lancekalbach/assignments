import React, { useState, useEffect } from "react";

export default function RequestForm(props) {
    const initInputs = { 
        firstName: props.firstName || "",
        lastName: props.lastName || "", 
        reason: props.reason || "", 
        headshot: props.headshot || "", 
        date: props.date || "", 
        approved: props.approved || "false"}
    const [inputs, setInputs] =useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder= "First Name"
            />
            <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder= "Last Name"
            />
            <input 
                type="text" 
                name="reason" 
                value={inputs.reason} 
                onChange={handleChange} 
                placeholder= "Reason (optional)"
            />
            <input 
                type="text" 
                name="headshot" 
                value={inputs.headshot} 
                onChange={handleChange} 
                placeholder= "Image of you (optional)"
            />
            <input
                type="date"
                name="date"
                value={inputs.date}
                onChange={handleChange}
                placeholder="Select Date"
            />
            {/* <input 
                type="text"
                name="approved"
                value={inputs.approved}
                onChange={handleChange}
                placeholder="Already approved? Enter true or false"
            /> */}
            <button className="form-submit">Submit</button>
        </form>
    )
}