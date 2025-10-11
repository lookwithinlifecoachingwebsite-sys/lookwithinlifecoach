'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import CookieBanner from './CookieBanner';
import styles from './Footer.module.css';

export default function Footer() {
  const footerRef = useRef(null);
  const dividerRef = useRef(null);
  const glowRef = useRef(null);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    const footer = footerRef.current;
    const divider = dividerRef.current;
    const glow = glowRef.current;

    const handleMouseMove = (e) => {
      if (!divider || !glow) return;

      const rect = divider.getBoundingClientRect();
      const x = e.clientX - rect.left;

      glow.style.left = `${x}px`;
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (glow) {
        glow.style.opacity = '0';
      }
    };

    if (footer) {
      footer.addEventListener('mousemove', handleMouseMove);
      footer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (footer) {
        footer.removeEventListener('mousemove', handleMouseMove);
        footer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <CookieBanner onOpenCookiePolicy={() => setModalType('cookies')} />
      <footer className={styles.footer} ref={footerRef}>
        <div className={styles.footerContent} ref={dividerRef}>
        <div className={styles.glow} ref={glowRef}></div>
        {/* Quick Links Section */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>QUICK LINKS</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/individual-coaching">Individual Coaching</Link></li>
            <li><Link href="/group-coaching">Group Coaching</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Programs Section */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>PROGRAMS</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/individual-coaching">Individual Coaching</Link></li>
            <li><Link href="/group-coaching">Group Coaching</Link></li>
            <li><Link href="/leadership">Leadership Development</Link></li>
            <li><Link href="/career-transition">Career Transition</Link></li>
            <li><Link href="/work-life-balance">Work-Life Balance</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerColumnWide}>
          <h3 className={styles.footerHeading}>CONTACT</h3>
          <div className={styles.contactInfo}>
            <p>Call <a href="tel:866-280-4175" className={styles.phoneLink}>866-280-4175</a> to schedule an appointment with Shelia Malcolm</p>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Section */}
      <div className={styles.footerBottom}>
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>

        <div className={styles.footerMeta}>
          <p className={styles.copyright}>© 2025 Look Within Life Coaching. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#" onClick={(e) => { e.preventDefault(); setModalType('privacy'); }}>Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setModalType('terms'); }}>Terms of Service</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setModalType('cookies'); }}>Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={modalType === 'privacy'} onClose={() => setModalType(null)} title="Privacy Policy">
        <h3>Introduction</h3>
        <p>Look Within Life Coaching LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights.</p>

        <h3>Information</h3>
        <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
      </Modal>

      <Modal isOpen={modalType === 'terms'} onClose={() => setModalType(null)} title="Terms of Service">
        <h3>Introduction</h3>
        <p>Look Within Life Coaching LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights.</p>

        <h3>Information</h3>
        <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
      </Modal>

      <Modal isOpen={modalType === 'cookies'} onClose={() => setModalType(null)} title="Cookie Policy">
        <h3>What Are Cookies</h3>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.</p>

        <h3>How We Use Cookies</h3>
        <p>We use cookies to:</p>
        <ul>
          <li>Remember your preferences and settings</li>
          <li>Understand how you use our website</li>
          <li>Improve your experience on our site</li>
          <li>Enable certain functions and features</li>
        </ul>

        <h3>Types of Cookies We Use</h3>
        <p><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.</p>
        <p><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website.</p>
        <p><strong>Functionality Cookies:</strong> These cookies enable enhanced functionality and personalization.</p>

        <h3>Managing Cookies</h3>
        <p>You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience.</p>
      </Modal>
      </footer>
    </>
  );
}
