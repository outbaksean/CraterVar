import { GetStaticProps } from 'next';
import ArticleList from '../components/articleList';
import { getSortedDevNotes, DevNote } from '../lib/DevNotes';

export default function DevNotes({ allSortedData }: {allSortedData: DevNote[]}): unknown {
  return (
    <>
      <ArticleList devNotes={allSortedData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allSortedData = getSortedDevNotes();
  return {
    props: {
      allSortedData,
    },
  };
};
