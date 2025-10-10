'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "Working with Look Within has been transformational. The personalized approach helped me gain clarity on my career path and gave me the confidence to make meaningful changes in my life.",
    name: "Sarah Johnson",
    role: "Marketing Executive"
  },
  {
    id: 2,
    text: "The group coaching program exceeded my expectations. Not only did I learn valuable leadership skills, but I also built lasting connections with other professionals on similar journeys.",
    name: "Michael Chen",
    role: "Tech Startup Founder"
  },
  {
    id: 3,
    text: "I was struggling with work-life balance before starting coaching. The tools and strategies I learned have helped me create harmony between my professional ambitions and personal wellbeing.",
    name: "Emily Rodriguez",
    role: "Healthcare Professional"
  },
  {
    id: 4,
    text: "The coaching sessions helped me break through limiting beliefs that were holding me back. I've since launched my own business and couldn't be happier with the results.",
    name: "David Thompson",
    role: "Entrepreneur"
  },
  {
    id: 5,
    text: "Look Within's approach to personal development is truly unique. The insights I gained have not only improved my professional life but also enriched my relationships and overall wellbeing.",
    name: "Jennifer Lee",
    role: "HR Director"
  },
  {
    id: 6,
    text: "The accountability and support I received made all the difference. My coach helped me set realistic goals and provided the encouragement I needed to achieve them.",
    name: "Robert Martinez",
    role: "Sales Manager"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const total = testimonials.length;

    // Normalize the difference to handle circular array
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff = diff - total;
    if (diff < -total / 2) normalizedDiff = diff + total;

    return normalizedDiff;
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <p className={styles.sectionDescription}>
          Hear from individuals who have transformed their lives through our coaching programs.
        </p>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 2;

              return (
                <div
                  key={testimonial.id}
                  className={`${styles.testimonialCard} ${isActive ? styles.active : ''} ${!isVisible ? styles.hidden : ''}`}
                  style={{
                    transform: `translateX(${position * 95}%) scale(${isActive ? 1 : 0.7})`,
                    zIndex: isActive ? 10 : 5 - Math.abs(position),
                    opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                  }}
                >
                  <div className={styles.testimonialQuote}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M10 20C10 15.5817 13.5817 12 18 12V8C11.3726 8 6 13.3726 6 20H10ZM24 20C24 15.5817 27.5817 12 32 12V8C25.3726 8 20 13.3726 20 20H24Z" fill="#d1d1d1"/>
                    </svg>
                  </div>
                  <p className={styles.testimonialText}>
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
