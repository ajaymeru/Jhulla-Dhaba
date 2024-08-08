import React, { useState } from 'react';
import bookatableimg from "./Assets/bookatableimg.png";
import "./BookATable.css";

const BookATable = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        guests: '',
        date: '',
        time: '',
        preferences: {
            smokingArea: false,
            kidsFriendly: false,
            lowMusic: false
        }
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                preferences: {
                    ...formData.preferences,
                    [name]: checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className='bookatable'>
            <div className="bookatableimg">
                <img src={bookatableimg} alt="Book a Table" />
                <button className='bookatableimg-butn'>Book table</button>
            </div>
            <div className="bookatableform">
                <h2>Table Booking Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Mobile:
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Number of Guests:
                        <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Select Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Select Time Slot:
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <div className="preferences">
                        <label>
                            <input
                                type="checkbox"
                                name="smokingArea"
                                checked={formData.preferences.smokingArea}
                                onChange={handleInputChange}
                            />
                            Smoking Area
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="kidsFriendly"
                                checked={formData.preferences.kidsFriendly}
                                onChange={handleInputChange}
                            />
                            Kids Friendly
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="lowMusic"
                                checked={formData.preferences.lowMusic}
                                onChange={handleInputChange}
                            />
                            Low Music
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BookATable;
