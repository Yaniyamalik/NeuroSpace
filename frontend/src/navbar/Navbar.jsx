import React from 'react'
import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom';
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div className="navbar">
        <h1>NeuroSpace</h1>
        <Link to="/">Home</Link>
        <Link to ="/courses"> Courses</Link>
        <Link to ="/jobs"> Jobs</Link>
         <Link to="/chatbox">Chatbox</Link>
        <Link to ="/toolkit">Toolkit</Link> 
        <Link to="/login"> Login</Link>
    </div>
  )
}
