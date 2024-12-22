import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Slider.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <div 
        className="slider-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="slide-content">
              <div className="quote-mark">"</div>
              <p className="quote-text">{slide.quote}</p>
              {slide.author && (
                <div className="author">
                  <p className="author-name">{slide.author}</p>
                  {slide.company && (
                    <p className="author-company">{slide.company}</p>
                  )}
                </div>
              )}
            </div>
            <div className="slide-image">
              <img src={slide.image} alt="Success story" />
            </div>
          </div>
        ))}
      </div>

      <button className="slider-button prev" onClick={prevSlide}>
        <ChevronLeft />
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        <ChevronRight />
      </button>

      <div className="slider-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;