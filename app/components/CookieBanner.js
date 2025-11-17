'use client';

import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

export default function CookieBanner({ onOpenCookiePolicy }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // When you add analytics, initialize them here
    // Example: initializeGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    // Don't set any consent preference when just closing
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieBanner}>
      <button className={styles.closeButton} onClick={handleClose} aria-label="Close cookie banner">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="5" x2="15" y2="15"></line>
          <line x1="15" y1="5" x2="5" y2="15"></line>
        </svg>
      </button>
      <div className={styles.cookieContent}>
        <div className={styles.cookieText}>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
            By clicking &quot;Accept&quot;, you consent to our use of cookies.{' '}
            <button
              className={styles.learnMoreLink}
              onClick={onOpenCookiePolicy}
            >
              Learn more
            </button>
          </p>
        </div>
        <div className={styles.cookieButtons}>
          <button className={styles.declineButton} onClick={handleDecline}>
            Decline
          </button>
          <button className={styles.acceptButton} onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
