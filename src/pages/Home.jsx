import { useEffect, useMemo, useState } from 'react';
import TrainList from '../components/TrainList';
import { getTrains } from '../services/api';
import styles from './Home.module.css';

function Home() {
  const [trains, setTrains] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
const filteredTrains = useMemo(() => {
  const query = searchQuery.trim().toLowerCase();

  if (!query) {
    return trains;
  }

  return trains.filter((train) => {
    const trainNumber = train.trainNumber.toLowerCase();

    const routeWithDash = `${train.from} - ${train.to}`.toLowerCase();
    const routeWithArrow = `${train.from} → ${train.to}`.toLowerCase();
    const routeWords = `${train.from} ${train.to}`.toLowerCase();

    return (
      trainNumber.includes(query) ||
      routeWithDash.includes(query) ||
      routeWithArrow.includes(query) ||
      routeWords.includes(query)
    );
  });
}, [trains, searchQuery]);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <p className={styles.badge}>Система бронювання залізничних квитків</p>

        <h1 className={styles.title}>Знайди свій рейс Україною</h1>

        <p className={styles.text}>
          Переглядай потяги, обирай маршрут та переходь до бронювання місць.
        </p>

        <div className={styles.searchBox}>
          <label className={styles.searchLabel} htmlFor="train-search">
            Пошук рейсу
          </label>

          <input
            id="train-search"
            className={styles.searchInput}
            type="text"
            placeholder="Наприклад: Львів - Київ або 091К"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
      </section>

      <TrainList trains={filteredTrains} />
    </main>
  );
}

export default Home;