import { Link, useParams } from 'react-router-dom';
import styles from './Booking.module.css';

function Booking() {
  const { trainId } = useParams();

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topBar}>
          <Link to="/" className={styles.backLink}>
            ← Назад до рейсів
          </Link>

          <span className={styles.label}>Бронювання квитків</span>
        </div>

        <h1 className={styles.title}>Сторінка бронювання рейсу</h1>

        <p className={styles.text}>
          Обраний рейс ID: <strong>{trainId}</strong>
        </p>
      </section>
    </main>
  );
}

export default Booking;