import React from 'react'
import Button from './Button'

const Landing = () => {
  return (
    <div className='bg-[#F7F6F6] md:p-20 font-manrope'>
        <div className='grid grid-cols-1 gap-10 lg:my-36'>
            <div className='grid gap-5 lg:px-0 px-10'>
                <h1 className="md:text-[64px] text-[32px] font-medium">Sinu tee tulevikutehnoloogiatesse!</h1>
                <p className='md:text-[20px] text-[#4D4D4D] leading-9'>Alusta oma karjääri IT, raamatupidamise või väikeettevõtluse valdkonnas. 
                    Leia parimad <br/> õppimisvõimalused ning võta esimene samm oma unistuste tuleviku suunas meie juures.
                </p>
            </div>

            <div className='lg:px-0 px-10'>
                <Button>Alusta oma teekonda</Button>
            </div>
        </div>
    </div>
  )
}

export default Landing