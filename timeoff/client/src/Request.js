import React, { useState } from "react"
import RequestForm from "./RequestForm"

export default function Request(props) {
    const { firstName, lastName, reason, headshot, date, approved, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    console.log(props.firstName)
    console.log(props[0])

    const formatDate = new Date(date).toLocaleDateString()

    return (
        <div className="request">
        { !editToggle ?
                <>    
                    <h3>First: {firstName}</h3>
                    <h3>Last: {lastName}</h3>
                    <p>Reason For Request: {reason}</p>
                    <p>Headshot: {headshot && <img src={headshot} alt="Headshot" width="100" />}</p>
                    <p>Date: {formatDate}</p>
                    <p>Approved: {approved.toString()}</p>
                    <button 
                    className="delete-btn"
                    onClick={() => props.deleteRequest(_id)}>Delete</button>
                    <button 
                    className="edit-btn"
                     onClick={() => setEditToggle(prevToggle => ! prevToggle)}
                     >Edit</button>
                </>
            :
                <>
                    <RequestForm 
                        firstName={firstName}
                        lastName={lastName}
                        reason={reason}
                        headshot={headshot}
                        date={date}
                        approved={approved}
                        _id={_id}
                        btnText = "Submit Edit"
                        submit={props.editRequest}
                    />
                    <button
                    onClick={() => setEditToggle(prevToggle => ! prevToggle)}>
                    Close</button>
                </>
        }
        </div>
    )
}