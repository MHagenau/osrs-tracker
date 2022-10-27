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

  const [selects, setSelects] = useState("Skills")
  function playerTable(drpdownInput: string){

    if (drpdownInput === 'Skills')
      return <SkillTable stats={statsJson} />
    else if (drpdownInput === 'Bosses')
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
          <div className='flex pt-5 pb-5 justify-center items-center'>
            <select className='block w-1/5 p-2 pl-2 pr-2 text-s text-gray-400 bg-[#1f1f1f] rounded-lg'
                    value={selects} onChange={e => setSelects(e.target.value)}>
              <option>Skills</option>
              <option>Bosses</option>
              <option>Minigames</option>
            </select>
          </div>

          <section>
            {playerTable(selects)}
          </section>

      </motion.div>
    </div>
  );
};

export default PlayerPage