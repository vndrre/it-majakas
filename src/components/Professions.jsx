import React from 'react'
import Raamadupidamine from './profession-cards/Raamadupidamine'

const Professions = () => {
  return (
    <div className='bg-white text-black font-manrope px-[64px] py-[128px]'>
        <div className='grid gap-[64px]'>
            <div className='grid gap-[16px]'>
                <h1 className='text-[32px]'>Erialad</h1>
                <p className='text-[16px] text-[#4D4D4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis lectus vel quam <br/> dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat <br/> hendrerit mauris.</p>
            </div>

            <div className='flex'>
                <Raamadupidamine/>
            </div>
        </div>
    </div>
  )
}

export default Professions