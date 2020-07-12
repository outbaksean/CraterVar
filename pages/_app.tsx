import { AppProps } from 'next/app';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
