import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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

        <div className='w-[300px]'>
            <form>   
                <div className="relative">
                    <input className="block p-2.5 pl-4 w-full text-xs text-gray-500 bg-[#333333] rounded-lg
                                    focus:ring-[#F7AB0A]/80 focus:border-[#F7AB0A]/80"
                            placeholder="Lookup player ..."/>
                    <button formAction="/userpage" className="text-white absolute right-1.5 bottom-1.5 bg-[#F7AB0A]/20 hover:bg-[#F7AB0A]/50 
                            focus:ring-2 focus:ring-[#F7AB0A]/80 focus:outline-none font-medium rounded-lg text-xs px-4 py-1">
                    Lookup
                    </button>
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
            className='flex flex-row items-center text-gray-300'>
            
            <Link href="/#hero">
                <button className='heroButton'>Home</button>
            </Link>
            
            <Link href="/#about">
                <button className='heroButton'>About</button>
            </Link>

            <Link href="/#features">
                <button className='heroButton'>Features</button>
            </Link>

        </motion.div>
    </header>
  )
}