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
      </div>
      <div className='w-[500px]'>
        <form>   
          <div className="relative">
            <input className="block p-4 pl-4 w-full text-sm text-gray-500
                       bg-[#333333] rounded-lg border border-[#F7AB0A]/20 focus:ring-[#F7AB0A]/80 focus:border-[#F7AB0A]/80"
                       placeholder="Lookup player or start tracking new username ..."/>
            <Link href="/userpage">
              <button className="text-white absolute right-2.5 bottom-2.5 bg-[#F7AB0A]/20 hover:bg-[#F7AB0A]/50 
                      focus:ring-2 focus:ring-[#F7AB0A]/80 focus:outline-none font-medium rounded-lg text-sm px-6 py-2">
                Lookup
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero