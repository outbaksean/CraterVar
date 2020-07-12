import { GetStaticProps } from 'next';
import getAbout from '../lib/About';
import MainLayout from '../components/MainLayout';
import utilStyles from '../styles/utils.module.css';

export default function About({ postData }: {postData: {contentHtml: string}}):unknown {
  return (
    <MainLayout>
      <section className={utilStyles.sectionFull}>
        {/* eslint-disable-next-line react/no-danger, max-len */}
        <article className={utilStyles.articleFull} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postData = await getAbout();
  return {
    props: {
      postData,
    },
  };
};
