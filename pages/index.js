import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';

import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Edward! I'm an aspiring UI/UX designer and frontend engineer.
          I am currently studying computer science and digital arts at Stony
          Brook University. I also love plants and baking.
        </p>
        <p>
          (This is a sample site - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
