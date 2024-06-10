import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main>
        <section className={styles.contact}>
          <h1>Contact Us</h1>
          <form action="/submit_form" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Evergreen Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
