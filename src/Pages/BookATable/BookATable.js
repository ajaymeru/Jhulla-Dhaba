// src/BookTable.js
import React, { useState } from 'react';
import './BookTable.css';

const BookTable = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [people, setPeople] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Table booked:', { name, email, date, time, people });
        alert(`Thank you ${name}, your table has been booked!`);
    }

    return (
        <div className="book-table">
            <h2>Book a Table</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Number of People"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    min="1"
                    required
                />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default BookTable;
