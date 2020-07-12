import { HomeCard } from '../lib/HomeCards';
import styles from './homeCards.module.css';

interface Props {
    homeCards: HomeCard[]
}
export default function HomeCards({ homeCards: data }: Props): JSX.Element {
  return (
    <>
      <section className={styles.section}>

        {data.map(({ content, title }) => (
          // eslint-disable-next-line react/no-danger, max-len
          <article className={styles.article} key={title} dangerouslySetInnerHTML={{ __html: content }} />
        ))}

      </section>
    </>
    // </Layout>
  );
}
