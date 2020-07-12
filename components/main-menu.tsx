import Link from 'next/link';
import styles from './main-menu.module.css';

export default function MainHeader(): JSX.Element {
  return (
    <div className={styles.menu}>
      <Link href="/devNotes">
        <a>Dev Notes</a>
      </Link>
      <Link href="/">
        <a><s>Projects</s></a>
      </Link>
      <Link href="/">
        <a><s>Blog</s></a>
      </Link>
      <Link href="/">
        <a><s>Stories</s></a>
      </Link>
      <Link href="/About">
        <a>About</a>
      </Link>
    </div>
  );
}
