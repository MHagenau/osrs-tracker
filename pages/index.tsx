import Head from 'next/head'
import type { NextPage } from 'next'
import Hero from '../components/Hero';
import About from '../components/About';
import Header from '../components/Header';
import Features from '../components/Features';
import Community from '../components/Community';
import Highscores from '../components/Highscores';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0
                    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Oldschool RuneScape Tracker</title>
      </Head>

      <Header />

      <section id='hero' className=''>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="features" className='snap-center'>
        <Features />
      </section>

      {/* Might use later
      <section id="virtual-highscore" className='snap-start'>
        <Highscores />
      </section>

      <section id="community" className="snap-start">
        <Community />
      </section>
      */}

    </div>
  );
};

export default Home