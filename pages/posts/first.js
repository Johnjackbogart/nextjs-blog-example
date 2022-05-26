import Head from 'next/head';
import Link from 'next/Link';
import Script from 'next/script';
import Layout from '../../components/layout'

export default function First() {
  return (
    <>
      <Layout>
        <Head>
          <title>First post</title>
        </Head>
          <h1>
            First
          </h1>
          <h2>
            <Link href='/'>
              <a>home</a>
            </Link>
          </h2>
      </Layout>
    </>
  );
}
