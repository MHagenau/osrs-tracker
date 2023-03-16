import { statSync } from 'fs'
import React from 'react'

type Props = {
    stats: any
}


function SkillTable({ stats }: Props) {
  
    const playerSkills: any[] = []

    for (let skill in stats.skills) {
        var imgPath = `./skill_icons/${skill}.png`
        playerSkills.push([
            imgPath,
            skill, 
            stats.skills[skill].rank, 
            stats.skills[skill].level, 
            stats.skills[skill].xp
        ])
    }

  return (
    <div className='h-screen flex flex-col items-center text-center'>
        <table className='w-1/3 text-sm text-left text-gray-400'>
            <thead className='text-xs uppercase dark:bg-[#1f1f1f] tracking-[2px]'>
                <tr>
                    <th scope='col' className='py-3 px-6'>
                        Skill
                    </th>
                    <th scope='col' className='py-3 px-6'>
                        Rank
                    </th>
                    <th scope='col' className='py-3 px-6'>
                        Level
                    </th>
                    <th scope='col' className='py-3 px-6'>
                        Experience
                    </th>
                </tr>
            </thead>
            <tbody>
                {playerSkills.map((value, i) => (
                    
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
                        <td className='py-2 px-6'>
                            {value[4]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SkillTable