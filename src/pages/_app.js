import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/normalize.css';
import '../styles/style.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>ReadingWaters</title>
          <meta name="description" content={"Keith Waters personal blog."} />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;