import { statSync } from 'fs'
import React from 'react'

type Props = {
    stats: any
}


function BossTable({ stats }: Props) {
  
    const playerBoss: any[] = []
    for (let boss in stats.bosses) {
        var url = `https://oldschool.runescape.wiki/images/${boss.charAt(0).toUpperCase() 
                   + boss.slice(1)}_icon_%28detail%29.png?a4903`
        playerBoss.push([
            url,
            boss, 
            stats.bosses[boss].score,
            stats.bosses[boss].rank
        ])
    }

  return (
    <div className='h-screen flex flex-col items-center text-center'>
        <table className='text-sm text-left text-gray-400'>
            <thead className='text-xs uppercase dark:bg-[#1f1f1f] tracking-[2px]'>
                <tr>
                    <th scope='col' className='py-3 px-6'>
                        Boss
                    </th>
                    <th scope='col' className='py-3 px-6'>
                        Kills
                    </th>
                    <th scope='col' className='py-3 px-6'>
                        Rank
                    </th>
                </tr>
            </thead>
            <tbody>
                {playerBoss.map((value, i) => (
                    <tr key={i} className='bg-[#383838] border-b border-gray-500'>
                        <th key={i} scope="row" className='py-2 px-6 font-medium text-white '>
                            <div>
                                <img className="w-4 h-4 inline object-scale-down" 
                                    src={playerBoss[i][0]}
                                    alt="" />
                                <p className='inline pl-2'>{playerBoss[i][1].charAt(0).toUpperCase() + playerBoss[i][1].slice(1)}</p>
                            </div>
                        </th>
                        <td key={i} className='py-2 px-6'>
                            {playerBoss[i][2]}
                        </td>
                        <td key={i} className='py-2 px-6'>
                            {playerBoss[i][3]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default BossTable