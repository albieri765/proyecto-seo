import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="NAW6QVTiQ2YWyOhbAxn9bYxNxZb580zvdqivq4YOkVk" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
