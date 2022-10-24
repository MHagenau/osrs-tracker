import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import SkillTable from '../components/SkillTable';
import BossTable from '../components/BossTable';
import statsJson from '../json_response.json' assert {type: "json"};
import { useState } from 'react';

const PlayerPage: NextPage = () => {

  const [selects, setSelects] = useState("Skills")
  function playerTable(drpdownInput: string){

    if (drpdownInput === 'Skills')
      return <SkillTable stats={statsJson} />
    else
      return <BossTable stats={statsJson} />
  }


  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0'>
      <Head>
        <title>Oldschool RuneScape Tracker</title>
      </Head>

      <Header />

      <div className='flex pt-10 pb-10 justify-center items-center'>
        <select className='block w-1/5 p-2 pl-2 pr-2 text-s text-gray-500 bg-[#333333] rounded-lg'
                value={selects} onChange={e => setSelects(e.target.value)}>
          <option>Skills</option>
          <option>Bosses</option>
        </select>
      </div>

      <section>
        {playerTable(selects)}
      </section>

    </div>
  );
};

export default PlayerPage