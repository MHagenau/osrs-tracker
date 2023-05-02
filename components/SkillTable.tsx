import React, { useState } from 'react'

type Props = {
    stats: any
}


function SkillTable({ stats }: Props) {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
    const [sortColumn, setSortColumn] = useState<number>(4);
    const playerSkills: any[] = []

    function numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    for (let skill in stats.latestSnapshot.data.skills) {
        var imgPath = `./skill_icons/${skill}.png`
        playerSkills.push([
            imgPath,
            skill, 
            stats.latestSnapshot.data.skills[skill].rank,
            stats.latestSnapshot.data.skills[skill].level, 
            stats.latestSnapshot.data.skills[skill].experience,
            stats.latestSnapshot.data.skills[skill].ehp
        ])
    }

    function handleTableHeaderClick(columnIndex: number) {
        if (sortColumn === columnIndex) {
          setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
          setSortColumn(columnIndex);
          setSortOrder("asc");
        }
    }

    function sortTable (playerSkills: any[], sortColumn: number, sortOrder: string) {
        if (sortOrder == 'desc') {
            var sortedArray = playerSkills.sort(function(a, b) { return b[sortColumn] - a[sortColumn]; });
        } else if (sortOrder == 'asc') {
            var sortedArray = playerSkills.sort(function(a, b) { return a[sortColumn] - b[sortColumn]; });
        } else {
            var sortedArray = playerSkills
        }
        return sortedArray
    }

    sortTable(playerSkills, sortColumn, sortOrder)

  return (
    <div className='flex md:w-1/2 w-4/5 relative overflow-x-auto shadow-md sm:rounded-lg mx-auto'>
        <table className='w-full text-sm text-left text-gray-400 mb-10'>
            <thead className='text-sm uppercase bg-[#F7AB0A]/80 text-gray-900'>
                <tr>
                    <th scope='col' className='py-3 px-6'>
                        Skill
                    </th>
                    <th scope='col' className='py-3 px-6' onClick={() => handleTableHeaderClick(2)}>
                        <div className="flex items-center">
                            Rank
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>   
                    </th>
                    <th scope='col' className='py-3 px-6' onClick={() => handleTableHeaderClick(3)}>
                        <div className="flex items-center">
                            Level
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div> 
                    </th>
                    <th scope='col' className='py-3 px-6' onClick={() => handleTableHeaderClick(4)}>
                        <div className="flex items-center">
                            Experience
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div> 
                    </th>
                    <th scope='col' className='py-3 px-6' onClick={() => handleTableHeaderClick(5)}>
                        <div className="flex items-center">
                            EHP
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div> 
                    </th>
                </tr>
            </thead>
            <tbody>
                {playerSkills.map((value, i) => (
                    <tr key={i} className='border-b bg-[#1f1f1f] border-gray-700'>
                        <th key={i} scope="row" className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                            <div>
                                <img className="w-4 h-4 inline object-scale-down" 
                                    src={value[0]}
                                    alt="" />
                                <p className='inline pl-2'>{value[1].charAt(0).toUpperCase() + value[1].slice(1)}</p>
                            </div>
                        </th>
                        <td className='py-2 px-6'>
                            {numberWithCommas(value[2])}
                        </td>
                        <td className='py-2 px-6'>
                            {value[3]}
                        </td>
                        <td className='py-2 px-6'>
                            {numberWithCommas(value[4])}
                        </td>
                        <td className='py-2 px-6'>
                            {value[5].toFixed(2)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SkillTable