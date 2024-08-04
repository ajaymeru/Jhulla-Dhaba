import React, { useState, useRef, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import './Gallery.css'; // Import the CSS file for styling
import galleryData from './Gallery.json'; // Import JSON data

const Gallery = () => {
    const [images, setImages] = useState(galleryData.images.slice(0, 20)); // Initial images
    const [hasMore, setHasMore] = useState(true); // State to manage if more images are available
    const [loading, setLoading] = useState(false); // Loading state
    const galleryRef = useRef(null); // Ref for the gallery container

    // Function to handle loading more images
    const loadMoreImages = (page) => {
        if (loading) return; // Prevent multiple requests

        setLoading(true);

        setTimeout(() => {
            const nextBatch = galleryData.images.slice(images.length, images.length + 20);
            if (nextBatch.length === 0) {
                setHasMore(false); // No more images to load
                resetScrollPosition(); // Reset scroll position
            } else {
                setImages(prevImages => [
                    ...prevImages,
                    ...nextBatch
                ]);
            }
            setLoading(false);
        }, 1000); // Simulate a network delay
    };

    // Function to reset scroll position to the top
    const resetScrollPosition = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollTop = 0;
        }
    };

    // Scroll event handler to reset position if needed
    useEffect(() => {
        if (!hasMore && galleryRef.current) {
            resetScrollPosition();
        }
    }, [hasMore]);

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMoreImages}
            hasMore={hasMore}
            loader={<div className="loading" key={0}>Loading...</div>}
            threshold={100} // Trigger loadMore when 100px from the bottom
        >
            <div className="gallery" ref={galleryRef}>
                {images.map((url, index) => (
                    <div key={index} className="gallery-item">
                        <img src={url} alt="" />
                    </div>
                ))}
                {!hasMore && <div className="loading">No more images</div>}
            </div>
        </InfiniteScroll>
    );
}

export default Gallery;
