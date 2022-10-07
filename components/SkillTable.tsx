import React from 'react'

type Props = {}

function SkillTable({}: Props) {
  return (
    <div className=''>
        <table className='text-sm text-left text-gray-400'>
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
                <tr className='bg-[#383838] border-b border-gray-500'>
                    <th scope="row" className='py-4 px-6 font-medium text-white '>
                        <div>
                            <img className="w-4 h-4 inline object-scale-down" 
                                src="https://oldschool.runescape.wiki/images/Attack_icon_%28detail%29.png?a4903" 
                                alt="Attack" />
                            <p className='inline pl-2'>Attack</p>
                        </div>
                    </th>
                    <td className='py-4 px-6'>
                        28016
                    </td>
                    <td className='py-4 px-6'>
                        99
                    </td>
                    <td className='py-4 px-6'>
                        26083252
                    </td>
                </tr>
                <tr className='bg-[#383838] border-b border-gray-500'>
                    <th scope="row" className='py-4 px-6 font-medium text-white'>
                        <div>
                            <img className="w-4 h-4 inline object-scale-down" 
                                src="https://oldschool.runescape.wiki/images/Strength_icon_%28detail%29.png?a4903" 
                                alt="Attack" />
                            <p className='inline pl-2'>Strength</p>
                        </div>
                    </th>
                    <td className='py-4 px-6'>
                        56080
                    </td>
                    <td className='py-4 px-6'>
                        99
                    </td>
                    <td className='py-4 px-6'>
                        17380758
                    </td>
                </tr>
                <tr className='bg-[#383838] border-b border-gray-500'>
                    <th scope="row" className='py-4 px-6 font-medium text-white'>
                        <div>
                            <img className="w-4 h-4 inline object-scale-down" 
                                src="https://oldschool.runescape.wiki/images/Defence_icon_%28detail%29.png?a4903" 
                                alt="Attack" />
                            <p className='inline pl-2'>Defence</p>
                        </div>
                    </th>
                    <td className='py-4 px-6'>
                        37523
                    </td>
                    <td className='py-4 px-6'>
                        99
                    </td>
                    <td className='py-4 px-6'>
                        30697186
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default SkillTable