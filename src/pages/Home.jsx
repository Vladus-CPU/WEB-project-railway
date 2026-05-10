import { useEffect } from 'react';
import { getTrains } from '../services/api';
import styles from './Home.module.css';

function Home() {
  useEffect(() => {
    async function loadTrains() {
      try {
        await getTrains();
      } catch (error) {
        console.error(error);
      }
    }

    loadTrains();
  }, []);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <p className={styles.badge}>Система бронювання залізничних квитків</p>

        <h1 className={styles.title}>Знайди свій рейс Україною</h1>

        <p className={styles.text}>
          Переглядай потяги, обирай маршрут та переходь до бронювання місць.
        </p>
      </section>
    </main>
  );
}

export default Home;