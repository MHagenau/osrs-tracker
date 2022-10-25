import React from 'react'

type Props = {
    stats: any
}

function InfoBoxes({ stats }: Props) {

    function calc_combatlvl(stats: any){
        const baseCb = 1/4 * (stats.defence.level + stats.hitpoints.level 
                       + (stats.prayer.level/2)) 
        const meleeCb = 13/40 * (stats.attack.level + stats.strength.level)
        const rangeCb = 13/40 * (stats.ranged.level * 3/2)
        const mageCb = 13/40 * (stats.magic.level * 3/2)

        return (baseCb + Math.max(meleeCb, rangeCb, mageCb)).toFixed(2)
    }

    function total_xp_box(data: any){
          const exp = (data.xp / 1000000).toFixed(2).toString()
        const formattetExp = `${exp}m xp`
        return formattetExp
    }


    return (
        <div className='flex items-center justify-center mt-5'>
            <div className='w-1/2 grid grid-cols-5 gap-3'>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-xs">
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[22px]"
                            src='./various_icons/combat.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>Combat lvl:</p> 
                        <p className='text-gray-500'>{calc_combatlvl(stats.skills)}</p>
                    </div>
                </div>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-xs">
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[22px]"
                            src='./various_icons/overall.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>{total_xp_box(stats.skills.overall)}</p>
                        <p className='text-gray-500'>Rank: {stats.skills.overall.rank}</p>
                    </div>
                </div>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-xs"> 
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[21px]"
                            src='./various_icons/ehp.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>1289.7 EHP</p>
                        <p className='text-gray-500'>Rank: 9458</p>
                    </div>
                </div>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-xs"> 
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[21px]"
                            src='./various_icons/ehb.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>548.7 EHB</p>
                        <p className='text-gray-500'>Rank: 10948</p>
                    </div>
                </div>
                <div className="w-full bg-[#1f1f1f] rounded-2xl px-4 shadow-lg text-xs"> 
                    <div className='grid grid-rows-2 grid-flow-col'>
                        <img className="mx-auto row-span-2  mt-[21px]"
                            src='./various_icons/ttm.png'
                            alt=''
                        />
                        <p className='text-gray-300 mt-4'>Time to max</p>
                        <p className='text-gray-500'>0 hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBoxes