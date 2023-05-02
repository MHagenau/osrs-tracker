import InfoBoxes from './InfoBoxes'
import BossTable from './BossTable'
import SkillTable from './SkillTable'
import { motion } from "framer-motion"
import React, { useState } from 'react'
import PlayerHeader from './PlayerHeader'
import MinigameTable from './MinigameTable'

type Props = {
    playerStats: any
}


function UserpageContent( { playerStats }: Props) {
    const [selectsStatType, setSelectsStatType] = useState("Skills")
    const [selectsType, setSelectsType] = useState("Overview")
    const lastChanged = new Date(playerStats.lastChangedAt)
    const currTime = new Date(new Date().toISOString())

    function timeDifference(current: Date, last: Date) {
        var difference = current.getTime() - last.getTime();
        var daysDifference = Math.floor(difference/1000/60/60/24);
        difference -= daysDifference*1000*60*60*24
        var hoursDifference = Math.floor(difference/1000/60/60);
        difference -= hoursDifference*1000*60*60
        var minutesDifference = Math.floor(difference/1000/60);
        difference -= minutesDifference*1000*60
        var secondsDifference = Math.floor(difference/1000);
        if (daysDifference != 0) {
            var sinceUpdate = daysDifference + ((daysDifference > 0) ? ' day ' : ' days ') + 
                                hoursDifference + ((daysDifference > 0) ? ' hour ' : ' hours ') + 
                                minutesDifference + ((daysDifference > 0) ? ' minute ' : ' minutes ') + 
                                secondsDifference + ((daysDifference > 0) ? ' second ' : ' seconds ')
        } else if (hoursDifference != 0) {
            var sinceUpdate = hoursDifference + ((daysDifference > 0) ? ' hour ' : ' hours ') + 
                              minutesDifference + ((daysDifference > 0) ? ' minute ' : ' minutes ') + 
                              secondsDifference + ((daysDifference > 0) ? ' second ' : ' seconds ')
        } else if (minutesDifference !=0) {
            var sinceUpdate = minutesDifference + ((daysDifference > 0) ? ' minute ' : ' minutes ') + 
                              secondsDifference + ((daysDifference > 0) ? ' second ' : ' seconds ')
        } else {
            var sinceUpdate = secondsDifference + ((daysDifference > 0) ? ' second ' : ' seconds ')
        }
        return sinceUpdate
    }

    function calcPercentToMax(ttm: number, accType: string) {
        if (accType === 'regular') {
            var totalMaxTime = 962.92
        } else if (accType === 'ironman' || accType === 'hardcore') {
            var totalMaxTime = 1603.43
        } else if (accType === 'ultimate') {
            var totalMaxTime = 2063.70
        } else {
            var totalMaxTime = 0
        }

        if (ttm === 0) {
            return '100%'
        } else {
            const percentLeft = (((totalMaxTime - ttm) / totalMaxTime) * 100).toFixed(1)
            return `${percentLeft}%`
             
        }
    }
    
    const percentToMax = calcPercentToMax(playerStats.ttm, playerStats.type)
    const sinceUpdate = timeDifference(currTime, lastChanged)


    function playerTable(drpdownInputStatType: string, drpdownInputType: string){
        if (drpdownInputStatType === 'Skills') {
            return <SkillTable stats={playerStats} /> 
        } else if (drpdownInputStatType === 'Bosses') {
            return <BossTable stats={playerStats} />
        } else {
            return <MinigameTable stats={playerStats} />
        }
    }

  return (
    <div>
        <PlayerHeader displayName={playerStats.displayName}
                      sinceUpdate={sinceUpdate}
                      progressToMax={percentToMax}/>

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
            <div className='grid md:grid-cols-2 md:w-1/2 grid-cols-1 w-4/5 pt-5 pb-5 justify-center items-center mx-auto'>
                <select className='p-2 md:mr-2 text-gray-400 bg-[#1f1f1f] rounded-lg'
                        value={selectsType} onChange={e => setSelectsType(e.target.value)}>
                    <option>Overview</option>
                    <option>Gained</option>
                </select>
                <select className='p-2 md:ml-2 md:mt-0 mt-2 text-gray-400 bg-[#1f1f1f] rounded-lg'
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