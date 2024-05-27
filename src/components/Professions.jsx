import React from 'react'
import Raamadupidamine from './profession-cards/Raamadupidamine'
import Ettevotlus from './profession-cards/Ettevotlus'
import Tarkvararendaja from './profession-cards/Tarkvararendaja'

const Professions = () => {
  return (
    <div className='bg-white text-black font-manrope px-[64px] py-[128px]'>
        <div className='grid gap-[64px]'>
            <div className='grid gap-[16px]'>
                <h1 className='text-[32px]'>Erialad</h1>
                <p className='text-[16px] text-[#4D4D4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis lectus vel quam <br/> dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat <br/> hendrerit mauris.</p>
            </div>

            <div className='lg:flex lg:gap-10 grid grid-cols-1 gap-10'>
                <Raamadupidamine/>
                <Ettevotlus/>
                <Tarkvararendaja/>
            </div>
        </div>
    </div>
  )
}

export default Professions