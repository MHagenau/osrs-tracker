import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import statsJson from '../json_response.json' assert {type: "json"};
import test_data from '../json_response_wom.json' assert {type: "json"};
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import React from 'react';
import UserpageContent from '../components/UserpageContent';


const PlayerPage: NextPage = () => {
  const router = useRouter()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState('');
  const username = router.query.user;
  useEffect(() => {
    fetchUser(username);
  }, []);

  const fetchUser = async ( username: string | string[] | undefined ) => {
    setIsLoading(true);
    setErr('')
    try {
      const url = `https://api.wiseoldman.net/v2/players/${username}`
      console.log(url)
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
        if (err instanceof Error) {
          setErr(err.message);
        }
        else {
          console.log('Unexpected error', err);
      }
    } finally {
      setIsLoading(false);
      console.log(data)
    }
  };
  console.log(data)
  console.log(isLoading)

  if (isLoading === true) {
    return (
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

        <Head>
        <title>Oldschool RuneScape Tracker</title>
        </Head>

        <Header />

        <h2>Loading ...</h2>

        </div>
    )
  }

  return (
  
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0
                    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

      <Head>
        <title>Oldschool RuneScape Tracker</title>
      </Head>

      <Header />

      <UserpageContent  statsJson={statsJson}
                        username={router.query.user}
                        playerStats={data}/>

    </div>
  );
};


export default PlayerPage