import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div>
          <p className={styles.badge}>Система бронювання залізничних квитків</p>
          <h1>Знайди свій рейс Україною</h1>
          <p className={styles.text}>
            Переглядай потяги, обирай маршрут та переходь до бронювання місць.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;