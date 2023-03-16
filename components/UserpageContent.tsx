import router from 'next/router'
import React, { useState } from 'react'
import InfoBoxes from './InfoBoxes'
import PlayerHeader from './PlayerHeader'
import { motion } from "framer-motion"
import SkillTable from './SkillTable'
import BossTable from './BossTable'
import MinigameTable from './MinigameTable'

type Props = {
    statsJson: any
    username: any
}


function userpageContent( {statsJson, username}: Props) {
    const [selectsStatType, setSelectsStatType] = useState("Skills")
    const [selectsType, setSelectsType] = useState("Overview")

    function playerTable(drpdownInputStatType: string, drpdownInputType: string){
        if (drpdownInputStatType === 'Skills')
        return <SkillTable stats={statsJson} />
        else if (drpdownInputStatType === 'Bosses')
        return <BossTable stats={statsJson} />
        else
        return <MinigameTable stats={statsJson} />
    }
    
  return (
    <div>
        <PlayerHeader displayName={username}/>

        <InfoBoxes stats={statsJson}/>

        <motion.div
        initial={{
            y: 100,
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
        }}>
            <div className='flex w-1/3 pt-5 pb-5 justify-center items-center mx-auto'>
                <select className='w-3/5 p-2 mr-5 text-gray-400 bg-[#1f1f1f] rounded-lg'
                        value={selectsType} onChange={e => setSelectsType(e.target.value)}>
                    <option>Overview</option>
                    <option>Gained</option>
                </select>
                <select className='w-3/5 p-2 ml-5 text-gray-400 bg-[#1f1f1f] rounded-lg'
                        value={selectsStatType} onChange={e => setSelectsStatType(e.target.value)}>
                    <option>Skills</option>
                    <option>Bosses</option>
                    <option>Minigames</option>
                </select>
            </div>

            <section>
                {playerTable(selectsStatType, selectsType)}
            </section>

        </motion.div>
    </div>
  )
}

export default userpageContent