import React from 'react'
import { motion } from "framer-motion"

type Props = {
    imageURL: string
    featureTitle: string
    featureDescription: string
    avatars: string[]
}

function FeatureCards({ imageURL, featureTitle, featureDescription, avatars }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center md:space-y-5 space-y-3 flex-shrink-0 w-[300px] md:w-[400px]
                        xl:w-[600px] snap-center bg-[#292929] md:p-10 p-7 hover:opacity-100 opacity-40 cursor-pointer
                        transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ 
            duration: 1.2 
        }}
        whileInView={{ 
            opacity: 1, y: 0
        }}
        viewport={{ 
            once: true
        }}
        className='md:w-32 md:h-32 w-16 h-16 rounded-full xl:w-[200px] xl:h-[200px] object-scale-down object-center'
        src={imageURL}
        alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='md:text-3xl text-xl font-light'>{featureTitle}</h4>
            <div className='flex space-x-2 my-2'>

                {avatars.map((avatar, i) => (
                    <img key={i} className='md:h-11 md:w-11 h-8 w-8 rounded-full object-scale-down object-bottom' 
                    src={avatar} alt=""/>
                ))}

            </div>
            
            <p className='md:text-base text-xs -mb-2'>
                {featureDescription}
            </p>
        </div>
    </article>
  )
}

export default FeatureCards