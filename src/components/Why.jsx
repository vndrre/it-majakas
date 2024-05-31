import React from 'react'
import Reason1 from './reasons-cards/Reason1'
import Reason2 from './reasons-cards/Reason2'
import Reason3 from './reasons-cards/Reason3'

const Why = () => {
  return (
    <div className='bg-white font-manrope'>
      <div className='grid gap-10 px-[160px] py-[128px]'>
          <h1 className='text-[32px] font-medium'>Miks tulla õppima?</h1>

          <div className='lg:flex lg:gap-3 md:grid md:grid-cols-1 grid grid-cols-1 md:gap-10 gap-10'>
            <Reason1/>

            <div className='grid grid-cols-1 lg:gap-3 md:gap-10 gap-10'>
              <Reason2/> 
              <Reason3/>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Why