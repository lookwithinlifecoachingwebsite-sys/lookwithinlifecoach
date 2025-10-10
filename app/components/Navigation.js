'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import styles from './Navigation.module.css';

export default function Navigation() {
  const navRef = useRef(null);
  const glowRef = useRef(null);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const glow = glowRef.current;

    const handleMouseMove = (e) => {
      if (!nav || !glow) return;

      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;

      // Only follow horizontal position, keep glow at bottom
      glow.style.left = `${x}px`;
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (glow) {
        glow.style.opacity = '0';
      }
    };

    if (nav) {
      nav.addEventListener('mousemove', handleMouseMove);
      nav.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (nav) {
        nav.removeEventListener('mousemove', handleMouseMove);
        nav.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };

    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMoreOpen]);

  const toggleMore = (e) => {
    e.preventDefault();
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.glow} ref={glowRef}></div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Look Within</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/individual-coaching">Individual Coaching</Link></li>
          <li><Link href="/group-coaching">Group Coaching</Link></li>
          <li className={styles.dropdown} ref={moreRef}>
            <a href="#" onClick={toggleMore} className={styles.dropdownToggle}>
              More
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
                className={`${styles.dropdownArrow} ${isMoreOpen ? styles.dropdownArrowOpen : ''}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
            {isMoreOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/resources">Resources</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            )}
          </li>
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
}
