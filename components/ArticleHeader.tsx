import styles from './ArticleHeader.module.css';

interface Props {
    title: string,
    date: string
}

export default function ArticleHeader({ title, date }: Props): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <h2>{title}</h2>
        <span className={styles.date}>{date}</span>
      </header>
    </>
  );
}
