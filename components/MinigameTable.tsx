import { statSync } from 'fs'
import React from 'react'

type Props = {
    stats: any
}


function MinigameTable({ stats }: Props) {
  
    const playerMinigame: any[] = []
    for (let minigame in stats.minigames) {
        var imgPath = `/minigame_icons/${minigame}.png`
        playerMinigame.push([
            imgPath,
            minigame, 
            stats.minigames[minigame].score,
            stats.minigames[minigame].rank
        ])
    }

  return (
    <div className='h-screen flex flex-col items-center text-center'>
        <table className='text-sm text-left text-gray-400'>
            <thead className='text-xs uppercase dark:bg-[#1f1f1f] tracking-[2px]'>
                <tr>
                    <th scope='col' className='py-3 px-6'>
                        minigame
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
                {playerMinigame.map((value, i) => (
                    <tr key={i} className='bg-[#383838] border-b border-gray-500'>
                        <th key={i} scope="row" className='py-2 px-6 font-medium text-white '>
                            <div>
                                <img className="w-5 h-5 inline object-scale-down" 
                                    src={playerMinigame[i][0]}
                                    alt="" />
                                <p className='inline pl-2'>{playerMinigame[i][1].charAt(0).toUpperCase() + playerMinigame[i][1].slice(1)}</p>
                            </div>
                        </th>
                        <td key={i} className='py-2 px-6'>
                            {playerMinigame[i][2]}
                        </td>
                        <td key={i} className='py-2 px-6'>
                            {playerMinigame[i][3]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default MinigameTable