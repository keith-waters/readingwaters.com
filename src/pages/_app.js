import App from 'next/app';
import Head from 'next/head';
import Layout from '../Layout';
import '../normalize.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>ReadingWaters</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;