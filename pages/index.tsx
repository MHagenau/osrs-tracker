import type { NextPage } from 'next'
import Head from 'next/head'
import CurrentTop from '../components/CurrentTop';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Records from '../components/Records';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll
    z-0'>
      <Head>
        <title>Oldschool RuneScape Tracker</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id="current-top" className='snap-center'>
        <CurrentTop />
      </section>

      {/* Experience */}
      <section id="records" className='snap-center'>
        <Records />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home