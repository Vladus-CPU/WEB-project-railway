import TrainCard from './TrainCard';
import styles from './TrainList.module.css';

function TrainList({ trains }) {
  return (
    <section id="routes" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Доступні рейси</p>

        <div className={styles.titleRow}>
          <h2 className={styles.title}>Список потягів</h2>
          <span className={styles.count}>Знайдено: {trains.length}</span>
        </div>
      </div>

      <div className={styles.grid}>
        {trains.map((train) => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </section>
  );
}

export default TrainList;