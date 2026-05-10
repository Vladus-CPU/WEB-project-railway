import TrainCard from './TrainCard';
import styles from './TrainList.module.css';

function TrainList({ trains, searchQuery }) {
  const hasSearchQuery = searchQuery.trim().length > 0;
  const isEmpty = hasSearchQuery && trains.length === 0;

  return (
    <section id="routes" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Доступні рейси</p>

        <div className={styles.titleRow}>
          <h2 className={styles.title}>Список потягів</h2>
          <span className={styles.count}>Знайдено: {trains.length}</span>
        </div>
      </div>

      {isEmpty ? (
        <div className={styles.empty}>
          <h3>Рейсів не знайдено</h3>
          <p>Спробуй змінити маршрут або номер потяга.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {trains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TrainList;