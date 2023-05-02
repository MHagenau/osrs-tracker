import React from 'react'
import { motion } from "framer-motion"

type Props = {
    displayName: any
    sinceUpdate: string
    progressToMax: string
}

function PlayerHeader({ displayName, sinceUpdate, progressToMax }: Props) {
    return (
        <div>
            <motion.section
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
            className="md:w-1/2 w-4/5 mx-auto bg-[#1f1f1f] rounded-2xl px-8 py-4 shadow-lg mt-8">
                <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Last updated: <br></br>{sinceUpdate} ago</span>
                    <span className="text-[#F7AB0A]/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 
                                    0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                        </svg>
                    </span>
                </div>
                <div className="mt-2">
                    <h2 className="text-white font-bold text-3xl tracking-wide">{displayName}</h2>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400 text-sm">Progress towards max</span>
                    <span className="text-gray-400 text-sm">{progressToMax}</span>
                </div>
                <div className="h-1 w-full bg-black mt-1 rounded-full">
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="h-1 bg-[#F7AB0A]/80" style={{width: `${progressToMax}`}}></div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default PlayerHeader