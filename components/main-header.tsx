import Link from 'next/link';
import styles from './main-header.module.css';

export default function MainHeader(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img src="/Images/Keeler_crater_small.jpg" width="90" height="50" alt="Crater" />
          <h1>Crater Var</h1>
        </a>
      </Link>
    </header>
  );
}
