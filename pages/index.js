import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <h1>Welcome to Evergreen Academy</h1>
          <p>Empowering students for a brighter future.</p>
          <a href="/courses" className={styles.ctaButton}>Explore Courses</a>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Evergreen Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
