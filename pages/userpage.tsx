import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import SkillTable from '../components/SkillTable';
import BossTable from '../components/BossTable';
import statsJson from '../json_response.json' assert {type: "json"};
import Dropdown from '../components/Dropdown';

const PlayerPage: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0'>
      <Head>
        <title>Oldschool RuneScape Tracker</title>
      </Head>

      <Header />

      <Dropdown />

      <div className='h-screen flex items-center justify-center'>
        <SkillTable stats={statsJson}/>
      </div>

      <div className='h-screen flex items-center justify-center'>
        <BossTable stats={statsJson}/>
      </div>


    </div>
  );
};

export default PlayerPage