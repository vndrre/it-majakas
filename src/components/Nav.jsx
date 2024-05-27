import React from 'react'

import icon from '../assets/Icon Set.svg'

const Nav = () => {
  return (
    <div className='bg-[#D47A28] text-white md:py-[8px] md:px-[64px] px-4 py-3 font-manrope fixed top-0 left-0 w-full'>
        <div className='flex justify-between'>
            <div className='flex gap-[16px] md:text-[16px] '>
                <h1 className='font-medium'>Vastuvõtt on juba alanud!</h1>
                <p className='hidden md:flex'>Vastuvõtt on kestab 01.04.2024 - 21.04.2024.</p>
            </div>

            <div>
                <a href="/" className='flex gap-1 hover:underline'>Registreeri siin <img src={icon} alt="" className=''/></a>
            </div>
        </div>
    </div>
  )
}

export default Nav