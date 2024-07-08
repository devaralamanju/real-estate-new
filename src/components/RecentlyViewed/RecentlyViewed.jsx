import React, { useState, useEffect } from 'react';
import './RecentlyViewed.css';

const RecentlyViewed = () => {
    const items = [
        { cost: '$900,000', location: '3bd 2ba 1,203 sqft', img: 'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/a0e1c24635b498e060e4c50c72e99fd1-full.webp' },
        { cost: '$1,350,000', location: '3bd 2ba 1,203 sqft', img: 'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/118f519afc8ce559f3805c9fb7025316-full.webp' },
        { cost: '$1,350,000', location: '3bd 2ba 1,203 sqft', img: 'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/118f519afc8ce559f3805c9fb7025316-full.webp' },
        ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setItemsPerSlide(1);
            } else if (window.innerWidth <= 900) {
                setItemsPerSlide(2);
            } else if (window.innerWidth <= 1200) {
                setItemsPerSlide(1);
            } else {
                setItemsPerSlide(2);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsPerSlide + items.length) % items.length);
    };

    const getVisibleItems = () => {
        return items.slice(currentIndex, currentIndex + itemsPerSlide).concat(
            items.slice(0, Math.max(0, currentIndex + itemsPerSlide - items.length))
        );
    };

    return (
        <div className="recently-viewed-container">
            <h1>Recently Viewed </h1>
           
            <div className="recently-viewed">
                {getVisibleItems().map((item, index) => (
                    <div key={index} className="recently-viewed-item">
                        <img src={item.img} alt={item.location} />
                        <div className="item-content">
                            <span></span>
                            <h3>{item.cost}</h3>
                            <h4>{item.location}</h4>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default RecentlyViewed;
