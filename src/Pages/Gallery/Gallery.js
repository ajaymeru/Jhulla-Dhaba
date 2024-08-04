import React from 'react';
import './Gallery.css'; // Import the CSS file for styling
import galleryData from './Gallery.json'; // Adjust the path as needed

const Gallery = () => {
    const { images } = galleryData; // Extract images from the JSON data

    return (
        <div className="gallery">
            {images.map((url, index) => (
                <div key={index} className="gallery-item">
                    <img src={url} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default Gallery;
