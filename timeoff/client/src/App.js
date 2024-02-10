import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RequestFormFunction from "./RequestFormFunction";
import Home from "./Home"

export default function App() {
  return (
    <Router>
      <div>
        <div className="links">
        <Link className="home-link" to="/">Home</Link>
        <Link className="request-link" to="/Requests">View the Request Page</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Requests" element={<RequestFormFunction />} />
        </Routes>
      </div>
    </Router>
  )
}

