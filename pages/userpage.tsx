import React from 'react';
import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import UserpageContent from '../components/UserpageContent';


const PlayerPage: NextPage = () => {
  const router = useRouter()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (router.query.user != undefined) {
      fetchUser(router.query.user);
    }
  }, [router.query.user]);

  const fetchUser = async ( username: string | string[] | undefined ) => {
    setIsLoading(true);
    setErr('')
    try {
      const url = `https://api.wiseoldman.net/v2/players/${username}`
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
    }
  };

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
  
  console.log(data)
  return (
  
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0
                    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

      <Head>
        <title>Oldschool RuneScape Tracker</title>
      </Head>

      <Header />

      <UserpageContent playerStats={data}/>

    </div>
  );
};


export default PlayerPage