import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import SkillTable from '../components/SkillTable';
import statsJson from '../json_response.json';



const PlayerPage: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0'>
      <Head>
        <title>Oldschool RuneScape Tracker</title>
      </Head>

      <Header />

      <div className='h-screen flex items-center justify-center'>
        <SkillTable />
      </div>



    </div>
  );
};

export default PlayerPage