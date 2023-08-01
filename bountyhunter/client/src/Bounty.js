import React, { useState } from "react";
import AddBountyForm from "./AddBountyForm";

export default function Bounty(props) {
    const { firstName, lastName, bountyAmount, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="bounty">
        { !editToggle ?
                <>    
                    <h3>First: {firstName}</h3>
                    <h3>Last: {lastName}</h3>
                    <p>Bounty Amount: {bountyAmount}</p>
                    <p>Type: {type}</p>
                    <button 
                    className="delete-btn"
                    onClick={() => props.deleteBounty(_id)}>Delete</button>
                    <button 
                    className="edit-btn"
                     onClick={() => setEditToggle(prevToggle => ! prevToggle)}
                     >Edit</button>
                </>
            :
                <>
                    <AddBountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        bountyAmount={bountyAmount}
                        type={type}
                        _id={_id}
                        btnText = "Submit Edit"
                        submit={props.editBounty}
                    />
                    <button
                    onClick={() => setEditToggle(prevToggle => ! prevToggle)}>
                    Close</button>
                </>
        }
        </div>
    )
}