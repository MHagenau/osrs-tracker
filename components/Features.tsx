import React from 'react'
import { motion } from 'framer-motion'
import FeatureCards from './FeatureCards'

type Props = {}

function Features({}: Props) {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
                           max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute md:top-24 top-20 uppercase md:tracking-[20px] tracking-[10px] text-gray-500 md:text-2xl text-xl'>
        Features
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
                      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <FeatureCards imageURL={'https://oldschool.runescape.wiki/images/Max_cape_detail.png?4f67e'}
                      featureTitle={'EHP Tracker'}
                      featureDescription={`Efficient hours played (EHP) measures how many hours an account has spent gaining experience, 
                      assuming only the most efficient methods were used. For example, if the most efficient method of gaining experience 
                      in a certain skill grants 100,000 experience per hour, each time a player gains 100,000 experience in that skill, they 
                      have played 1 EHP (regardless of how many real hours it took them to get that amount of experience)`}
                      avatars={['https://oldschool.runescape.wiki/images/Magic_pyre_logs_detail_animated.gif?381a5',
                                'https://oldschool.runescape.wiki/images/Pestle_and_mortar_detail.png?8395c',
                                'https://oldschool.runescape.wiki/images/thumb/Barbarian_rod_detail.png/1280px-Barbarian_rod_detail.png?577e7',
                                'https://oldschool.runescape.wiki/images/thumb/Infernal_pickaxe_detail.png/1024px-Infernal_pickaxe_detail.png?b2065']}/>
        <FeatureCards imageURL={'https://oldschool.runescape.wiki/images/thumb/Tzkal_slayer_helmet_detail.png/1280px-Tzkal_slayer_helmet_detail.png?6796d'}
                      featureTitle={'EHB Tracker'}
                      featureDescription={`Efficient hours bossed (EHB) measures how many hours an account has spent continuously killing a
                      boss at the average achievable kill time. Similar to EHP, if the average kill count of a certain boss in an hour is 35,
                      each time a player kills 35 of said boss, they have gained 1 EHB, regardless of how long it actually took them to kill 
                      that amount of said boss.`}
                      avatars={['https://oldschool.runescape.wiki/images/thumb/Vorkath.png/280px-Vorkath.png?1ce3f',
                                'https://oldschool.runescape.wiki/images/Zulrah_%28serpentine%29.png?29a54',
                                'https://oldschool.runescape.wiki/images/Corrupted_Hunllef.png?0cd55',
                                'https://oldschool.runescape.wiki/images/Great_Olm.png?f1081',
                                'https://oldschool.runescape.wiki/images/thumb/Pestilent_Bloat.png/260px-Pestilent_Bloat.png?b1ab7']}/>
        <FeatureCards imageURL={'https://oldschool.runescape.wiki/images/Runecraft_cape%28t%29_detail.png?eeef1'}
                      featureTitle={'RHP Tracker'}
                      featureDescription={`Realistic hours played (RHP) measures how many hours an account has spent gaining experience, 
                      assuming average experience gains. EHP often uses very difficult and unrealistic methods for the average player, 
                      hence we have introduced RHP. This tracking parameter appeals to the casual osrs player, although experience 
                      rates will still be based on the best methods, just without zero timing and tick manipulating.`}
                      avatars={['https://oldschool.runescape.wiki/images/Burning_brazier_%28Wintertodt%29.png?7b131',
                                'https://oldschool.runescape.wiki/images/Tempoross.png?12042',
                                'https://oldschool.runescape.wiki/images/Prospector_kit_%28male%29_equipped.png?4000a',
                                'https://oldschool.runescape.wiki/images/Herbiboar.png?306ac']}/>
        <FeatureCards imageURL={'https://oldschool.runescape.wiki/images/Wise_Old_Man.png?b2e69'}
                      featureTitle={'Community'}
                      featureDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum.`}
                      avatars={['https://oldschool.runescape.wiki/images/Your_Clan_icon.png?29427',
                                'https://oldschool.runescape.wiki/images/Grouping_icon.png?30f91']}/>
      </div>
    </motion.div>
  )
}

export default Features