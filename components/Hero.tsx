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
      </div>
    </div>
  )
}

export default Hero