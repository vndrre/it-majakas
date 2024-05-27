import React from 'react'

import image from '../profession-cards/vaikeettevotja.svg'

const VaikeEttevotja = () => {
  return (
    <div className='bg-gradient-to-b from-[#090D30] to-[#004E92] text-white py-10 rounded-lg'>
        <div className='text-left grid grid-cols-1 gap-7 px-5'>
            <h1 className='font-lora font-medium text-[28px]'>Väikeettevõtja</h1>
            <p className='text-[#F5F5F5] text-[16px] font-inter'>Erialal õpitakse äriplaani koostamist, raamatupidamise aluseid, turundust jt ärimaailma põhitõdesid.</p>
        </div>

        <div className='relative'>
          <img src={image} alt="" className='w-[275px] mt-14 mb-10'/>
          <a href="/" className='absolute bottom-4 mb-5 right-0 button1 py-2 px-5 bg-orange-500 text-white rounded-md font-inter'>LOE LÄHEMALT</a>
        </div>
    </div>
  )
}

export default VaikeEttevotja