import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
}
