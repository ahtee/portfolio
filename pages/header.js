import Head from 'next/head';
import { ServerStyleSheet } from 'styled-components';

function Header() {
  const sheet = new ServerStyleSheet();
  const styleTags = sheet.getStyleElement();
  return (
    <Head>
      <meta charSet="uf-8" />
      <meta name="viewport" content="initial-scale-1.0, width=device-width" />
      <title>otte</title>
      <link rel="icon" href="/favicon.ico" />
      {styleTags}
    </Head>
  );
}
export default Header;
