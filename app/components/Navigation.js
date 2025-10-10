'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import styles from './Navigation.module.css';

export default function Navigation() {
  const navRef = useRef(null);
  const glowRef = useRef(null);

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
          <li><Link href="/more">More</Link></li>
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
}
