import React from 'react'
import Raamatupidaja from './profession-cards/Raamatupidaja'
import VaikeEttevotja from './profession-cards/VaikeEttevotja'
import TarkvaraArendaja from './profession-cards/TarkvaraArendaja'

const Professions = () => {
  return (
    <div className='bg-white py-20 font-lora'>
      <div className='grid grid-cols-1 md:grid-cols-3 px-10 lg:px-72 gap-10'>
          <Raamatupidaja/>
          <VaikeEttevotja/>
          <TarkvaraArendaja/>
      </div>

      <div className='relative overflow-hidden bg-cover bg-no-repeat avaldus mt-20'>
        <div className='text-center pt-36 grid grid-cols-1 gap-5'>
            <h1 className='text-[28px] lg:text-4xl font-medium'>Vastuvõtt <br className='lg:hidden'/> on juba alanud!</h1>
            <p className='lg:text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className='hidden lg:flex'/> Nunc iaculis lectus vel quam dignissim Lorem ipsum dolor sit amet.</p>

            <div className='mt-5 px-7 md:mx-40 lg:px-[355px]'>
              <a href="/" className='btn py-2 px-5 lg:mx-48 lg:scale-110 bg-[#01215F] text-white lg:font-medium font-inter flex items-center justify-center gap-1 rounded-full'>Esita avaldus juba täna <ion-icon name="arrow-forward"></ion-icon></a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Professions