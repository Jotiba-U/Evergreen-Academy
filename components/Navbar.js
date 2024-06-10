import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Evergreen Academy</Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/about">About Us</Link></li>
        <li className={styles.navItem}><Link href="/courses">Courses</Link></li>
        <li className={styles.navItem}><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
}
