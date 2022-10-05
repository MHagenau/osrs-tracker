import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
import BackgroundCircles from './BackgroundCircles';


const Hero = () => {

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full h-40 w-40 mx-auto object-scale-down'
      src="https://oldschool.runescape.wiki/images/thumb/TzKal-Zuk.png/1280px-TzKal-Zuk.png?2d222" 
      alt=""/>
      <div className='z-20'>
        <h2 className='text-xl uppercase text-gray-500 pb-2 tracking-[15px]'>Zuk Tracker</h2>
        <h1 className='text-2xl lg:text-3xl font-semibold px-10'>
          <span>
            <Typewriter
              options={{
                strings: ['Oldschool RuneScape Progress Tracker', 
                          'Automaticly keep track of EHP, EHB and more!', 
                          'Zuk is ready to track your stats until you are ready to face him!'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
              }}
            />
          </span>
        </h1>
        <div className='pt-5 '>
          <Link href="#current-top">
            <button className='heroButton'>Current Top</button>
          </Link>
          <Link href="#records">
            <button className='heroButton'>Records</button>
          </Link>
          <Link href="#virtual-highscores">
            <button className='heroButton'>Virtual Highscores</button>
          </Link>
          <Link href="#community">
            <button className='heroButton'>Community</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero