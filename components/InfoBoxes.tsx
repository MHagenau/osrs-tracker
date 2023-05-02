import React from 'react'
import { motion } from "framer-motion"

type Props = {
    combatLvl: number
    totalExp: number
    totalRank: number
    ehp: number
    ehpRank: number
    ehb: number
    ehbRank: number
    ttm: number
}

function InfoBoxes({ combatLvl, totalExp, totalRank, ehp, ehpRank, ehb, ehbRank, ttm }: Props) {

    return (
        <motion.div
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
        className='flex items-center justify-center mt-5'>
            <div className='md:w-1/2 w-4/5 grid xl:grid-cols-5 grid-cols-2 gap-3'>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-sm">
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[27px]"
                            src='./various_icons/combat.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>Combat lvl:</p> 
                        <p className='text-gray-500'>{combatLvl}</p>
                    </div>
                </div>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-sm">
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[27px]"
                            src='./various_icons/overall.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>{(totalExp / 1000000).toFixed(2).toString()} m</p>
                        <p className='text-gray-500'>Rank: {totalRank}</p>
                    </div>
                </div>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-sm"> 
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[26px]"
                            src='./various_icons/ehp.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>{ehp.toFixed(2)} EHP</p>
                        <p className='text-gray-500'>Rank: {ehpRank}</p>
                    </div>
                </div>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-sm"> 
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[26px]"
                            src='./various_icons/ehb.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>{ehb.toFixed(2)} EHB</p>
                        <p className='text-gray-500'>Rank: {ehbRank}</p>
                    </div>
                </div>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-sm"> 
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[26px]"
                            src='./various_icons/ttm.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>Time to max</p>
                        <p className='text-gray-500'>{ttm.toFixed(2)} hours</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default InfoBoxes