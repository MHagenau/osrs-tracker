import InfoBoxes from './InfoBoxes'
import BossTable from './BossTable'
import SkillTable from './SkillTable'
import { motion } from "framer-motion"
import React, { useState } from 'react'
import PlayerHeader from './PlayerHeader'
import MinigameTable from './MinigameTable'

type Props = {
    username: any
    playerStats: any
}


function UserpageContent( {username, playerStats}: Props) {
    const [selectsStatType, setSelectsStatType] = useState("Skills")
    const [selectsType, setSelectsType] = useState("Overview")

    function playerTable(drpdownInputStatType: string, drpdownInputType: string){
        if (drpdownInputStatType === 'Skills')
        return <SkillTable stats={playerStats} />
        else if (drpdownInputStatType === 'Bosses')
        return <BossTable stats={playerStats} />
        else
        return <MinigameTable stats={playerStats} />
    }

  return (
    <div>
        <PlayerHeader displayName={username}/>

        <InfoBoxes combatLvl={playerStats.combatLevel}
                   totalExp={playerStats.exp}
                   totalRank={playerStats.latestSnapshot.data.skills.overall.rank}
                   ehp={playerStats.latestSnapshot.data.computed.ehp.value}
                   ehpRank={playerStats.latestSnapshot.data.computed.ehp.rank}
                   ehb={playerStats.latestSnapshot.data.computed.ehb.value}
                   ehbRank={playerStats.latestSnapshot.data.computed.ehb.rank}
                   ttm={playerStats.ttm}
                   />

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

export default UserpageContent