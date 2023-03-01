import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
import BackgroundCircles from './BackgroundCircles';
import { useState } from 'react';


const Hero = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState({users: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  }

  const handleClick = async () => {
    setIsLoading(true);
    setErr('')
    try {
      const url = `https://api.wiseoldman.net/v2/players/${username}`
      console.log(url)
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      console.log(data)
    } catch (err) {
        if (err instanceof Error) {
          setErr(err.message);
        }
        else {
          console.log('Unexpected error', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full h-40 w-40 mx-auto object-scale-down'
        src="https://oldschool.runescape.wiki/images/thumb/TzKal-Zuk.png/1280px-TzKal-Zuk.png?2d222" 
        alt=""
      />
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
            <input className="block p-4 pl-4 w-full text-base text-gray-300 focus:outline-none
                       bg-[#333333] rounded-lg border border-[#F7AB0A]/20 focus:ring-[#F7AB0A]/80 focus:border-[#F7AB0A]/80"
                       placeholder="Lookup player or start tracking new username ..."
                       type="text"
                       id="username"
                       name="username"
                       onChange={handleChange}
                       value={username}/>
            <Link href="userpage">
              <button className="text-white absolute right-2.5 bottom-2.5 bg-[#F7AB0A]/20 hover:bg-[#F7AB0A]/50 
                      focus:ring-2 focus:ring-[#F7AB0A]/80 focus:outline-none font-medium rounded-lg text-sm px-6 py-2"
                      type='button' onClick={handleClick}>
                Lookup
              </button>
            </Link>
          </div>
        </form>
        {isLoading && <h2 className='pb-3'>Henter data ...</h2>}
        {err && <h2>{err}</h2>}
      </div>
    </div>
  )
}

export default Hero