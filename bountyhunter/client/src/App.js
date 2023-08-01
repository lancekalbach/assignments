import React, { useState, useEffect } from "react";
import axios from 'axios'
import Bounty from "./Bounty.js"
import AddBountyForm from "./AddBountyForm.js";

export default function App() {
    const [bounties, setBounties] = useState([])
    console.log(bounties)

    useEffect(() => {
        getBounties()
    }, [])

    function getBounties() {
        console.log(`inside get call`)
        axios.get('/bounties')
            .then(res => {
                console.log(`res`, res.data)
               setBounties(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }

    function handleFilter(e) {
        if(e.target.value === "reset") {
            getBounties()
        } else {
            axios.get(`/bounties/search/type?type=${e.target.value}`)
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <div className="bounty-container">
                <AddBountyForm 
                    submit={addBounty}
                    btnText="Add Bounty"
                />

                <h4>Filter By Type</h4>
                <select onChange={handleFilter} className="filter-form">
                    <option value="reset">All Types</option>
                    <option value="sith">Sith</option>
                    <option value="jedi">Jedi</option>
                    <option value="bruh">Bruh</option>
                </select>

                {bounties?.map(bounty => 
                <Bounty 
                {...bounty} 
                key={bounty.title}
                deleteBounty={deleteBounty}
                editBounty={editBounty}
                />)}
            </div>
        </div>
    )
}