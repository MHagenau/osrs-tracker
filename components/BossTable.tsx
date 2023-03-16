import React from 'react'

type Props = {
    stats: any
}


function BossTable({ stats }: Props) {
  
    const playerBoss: any[] = []
    for (let boss in stats.bosses) {
        var imgPath = `./boss_icons/${boss}.png`
        playerBoss.push([
            imgPath,
            boss, 
            stats.bosses[boss].score,
            stats.bosses[boss].rank
        ])
    }

  return (
    <div className='h-screen flex flex-col items-center text-center'>
        <table className='w-1/3 text-sm text-left text-gray-400'>
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

export default BossTable