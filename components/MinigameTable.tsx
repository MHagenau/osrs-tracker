import React, { useState } from 'react'

type Props = {
    stats: any
}


function MinigameTable({ stats }: Props) {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
    const [sortColumn, setSortColumn] = useState<number>(2);
    const playerMinigame: any[] = []

    function numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function formatString(str: string): string {
        str = str.replace(/_/g, " ");
        str = str.replace(/\b(?!of)\w+/g, (match: string) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase());
        return str;
    }
    
    for (let minigame in stats.latestSnapshot.data.activities) {
        var imgPath = `./minigame_icons/${minigame}.png`
        playerMinigame.push([
            imgPath,
            minigame, 
            stats.latestSnapshot.data.activities[minigame].score,
            stats.latestSnapshot.data.activities[minigame].rank
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

    function sortTable (playerMinigame: any[], sortColumn: number, sortOrder: string) {
        if (sortOrder == 'desc') {
            var sortedArray = playerMinigame.sort(function(a, b) { return b[sortColumn] - a[sortColumn]; });
        } else if (sortOrder == 'asc') {
            var sortedArray = playerMinigame.sort(function(a, b) { return a[sortColumn] - b[sortColumn]; });
        } else {
            var sortedArray = playerMinigame
        }
        return sortedArray
    }

    sortTable(playerMinigame, sortColumn, sortOrder)

  return (
    <div className='flex md:w-1/2 w-4/5 relative overflow-x-auto shadow-md sm:rounded-lg mx-auto'>
        <table className='w-full text-sm text-left text-gray-400 mb-10'>
            <thead className='text-xs uppercase bg-[#F7AB0A]/80 text-gray-900'>
                <tr>
                    <th scope='col' className='py-3 px-6'>
                        Minigame
                    </th>
                    <th scope='col' className='py-3 px-6' onClick={() => handleTableHeaderClick(2)}>
                        <div className="flex items-center">
                            Score
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div> 
                    </th>
                    <th scope='col' className='py-3 px-6' onClick={() => handleTableHeaderClick(3)}>
                        <div className="flex items-center">
                            Rank
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div> 
                    </th>
                </tr>
            </thead>
            <tbody>
                {playerMinigame.map((value, i) => (
                    <tr key={i} className='border-b bg-[#1f1f1f] border-gray-700'>
                        <th key={i} scope="row" className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                            <div>
                                <img className="w-4 h-4 inline object-scale-down" 
                                    src={value[0]}
                                    alt="" />
                                <p className='inline pl-2'>{formatString(value[1])}</p>
                            </div>
                        </th>
                        <td className='py-2 px-6'>
                            {value[2] != '-1' ? numberWithCommas(value[2]) : '0'}
                        </td>
                        <td className='py-2 px-6'>
                            {value[3] != '-1' ? numberWithCommas(value[3]) : '0'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default MinigameTable