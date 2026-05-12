import { Link, useParams } from 'react-router-dom';
import styles from './Booking.module.css';
import { useEffect, useState } from 'react';
import { getTrainById } from '../services/TrainService';
import { useBooking } from '../context/BookingContext';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import { getBookedSeats } from '../services/BookingService';
import BookingForm from '../components/BookingForm';

function Booking() {
  const { trainId } = useParams();

  const { selectedTrain, setSelectedTrain, selectedWagon, setSelectedWagon, setSelectedSeats, setBookedSeats} = useBooking();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isActive = true;

    async function loadTrain() {
      try {
        setIsLoading(true);
        setError('');

        const data = await getTrainById(trainId);

        if (!isActive) {
          return;
        }

        setSelectedTrain(data);
        setSelectedWagon((data && data.wagons && data.wagons[0]) || null);
        setSelectedSeats([]);
        setBookedSeats([]);
      } catch {
        if (isActive) {
          setError('Не вдалося завантажити дані рейсу');
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadTrain();

    return () => {
      isActive = false;
    };
  }, [trainId, setSelectedTrain, setSelectedWagon, setSelectedSeats, setBookedSeats]);

  useEffect(() => {
    if (!selectedTrain || !selectedWagon) {
      return;
    }

    async function loadBookedSeats() {
      try {
        const data = await getBookedSeats(selectedTrain.id, selectedWagon.id);
        setBookedSeats(data.bookedSeats);
        setSelectedSeats([]);
      } catch (error) {
        console.error(error);
        setBookedSeats([]);
      }
    }

    loadBookedSeats();
  }, [selectedTrain, selectedWagon, setBookedSeats, setSelectedSeats]);

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

        {!isLoading && !error && selectedTrain && (
          <>
            <div className={styles.trainHeader}>
              <div>
                <p className={styles.trainNumber}>№ {selectedTrain.trainNumber}</p>
                <h1 className={styles.title}>
                  {selectedTrain.from} - {selectedTrain.to}
                </h1>
              </div>
              <span className={styles.trainType}>{selectedTrain.trainType}</span>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span>Дата</span>
                <strong>{selectedTrain.departureDate}</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Відправлення</span>
                <strong>{selectedTrain.departureTime}</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Прибуття</span>
                <strong>{selectedTrain.arrivalTime}</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість</span>
                <strong>{selectedTrain.duration}</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Ціна від</span>
                <strong>{selectedTrain.price} грн</strong>
              </div>
            </div>
            <WagonSelector/>
            <SeatMap/>
            <BookingForm/>
          </>
        )}
      </section>
    </main>
  );
}

export default Booking;