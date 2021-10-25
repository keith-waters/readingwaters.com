import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/normalize.css';
import '../styles/style.css';

class ReadingWaters extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>ReadingWaters</title>
          <meta name="description" content={"Keith Waters personal site."} />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

// export default withGA(process.env.gatrackingid, Router)(ReadingWaters);
export default ReadingWaters;
