import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import BackgroundCircles from './BackgroundCircles';


const Hero = () => {
  const [username, setUsername] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  }

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full h-40 w-40 mx-auto object-scale-down'
        src="https://oldschool.runescape.wiki/images/thumb/TzKal-Zuk.png/1280px-TzKal-Zuk.png?2d222" 
        alt=""
      />
      <div className='z-20'>
        <h2 className='md:text-xl text-base uppercase text-gray-500 pb-2 md:tracking-[15px] tracking-[10px]'>Zuk Tracker</h2>
        <h1 className='md:text-2xl lg:text-3xl text-base font-semibold px-10'>
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
      <div className='md:w-[500px] w-3/4'>
        <form>   
          <div className="relative">
            <input className="block p-4 pl-4 w-full md:text-base text-xs text-gray-300 focus:outline-none
                       bg-[#333333] rounded-lg border border-[#F7AB0A]/20 focus:ring-[#F7AB0A]/80 focus:border-[#F7AB0A]/80"
                       placeholder="Lookup or start tracking a player ..."
                       type="text"
                       id="username"
                       name="username"
                       onChange={handleChange}
                       value={username}/>
            <Link
              href={{
                pathname: '/userpage',
                query: { user: username },
              }}>
              <button className="text-white absolute right-1.5 bottom-2.5 bg-[#F7AB0A]/20 hover:bg-[#F7AB0A]/50 
                      focus:ring-1 focus:ring-[#F7AB0A]/80 focus:outline-none rounded-lg md:text-sm text-xs px-3 py-2"
                      type='button'>
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