import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            viewport={{ 
                once: true
            }}
            className='flex flex-row items-center'>

        <div className='md:w-[300px] w-[170px]'>
            <form>   
                <div className="relative">
                    <input className="block p-2.5 pl-2 w-full text-xs text-gray-500 bg-[#333333] rounded-lg
                                    focus:ring-[#F7AB0A]/80 focus:border-[#F7AB0A]/80"
                            placeholder="Lookup player ..."/>
                    <Link href="/userpage">
                    <button formAction="/userpage" className="text-white absolute right-1.5 bottom-2 bg-[#F7AB0A]/50 hover:bg-[#F7AB0A]/80
                            focus:ring-1 focus:ring-[#F7AB0A]/50 focus:outline-none font-light rounded-lg text-xs md:px-4 px-1 py-0.5">
                        Lookup
                    </button>
                    </Link>
                </div>
            </form>
        </div>
        </motion.div>
        
        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            viewport={{ 
                once: true
            }}
            className='flex flex-row items-center text-gray-300 pr-5'>
            
            <Link href="/#hero">
                <button className='md:heroButton heroButtonSmall'>Home</button>
            </Link>
            
            <Link href="/#about">
                <button className='md:heroButton heroButtonSmall'>About</button>
            </Link>

            <Link href="/#features">
                <button className='md:heroButton heroButtonSmall'>Features</button>
            </Link>

        </motion.div>
    </header>
  )
}