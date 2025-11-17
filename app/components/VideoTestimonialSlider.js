'use client';

import { useState } from 'react';
import styles from './VideoTestimonialSlider.module.css';

export default function VideoTestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      type: 'facebook',
      videoUrl: 'https://www.facebook.com/lookwithinlifecoaching/videos/941007392613458',
      clientName: 'Client Testimonial',
    },
    {
      type: 'facebook',
      videoUrl: 'https://www.facebook.com/lookwithinlifecoaching/videos/954140467966817/',
      clientName: 'Client Testimonial',
    },
    {
      type: 'youtube',
      videoId: 'eIlNQSroMd4',
      clientName: 'Client Testimonial',
    },
  ];

  const getVideoSrc = (testimonial) => {
    if (testimonial.type === 'facebook') {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(testimonial.videoUrl)}&show_text=false&width=500&height=281`;
    } else {
      return `https://www.youtube.com/embed/${testimonial.videoId}`;
    }
  };

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
            src={getVideoSrc(testimonials[currentSlide])}
            title={`Client Testimonial ${currentSlide + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            scrolling="no"
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
