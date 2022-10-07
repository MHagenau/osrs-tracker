import React from 'react'
import { motion } from 'framer-motion'
import FeatureCards from './FeatureCards'

type Props = {}

function Features({}: Props) {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
                           max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Records
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
      </div>
    </motion.div>
  )
}

export default Features