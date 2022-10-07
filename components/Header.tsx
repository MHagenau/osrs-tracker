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

            <Link href="/#current-top">
                <button className='heroButton'>Current Top</button>
            </Link>

            <Link href="/#features">
                <button className='heroButton'>Features</button>
            </Link>

            <Link href="/userpage">
                <button className='heroButton'>UserPage</button>
            </Link>

            <Link href="/#community">
                <button className='heroButton'>Community</button>
            </Link>
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

            <form> 
                <div className="relative">
                    <input id="search" placeholder="Username" required
                           className='bg-[#333333] form-control block w-full px-3 py-1.5 text-base
                                     font-normal text-gray-700 bg-clip-padding border border-solid
                                     border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700
                                     focus:border-[#F7AB0A] focus:border-opacity-40 focus:outline-none'/>
                    
                    <button type="submit" className='absolute right-3 top-1.5 transition-all
                                        hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                        Lookup
                    </button>
                </div>
            </form>
        </motion.div>
    </header>
  )
}