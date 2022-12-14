import React from 'react'

type Props = {}

function Community({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
                    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Community
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
                        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
                        scrollbar-thumb-[#F7AB0A]/80'>
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                            items-center justify-center p-20 md:p-44 h-screen'>
              <img className='xl:w-[500px] xl:h-[500px] object-scale-down object-center'
                src='https://oldschool.runescape.wiki/images/Wise_Old_Man.png?b2e69'
                alt=''
              />

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>Project 1 of 5:</span> Dette er mit projekt
                </h4>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] 
                        -skew-y-12'/>
    </div>
  )
}

export default Community