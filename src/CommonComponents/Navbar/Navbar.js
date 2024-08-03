import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./Assets/logo.png";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <ul className={`nav-links ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
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

            <div className="hamburger-container">
                <Hamburger toggled={isNavOpen} toggle={toggleNav} />
            </div>
        </nav>
    );
}

export default Navbar;
