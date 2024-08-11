import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contactus">
            <div className="contactusHeading">
                <h2>Get In Touch</h2>
                <p>Do you have anything in your mind to let us know? Kindly don't delay to connect to us by means of our contact form.</p>
            </div>
            <div className="contactusMapAdress">
                <div className="contactusMap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15223.842215811203!2d78.3522731!3d17.461602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936f02ebec55%3A0x4214282d8c0ec627!2sJhulla%20Dhaba!5e0!3m2!1sen!2sin!4v1723396166420!5m2!1sen!2sin"
                        width="500"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                </div>
                <div className="contactusAdress">
                    <h4>Contact Us</h4>
                    <address>
                        P, 6A, Sriram Nagar Rd,  <br />
                        opp. Burfi Ghar, Kondapur,  <br />
                        Hyderabad, Telangana 500084 <br />
                        <p><a href="tel:+91 81216 70753">81216 70753</a></p>
                    </address>
                    <h4>Opening Hours</h4>
                    <p>All Day : 12:00 PM – 01:00 AM</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
