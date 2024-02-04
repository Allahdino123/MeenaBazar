import React, { useState } from 'react';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    src: 'TESTIMONIALS',
    client: 'Positive Client Feedback',
    quote: 'Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Turpis cursus in hac habitasse. At consectetur lorem donec mass molestie ac. ',
    name: 'Allah Dino',
    position: 'Designer',
    rating: 5,
  },
  {
    id: 2,
    src: 'TESTIMONIALS',
    client: 'Positive Client Feedback',
    quote: 'Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Turpis cursus in hac habitasse. At consectetur lorem donec mass molestie ac. ',
    name: 'Bob Johnson',
    position: 'Designer',
    rating: 5,
  },
  {
    id: 3,
    src: 'TESTIMONIALS',
    client: 'Positive Client Feedback',
    quote: 'Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Turpis cursus in hac habitasse. At consectetur lorem donec mass molestie ac. ',
    name: 'Bob Johnson',
    position: 'Designer',
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonialData.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className="testimonial-slider">
   <div className='button'>
   <img className='rightbtn btnn' onClick={handlePrevSlide} src='./imges/right.png' alt='' />
   </div>
      <div className="testimonial-content">
      <h5>{testimonialData[currentSlide].src}</h5>
        <h3>{testimonialData[currentSlide].client}</h3>
        <p>{testimonialData[currentSlide].quote}</p>
        <h2>{testimonialData[currentSlide].name}</h2>
        <h4>{testimonialData[currentSlide].position}</h4>
        <h6>{'★'.repeat(testimonialData[currentSlide].rating)}</h6>
      </div>
        <div className='button'>
        <img className='rightbtn btnn' onClick={handleNextSlide} src='./imges/left.png' alt='' />
        </div>
    </section>
  );
};

export default TestimonialSlider;
