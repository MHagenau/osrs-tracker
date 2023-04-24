import React from 'react'

type Props = {
    stats: any
}


function MinigameTable({ stats }: Props) {
  
    const playerMinigame: any[] = []
    for (let minigame in stats.latestSnapshot.data.activities) {
        var imgPath = `./minigame_icons/${minigame}.png`
        playerMinigame.push([
            imgPath,
            minigame, 
            stats.latestSnapshot.data.activities[minigame].score,
            stats.latestSnapshot.data.activities[minigame].rank
        ])
    }

  return (
    <div className='h-screen flex flex-col items-center text-center'>
        <table className='w-1/3 text-sm text-left text-gray-400'>
            <thead className='text-xs uppercase dark:bg-[#1f1f1f] tracking-[2px]'>
                <tr>
                    <th scope='col' className='py-3 px-6'>
                        minigame
                    </th>
                    <th scope='col' className='py-3 px-6'>
                        Score
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
                                <img className="w-4 h-4 inline object-scale-down" 
                                    src={value[0]}
                                    alt="" />
                                <p className='inline pl-2'>{value[1].charAt(0).toUpperCase() + value[1].slice(1)}</p>
                            </div>
                        </th>
                        <td className='py-2 px-6'>
                            {value[2]}
                        </td>
                        <td className='py-2 px-6'>
                            {value[3]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default MinigameTable