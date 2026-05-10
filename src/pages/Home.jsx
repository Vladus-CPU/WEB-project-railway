import { useEffect, useState } from 'react';
import TrainList from '../components/TrainList';
import { getTrains } from '../services/api';
import styles from './Home.module.css';

function Home() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    async function loadTrains() {
      try {
        const data = await getTrains();
        setTrains(data);
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

      <TrainList trains={trains} />
    </main>
  );
}

export default Home;