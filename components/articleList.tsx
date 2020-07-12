import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import MainHeader from './main-header';
import { DevNote } from '../lib/DevNotes';
import styles from './homeCards.module.css';

interface Props {
    devNotes: DevNote[]
}
export default function ArticleList({ devNotes: data }: Props): JSX.Element {
  return (
    <>
      <MainHeader />
      <section className={styles.section}>
        <article className={styles.article}>
          <ul>
            {data.map(({ title, date, id }) => (
              // eslint-disable-next-line max-len
              // <li><a href="Session0.html">Dev Session 0</a><span class="date"> - 2020/06/05</span></li>
              <li key={title}>
                <Link href="/DevNotes/[id]" as={`/DevNotes/${id}`}><a>{title}</a></Link>
                <span className={utilStyles.smallDate}>{date}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
    // </Layout>
  );
}
