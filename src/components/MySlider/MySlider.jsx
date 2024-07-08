// src/components/MySlider.js

import React from 'react';
// import Slider from 'react-slick';
// import { Container, Row, Col } from 'react-bootstrap';

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <h2>Featured Items</h2>
    // <Container>
    //   <h2>Featured Items</h2>
    //   <Slider {...settings}>
    //     <div>
    //       <h3>1</h3>
    //     </div>
    //     <div>
    //       <h3>2</h3>
    //     </div>
    //     <div>
    //       <h3>3</h3>
    //     </div>
    //     <div>
    //       <h3>4</h3>
    //     </div>
    //     <div>
    //       <h3>5</h3>
    //     </div>
    //     <div>
    //       <h3>6</h3>
    //     </div>
    //   </Slider>
    // </Container>
  );
};

export default MySlider;
