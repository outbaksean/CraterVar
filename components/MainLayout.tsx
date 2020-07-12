import Head from 'next/head';
import MainHeader from './main-header';
import MainFooter from './main-footer';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Crater Var';

export default function MainLayout({ children }: {children: React.ReactNode}): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
      </Head>
      <MainHeader />
      <div className={utilStyles.mainContent}>{children}</div>
      <MainFooter />
    </>
  );
}
