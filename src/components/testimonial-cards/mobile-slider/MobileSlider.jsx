import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MobileSlider.css';

const MobileSlider = ({ testimonials }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={true}
      showDots={true}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <p> {testimonial.text} </p>
          <h3 className="text-2xl font-bold text-center mb-4">{testimonial.title}</h3>
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <p className="text-center text-gray-500">{testimonial.description}</p>
          <p className="text-center text-gray-500 mt-2">{testimonial.name}</p>
          
        </div>
      ))}
    </Carousel>
  );
};

export default MobileSlider;