import { useBooking } from '../context/BookingContext';
import styles from './WagonSelector.module.css';

function WagonSelector() {
  const {
    selectedTrain,
    selectedWagon,
    setSelectedWagon,
    setSelectedSeats
  } = useBooking();

if (!selectedTrain || !selectedTrain.wagons || selectedTrain.wagons.length === 0) {
  return null;
}

  function handleSelectWagon(wagon) {
    setSelectedWagon(wagon);
    setSelectedSeats([]);
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Крок 1</p>
        <h2 className={styles.title}>Оберіть вагон</h2>
      </div>

      <div className={styles.grid}>
        {selectedTrain.wagons.map((wagon) => {
          const isActive = selectedWagon && selectedWagon.id === wagon.id;

          return (
            <button
              key={wagon.id}
              type="button"
              className={`${styles.wagonCard} ${isActive ? styles.active : ''}`}
              onClick={() => handleSelectWagon(wagon)}
            >
              <span className={styles.wagonNumber}>Вагон {wagon.number}</span>
              <strong className={styles.wagonType}>{wagon.type}</strong>
              <span className={styles.wagonInfo}>
                {wagon.seatCount} місць · {wagon.classCode}
              </span>
              <span className={styles.description}>{wagon.description}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default WagonSelector;