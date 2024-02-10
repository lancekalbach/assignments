import React, { useState, useEffect } from "react";
import axios from 'axios'
import Request from "./Request"
import RequestForm from "./RequestForm";
import Approve from "./Approve"

export default function RequestFormFunction() {
    const [requests, setRequests] = useState([])
    const [showApproveList, setShowApproveList] = useState(false)
    console.log(requests)

    useEffect(() => {
        getRequests()
    }, [])

    function getRequests() {
        console.log(`inside get call`)
        axios.get('/requests')
            .then(res => {
                console.log(`res`, res.data)
               setRequests(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addRequest(newRequest) {
        axios.post("/requests", newRequest)
        .then(res => {
            setRequests(prevRequests => [...prevRequests, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteRequest(requestId) {
        axios.delete(`/requests/${requestId}`)
        .then(res => {
            setRequests(prevRequests => prevRequests.filter(request => request._id !== requestId))
        })
        .catch(err => console.log(err))
    }

    function editRequest1(updates, requestId) {
        axios.put(`/requests/${requestId}`, updates)
        .then(res => {
            console.log(res)
            setRequests(prevRequests => prevRequests.map(request => request._id !== requestId ? request : res.data))
        })
        .catch(err => console.log(err))
    }

    function editRequest2(requestId, update) {
        const requestData = { approved: update }
        axios.put(`/requests/${requestId}`, requestData)
          .then((res) => {
            console.log(res, "test");
            setRequests((prevRequests) =>
              prevRequests.map((request) =>
                request._id !== requestId ? request : res.data
              )
            )
          })
          .catch((err) => console.log(err))
    }    

    return (
        <div>
            <div className="request-container">
                <RequestForm 
                    submit={addRequest}
                    btnText="Add Request"
                />

                {requests?.map(request => 
                <Request 
                {...request} 
                key={request._id}
                deleteRequest={deleteRequest}
                editRequest={editRequest1}
                />)}

                <button className="pending-btn" onClick={() => setShowApproveList(!showApproveList)}>
                    {showApproveList ? "Hide Pending List" : "Show Pending List"}
                </button>
                
                {showApproveList && (
                    <div className="approve-list">
                        {requests?.map(request => 
                            <Approve
                                {...request}
                                key={request._id}
                                editRequest={(approved) => editRequest2(request._id, approved)}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

