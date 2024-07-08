import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const items = [
    {
      cost: "$650,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/312f6521ac666a1ddd42be3effced22e-full.webp",
    },
    {
      cost: "$650,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/a7f6f78126ec7450885d1862f34e7691-full.webp",
    },
    {
      cost: "$889,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/0610c5c84bca2bf944a01e96c868462c-full.webp",
    },
    {
      cost: "$712,888",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/10ca3c7358436b3a8fa3790fc8b74a9c-full.webp",
    },
    {
      cost: "$900,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/a0e1c24635b498e060e4c50c72e99fd1-full.webp",
    },
    {
      cost: "$1,350,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/118f519afc8ce559f3805c9fb7025316-full.webp",
    },
    {
      cost: "$889,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/0610c5c84bca2bf944a01e96c868462c-full.webp",
    },
    {
      cost: "$712,888",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/10ca3c7358436b3a8fa3790fc8b74a9c-full.webp",
    },
    {
      cost: "$900,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/a0e1c24635b498e060e4c50c72e99fd1-full.webp",
    },
    {
      cost: "$1,350,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/118f519afc8ce559f3805c9fb7025316-full.webp",
    },
    {
      cost: "$1,350,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/118f519afc8ce559f3805c9fb7025316-full.webp",
    },
    {
      cost: "$712,888",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/10ca3c7358436b3a8fa3790fc8b74a9c-full.webp",
    },
    {
      cost: "$712,888",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/10ca3c7358436b3a8fa3790fc8b74a9c-full.webp",
    },
    {
      cost: "$712,888",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/10ca3c7358436b3a8fa3790fc8b74a9c-full.webp",
    },
    {
      cost: "$1,350,000",
      location: "3bd 2ba 1,203 sqft",
      add: "589 Oakdale Way #221-23, San Jose, CA 95117",
      img: "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/7e34908f7852b0f33637927a3c8e0258-full.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItemsPerSlide(1);
      } else if (window.innerWidth <= 900) {
        setItemsPerSlide(2);
      } else if (window.innerWidth <= 1200) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerSlide + items.length) % items.length
    );
  };

  const getVisibleItems = () => {
    return items
      .slice(currentIndex, currentIndex + itemsPerSlide)
      .concat(
        items.slice(0, Math.max(0, currentIndex + itemsPerSlide - items.length))
      );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel">
        {getVisibleItems().map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.img} alt={item.location.add} />
            <div className="item-content">
              <h3>{item.cost}</h3>
              <h4>
                {item.location},{item.add}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
