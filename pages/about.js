import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <main>
        <section className={styles.about}>
          <h1>About Evergreen Academy</h1>
          <p>Evergreen Academy is committed to providing quality education and empowering students to achieve their full potential.</p>
          <p>Our mission is to foster a learning environment that encourages innovation, creativity, and academic excellence.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Evergreen Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
