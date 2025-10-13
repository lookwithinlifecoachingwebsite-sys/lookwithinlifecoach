'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StarRating.module.css';

export default function StarRating() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const starRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = starRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div
      className={styles.starContainer}
      ref={starRef}
      onMouseEnter={handleMouseEnter}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((star) => (
        <svg
          key={`${star}-${animationKey}`}
          className={`${styles.star} ${star <= 5 ? styles.gold : styles.grey} ${
            isVisible || animationKey > 0 ? styles.animate : ''
          }`}
          style={{
            animationDelay: `${(star - 1) * 0.1}s`,
          }}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
