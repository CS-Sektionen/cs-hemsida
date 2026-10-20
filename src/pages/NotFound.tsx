import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <main id="main" className={styles['not-found']}>
      {/* The server answers 200 for every path, so tell search engines not to index this. */}
      <meta name="robots" content="noindex" />
      <h1 className={styles['code']}>404</h1>
      <h2>Sidan finns inte</h2>
      <p>Länken kan vara fel eller så har sidan flyttats.</p>
      <Link className="filled-button" to="/">
        Till startsidan
      </Link>
    </main>
  );
}
