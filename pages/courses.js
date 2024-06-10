import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Courses() {
  return (
    <div>
      <Navbar />
      <main>
        <section className={styles.courses}>
          <h1>Our Courses</h1>
          <ul>
            <li>Computer Science</li>
            <li>Business Administration</li>
            <li>Engineering</li>
            <li>Arts and Humanities</li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Evergreen Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
