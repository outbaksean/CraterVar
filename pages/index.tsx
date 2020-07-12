import { GetStaticProps } from 'next';
import MainLayout from '../components/MainLayout';
import MainMenu from '../components/main-menu';
import HomeCards from '../components/homeCards';

import { tryAgainHomeCards, HomeCard } from '../lib/HomeCards';

export default function Home({ sortedData }: {sortedData: HomeCard[] }): JSX.Element {
  return (
    <MainLayout>
      <MainMenu />
      <HomeCards homeCards={sortedData} />
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const sortedData = await tryAgainHomeCards();

  return {
    props: {
      sortedData,
    },
  };
};
