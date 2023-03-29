import Head from 'next/head';
import { useState } from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Sidebar from '../components/Sidebar';
import Testimonials from '../components/Testimonials';
import Works from '../components/Works';
import styles from '../styles/home.module.css';

export default function Home({ result, resultT }) {
  const allCategories = [
    'all',
    ...new Set(result.map((item) => item.category)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [items, setItems] = useState(result);

  const [openNavbar, setOpenNavbar] = useState(false);

  const filtreCategories = (x) => {
    if (x === 'all') {
      setItems(result.slice(0, 9));
      return;
    }
    const filtreCategory = result.filter((item) => item.category === x);
    // console.log(filtreCategory);
    setItems(filtreCategory.slice(0, 3));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Reda Portfolio</title>

        <meta name="description" content="Portofolio Reda Ghafla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} id="home">
        <Header openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        <Sidebar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        <div className={styles.section} onClick={() => setOpenNavbar(false)}>
          <Hero />
          <Works
            categories={categories}
            items={items}
            filtreCategories={filtreCategories}
          />
          <Portfolio />
          <Testimonials resultT={resultT} />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/works');
  const result = await response.json();

  const responseT = await fetch('http://localhost:3000/api/testimonials');
  const resultT = await responseT.json();

  return {
    props: {
      result,
      resultT,
    },
  };
}
