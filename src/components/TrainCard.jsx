import styles from './TrainCard.module.css';
import { Link } from 'react-router-dom';

function TrainCard({ train }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.number}>№ {train.trainNumber}</h3>
        <span className={styles.type}>{train.trainType}</span>
      </div>

      <div className={styles.route}>
        <div className={styles.routeBlock}>
          <p className={styles.city}>{train.from}</p>
          <p className={styles.time}>{train.departureTime}</p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.routeBlockRight}>
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

      <Link to={`/booking/${train.id}`} className={styles.button}>
        Переглянути рейс
      </Link>
    </article>
  );
}

export default TrainCard;