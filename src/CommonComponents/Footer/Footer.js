import React from 'react';
import "./Footer.css"
import logo from "../../CommonComponents/Navbar/Assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footerbrandlogo">
                <img src={logo} alt="Brand Logo" />
            </div>
            <div className="footersocillogos">
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#black" }} />
                <FontAwesomeIcon icon={faFacebookF} style={{ color: "#black" }} />
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#black" }} />
            </div>
            <div className="footercontactus">
                <h4>Contact Us</h4>
                <address>
                    P, 6A, Sriram Nagar Rd,  <br />
                    opp. Burfi Ghar, Kondapur,  <br />
                    Hyderabad, Telangana 500084 <br />
                    <p><a href="tel:+91 81216 70753">81216 70753</a></p>
                </address>
            </div>
        </div>
    );
}

export default Footer;
