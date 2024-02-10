import React, { useState } from "react";

export default function Approve(props) {
    const { firstName, lastName, reason, headshot, date, approved, _id } = props
    const [approvalStatus, setApprovalStatus] = useState(approved)
    const [buttonsHidden, setButtonsHidden] = useState(false)

    const formatDate = new Date(date).toLocaleDateString()

    const handleApprove = () => {
        setApprovalStatus(true)
        props.editRequest(true)
        setButtonsHidden(true)
    }

    const handleDeny = () => {
        setApprovalStatus(false)
        props.editRequest(false)
        setButtonsHidden(true)
    }

    const approveClassName = () => {
        let className = "approval-container"
        if (approvalStatus) {
            className += " approved"
        }
        return className
    }

    return (
        <div className={approveClassName()}>
            <h3>First: {firstName}</h3>
            <h3>Last: {lastName}</h3>
            <p>Reason For Request: {reason}</p>
            <p>Headshot: {headshot && <img src={headshot} alt="Headshot" width="100" />}</p>
            <p>Date: {formatDate}</p>
            <p>Approved: {approvalStatus.toString()}</p>
            {!buttonsHidden && !approvalStatus && (
                <button onClick={handleApprove} className="approve-btn">Approve</button>
            )}
            {!buttonsHidden && !approvalStatus && (
                <button onClick={handleDeny} className="deny-btn">Deny</button>
            )}
        </div>
    )
}
