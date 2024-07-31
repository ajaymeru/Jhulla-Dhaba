import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "./Assets/logo.png"

const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="Jhulla Dhaba Logo" className="logo" />
            </div>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/aboutus" >About Us</Link>
                </li>
                <li>
                    <Link to="/gallery" >Gallery</Link>
                </li>
                <li>
                    <Link to="/menu" >Menu</Link>
                </li>
                <li>
                    <Link to="/bookatable" >Book A Table</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar