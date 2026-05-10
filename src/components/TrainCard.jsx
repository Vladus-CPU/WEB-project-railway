import styles from './TrainCard.module.css';

function TrainCard({ train }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.number}>№ {train.trainNumber}</span>
        <span className={styles.type}>{train.trainType}</span>
      </div>

        <div className={styles.route}>
        <div className={styles.cityBlock}>
            <p className={styles.city}>{train.from}</p>
            <p className={styles.time}>{train.departureTime}</p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.cityBlock}>
            <p className={styles.city}>{train.to}</p>
            <p className={styles.time}>{train.arrivalTime}</p>
        </div>
        </div>

      <div className={styles.info}>
        <p>
          Дата: <strong>{train.departureDate}</strong>
        </p>
        <p>
          Тривалість: <strong>{train.duration}</strong>
        </p>
        <p>
          Ціна від: <strong>{train.price} грн</strong>
        </p>
      </div>

      <button className={styles.button} type="button">
        Переглянути рейс
      </button>
    </article>
  );
}

export default TrainCard;