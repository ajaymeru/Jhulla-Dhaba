import React from 'react'
import bookatablehome from "./Assets/bookatablehome.jpg"
import './LinkToBook.css';
import { useNavigate } from 'react-router-dom';


const LinkToBook = () => {
    const navigate = useNavigate();

    const handleBooktable = () => {
        navigate('/bookatable')
    }


    return (
        <div className='bookatablehome'>

            <img src={bookatablehome} alt="Bookatable Home" className='bookatablehomeimg' />

            <div className="bookatablehomelinks">
                <div className="child1">
                    <h4>Refreshing stomach</h4>
                    <p>Come enjoy a refreshing and healthy breakfast with a beautiful cradle at Jhulla Dhaba.</p>
                </div>

                <div className="child2">
                    <button onClick={handleBooktable} >Book a Table</button>
                </div>

                <div className="child3">
                    <p>The food as so yumm. Had my perfect start for the day with the food and calm ambiance.</p>
                </div>
            </div>
        </div>
    )
}

export default LinkToBook