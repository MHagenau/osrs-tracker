import React, { useState } from 'react'

type Props = {}

function Dropdown({}: Props ) {
  const [value, setValue] = useState("skills");
  return (
    <div>
        <select className='block p-2.5 pl-4 w-1/5 text-s text-gray-500 bg-[#333333] rounded-lg
                           focus:ring-[#F7AB0A]/80 focus:border-[#F7AB0A]/80' 
                           name="playerTableSelect" id="player-tab-sel"
                           value={value}
                           onChange={(e) => {
                            setValue(e.target.value);
                        }}>
            <option value='skills'>
                Skills
            </option>
            <option value='bosses'>
                Bosses
            </option>
            <option value='minigames'>
                Minigames
            </option>
        </select>
    </div>
  )
}

export default Dropdown