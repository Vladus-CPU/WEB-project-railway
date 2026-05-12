import { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import styles from './BookingForm.module.css';

function BookingForm() {
  const { selectedWagon, selectedSeats } = useBooking();

  const [passenger, setPassenger] = useState({
    name: '',
    phone: '',
    email: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPassenger((currentPassenger) => ({...currentPassenger,[name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
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

        <button className={styles.button} type="submit">
          Забронювати квиток
        </button>
      </form>
    </section>
  );
}

export default BookingForm;