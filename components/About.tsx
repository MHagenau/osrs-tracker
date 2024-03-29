import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
                   max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute md:top-24 top-20 uppercase md:tracking-[20px] tracking-[10px] text-gray-500 md:text-2xl text-xl'>
            About 
        </h3>

        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ 
            opacity: 1, x:0
        }}
        src='https://oldschool.runescape.wiki/images/Infernal_cape_equipped.gif?3f996'
        className='-mb-20 md:mb-0 flex-shrink-0 w-12 rounded-full object-scale-down
                   md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'/>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='md:text-4xl text-lg font-semibold'> Zuk <span className='underline decoration-[#F7AB0A]/80'>Oldschool RuneScape</span> Tracker</h4>
            <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
            </p>
        </div>
    </motion.div>
  )
}

export default About