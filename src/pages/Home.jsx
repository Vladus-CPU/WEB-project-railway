import { useEffect, useState } from 'react';
import TrainCard from '../components/TrainCard';
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

  const firstThreeTrains = trains.slice(0, 3);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.badge}>Система бронювання залізничних квитків</p>

          <h1 className={styles.title}>Знайди свій рейс Україною</h1>

          <p className={styles.text}>
            Переглядай потяги, обирай маршрут та переходь до бронювання місць.
          </p>
        </div>

        <div className={styles.preview}>
          {firstThreeTrains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;