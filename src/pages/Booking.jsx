import { Link, useParams } from 'react-router-dom';
import styles from './Booking.module.css';
import { useEffect, useState } from 'react';
import { getTrainById } from '../services/api';

function Booking() {
  const { trainId } = useParams();

  const [train, setTrain] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTrain() {
      try {
        const data = await getTrainById(trainId);
        setTrain(data);
      } catch {
        setError('Не вдалося завантажити дані рейсу');
      } finally {
        setIsLoading(false);
      }
    }

    loadTrain();
  }, [trainId]);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topBar}>
          <Link to="/" className={styles.backLink}>
            ← Назад до рейсів
          </Link>

          <span className={styles.label}>Бронювання квитків</span>
        </div>

        {isLoading && (
          <div className={styles.state}>
            <h1>Завантаження рейсу...</h1>
          </div>
        )}

        {!isLoading && error && (
          <div className={styles.state}>
            <h1>Помилка</h1>
            <p>{error}</p>
          </div>
        )}

        {!isLoading && !error && train && (
          <>
            <div className={styles.trainHeader}>
              <div>
                <p className={styles.trainNumber}>№ {train.trainNumber}</p>
                <h1 className={styles.title}>
                  {train.from} - {train.to}
                </h1>
              </div>

              <span className={styles.trainType}>{train.trainType}</span>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span>Дата</span>
                <strong>{train.departureDate}</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Відправлення</span>
                <strong>{train.departureTime}</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Прибуття</span>
                <strong>{train.arrivalTime}</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість</span>
                <strong>{train.duration}</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Ціна від</span>
                <strong>{train.price} грн</strong>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Booking;