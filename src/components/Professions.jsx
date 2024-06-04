import React from 'react'
import Raamatupidaja from './profession-cards/Raamatupidaja'
import VaikeEttevotja from './profession-cards/VaikeEttevotja'
import TarkvaraArendaja from './profession-cards/TarkvaraArendaja'

const Professions = () => {
  return (
    <div className='bg-white font-lora'>
      <div className='flex md:flex lg:hidden pt-20 px-10'>
        <div className='text-center grid grid-cols-1 gap-5 font-inter'>
          <h1 className='text-[28px] font-semibold'>Erialad</h1>
          <p className='text-[20px] leading-8 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc iaculis lectus vel quam dignissim Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Morbi volutpat hendrerit mauris.
          </p>
        </div>
      </div>

      <div className='px-5 lg:pt-36 md:pt-36 pt-20'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 md:px-36 lg:px-48 px-5 content-center'>
          <Raamatupidaja/>
          <VaikeEttevotja/>
          <TarkvaraArendaja/>
        </div>
      </div>

      <div className='relative overflow-hidden bg-cover bg-no-repeat avaldus mt-20'>
        <div className='text-center pt-36 grid grid-cols-1 gap-5 px-10'>
            <h1 className='text-[28px] lg:text-4xl font-semibold'>Vastuvõtt <br className='lg:hidden'/> on juba alanud!</h1>
            <p className='lg:text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className='hidden lg:flex'/> Nunc iaculis lectus vel quam dignissim Lorem ipsum dolor sit amet.</p>

            <div className='mt-5 px-7 md:mx-auto lg:px-[255px]'>
              <a href="/" className='btn py-2 px-5 lg:mx-36 lg:scale-110 bg-[#01215F] text-white lg:font-medium font-inter flex items-center justify-center gap-1 rounded-full'>Esita avaldus juba täna <ion-icon name="arrow-forward"></ion-icon></a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Professions