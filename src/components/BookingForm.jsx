import { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { createBooking } from '../services/BookingService';
import styles from './BookingForm.module.css';

function BookingForm() {
  const { selectedTrain, selectedWagon, selectedSeats, setSelectedSeats, setBookedSeats } = useBooking();

  const [passenger, setPassenger] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setPassenger((currentPassenger) => ({...currentPassenger,[name]: value }));
    setError('');
    setSuccess('');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!selectedTrain) {
      setError('Дані рейсу не завантажено');
      return;
    }

    if (!selectedWagon) {
      setError('Спочатку оберіть вагон');
      return;
    }

    if (selectedSeats.length === 0) {
      setError('Оберіть хоча б одне місце');
      return;
    }

    if (!passenger.name.trim()) {
      setError('Введіть ім’я пасажира');
      return;
    }

    if (!passenger.phone.trim()) {
      setError('Введіть номер телефону');
      return;
    }

    if (!passenger.email.trim()) {
      setError('Введіть email');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      setSuccess('');

      const data = await createBooking({
        trainId: selectedTrain.id,
        wagonId: selectedWagon.id,
        seats: selectedSeats,
        passenger
      });

      setBookedSeats(data.bookedSeats);
      setSelectedSeats([]);
      setPassenger({
        name: '',
        phone: '',
        email: ''
      });

      setSuccess('Квиток успішно заброньовано');
    } catch (error) {
      setError(error.message || 'Не вдалося створити бронювання');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Крок 3</p>
        <h2 className={styles.title}>Дані пасажира</h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.summary}>
          <p>
            Вагон: <strong>{selectedWagon ? selectedWagon.number : '-'}</strong>
          </p>

          <p>
            Місця:{' '}
            <strong>
              {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'не обрано'}
            </strong>
          </p>
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        <div className={styles.fields}>
          <label className={styles.field}>
            <span>Ім’я</span>
            <input
              type="text"
              name="name"
              placeholder="Введіть ім’я"
              value={passenger.name}
              onChange={handleChange}
            />
          </label>

          <label className={styles.field}>
            <span>Телефон</span>
            <input
              type="tel"
              name="phone"
              placeholder="+380..."
              value={passenger.phone}
              onChange={handleChange}
            />
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={passenger.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Бронювання...' : 'Забронювати квиток'}
        </button>
      </form>
    </section>
  );
}

export default BookingForm;