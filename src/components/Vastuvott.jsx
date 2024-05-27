import React from 'react'
import Button from './Button'

const Vastuvott = () => {
  return (
    <div className='bg-[#F7F6F6] font-manrope'>
      <div className="grid gap-[64px]">
        <div className='grid gap-[16px] text-center px-[305px] pt-[128px]'>
              <h1 className='text-[48px] font-medium'>Vastuvõtt on juba alanud!</h1>
              <p className='text-[20px] text-[#4D4D4D]'>Alusta oma karjääri IT, raamatupidamise või väikeettevõtluse valdkonnas. Leia parimad õppimisvõimalused ning võta esimene samm oma unistuste tuleviku suunas meie juures.</p>
        </div>

        <a href='/' className='flex justify-center pb-[128px]'>
          <Button>Esita avaldus</Button>
        </a>
      </div>
    </div>
  )
}

export default Vastuvott