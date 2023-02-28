import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import SkillTable from '../components/SkillTable';
import BossTable from '../components/BossTable';
import statsJson from '../json_response.json' assert {type: "json"};
import { useState } from 'react';
import MinigameTable from '../components/MinigameTable';
import PlayerHeader from '../components/PlayerHeader';
import InfoBoxes from '../components/InfoBoxes';
import { motion } from "framer-motion"

const PlayerPage: NextPage = () => {

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
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0
                    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Oldschool RuneScape Tracker</title>
      </Head>

      <Header />

      <PlayerHeader />

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
  );
};

export default PlayerPage