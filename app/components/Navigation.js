import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
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
      </div>
    </nav>
  );
}
