import { GetStaticProps, GetStaticPaths } from 'next';
import ArticleHeader from '../../components/ArticleHeader';
import { getDevNoteData, getAllPostIds } from '../../lib/DevNotes';
import MainLayout from '../../components/MainLayout';
import utilStyles from '../../styles/utils.module.css';

// eslint-disable-next-line max-len
export default function DevNote({ postData }: {postData: {title: string, date: string, contentHtml: string}}): JSX.Element {
  return (
    <MainLayout>
      <section className={utilStyles.sectionFull}>
        <ArticleHeader title={postData.title} date={postData.date} />
        {/* eslint-disable-next-line react/no-danger, max-len */}
        <article className={utilStyles.articleFull} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getDevNoteData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
