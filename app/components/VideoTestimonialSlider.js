'use client';

import { useState } from 'react';
import styles from './VideoTestimonialSlider.module.css';

export default function VideoTestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      videoId: 'VIDEO_ID_1',
      clientName: 'Client Name 1',
    },
    {
      videoId: 'VIDEO_ID_2',
      clientName: 'Client Name 2',
    },
    {
      videoId: 'VIDEO_ID_3',
      clientName: 'Client Name 3',
    },
    {
      videoId: 'VIDEO_ID_4',
      clientName: 'Client Name 4',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.videoWrapper}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src={`https://www.youtube.com/embed/${testimonials[currentSlide].videoId}`}
            title={`Client Testimonial ${currentSlide + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className={styles.clientName}>{testimonials[currentSlide].clientName}</h3>
      </div>

      {/* Navigation Arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide} aria-label="Previous testimonial">
        ‹
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextSlide} aria-label="Next testimonial">
        ›
      </button>

      {/* Dots Navigation */}
      <div className={styles.dotsContainer}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
