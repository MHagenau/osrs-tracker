import type { NextPage } from 'next'
import Head from 'next/head'
import Community from '../components/Community';
import CurrentTop from '../components/CurrentTop';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Highscores from '../components/Highscores';
import Features from '../components/Features';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0'>
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

      <section id="features" className='snap-center'>
        <Features />
      </section>

      <section id="virtual-highscore" className='snap-start'>
        <Highscores />
      </section>

      <section id="community" className="snap-start">
        <Community />
      </section>

    </div>
  );
};

export default Home