import React from 'react'
import Raamatupidaja from './profession-cards/Raamatupidaja'

const Professions = () => {
  return (
    <div className='bg-white py-20 px-10 font-lora '>
        <div className='grid grid-cols-1 md:grid-cols-3 md:mx-60 gap-10'>
            <Raamatupidaja/>
            <Raamatupidaja/>
            <Raamatupidaja/>
        </div>

        <div className='text-center pt-36 grid grid-cols-1 gap-5'>
          <h1 className='text-[28px] font-medium'>Vastuvõtt <br/> on juba alanud!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis lectus vel quam dignissim Lorem ipsum dolor sit amet.</p>

          <div className='mt-5 px-7'>
            <a href="/" className='btn py-3 px-5 bg-[#01215F] text-white flex items-center justify-center gap-1 rounded-full'>Esita avaldus juba täna <ion-icon name="arrow-forward"></ion-icon></a>
          </div>
        </div>
    </div>
  )
}

export default Professions