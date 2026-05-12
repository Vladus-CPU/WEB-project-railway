import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.brand}>
          <span className={styles.logoBox}>
            <img
              src="/assets/Logo.svg"
              alt="Railway Booking Logo"
              className={styles.logo}
            />
          </span>

          <div className={styles.brandText}>
            <span className={styles.title}>Railway Booking</span>
            <span className={styles.subtitle}>Пошук потягів та рейсів</span>
          </div>
        </a>

        <nav className={styles.nav}>
          <a href="/#routes" className={styles.button}>
            Переглянути рейси
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;