import { useBooking } from '../context/BookingContext';
import styles from './SeatMap.module.css';

function SeatMap() {
  const { selectedWagon, selectedSeats, setSelectedSeats, bookedSeats } = useBooking();

  if (!selectedWagon) {
    return null;
  }

  const seats = [];
  for (let i = 1; i <= selectedWagon.seatCount; i++) {
    seats.push(i);
  }

  const sections = [];

  for (let i = 0; i < seats.length; i += 4) {
    sections.push(seats.slice(i, i + 4));
  }

  function handleSeatClick(seat) {
    if (bookedSeats.includes(seat)) {
      return;
    }
    setSelectedSeats((currentSeats) => {
      if (currentSeats.includes(seat)) {
        return currentSeats.filter((item) => item !== seat);
      }

      return [...currentSeats, seat].sort((a, b) => a - b);
    });
  }

  function getSeatClass(seat) {
    if (bookedSeats.includes(seat)) {
      return `${styles.seat} ${styles.seatBooked}`;
    }

    if (selectedSeats.includes(seat)) {
      return `${styles.seat} ${styles.seatSelected}`;
    }

    return styles.seat;
  }

  function renderSeat(seat) {
    return (
      <button
        className={getSeatClass(seat)}
        type="button"
        key={seat}
        onClick={() => handleSeatClick(seat)}
        disabled={bookedSeats.includes(seat)}
      >
        {seat}
      </button>
    );
  }

  return (
    <section className={styles.mapSection}>
      <div className={styles.header}>
        <p className={styles.label}>Крок 2</p>
        <h2 className={styles.title}>Оберіть місце у вагоні</h2>
      </div>

      <div className={styles.legend}>
        <span><i className={styles.free}></i> Вільне</span>
        <span><i className={styles.selected}></i> Обране</span>
        <span><i className={styles.booked}></i> Заброньоване</span>
      </div>

      <div className={styles.wagonWrapper}>
        <div className={styles.wagon}>
          <div className={styles.door}>Вхід</div>

          <div className={styles.sections}>
            {sections.map((section, index) => (
              <div className={styles.seatSection} key={index}>
                <div className={styles.seatRow}>
                  {section.slice(0, 2).map(renderSeat)}
                </div>

                <div className={styles.aisle}></div>

                <div className={styles.seatRow}>
                  {section.slice(2, 4).map(renderSeat)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.door}>Вихід</div>
        </div>
      </div>

      <div className={styles.selectedInfo}>
        <span>Обрані місця:</span>
        <strong>
          {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'не обрано'}
        </strong>
      </div>
    </section>
  );
}

export default SeatMap;