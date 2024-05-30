import React from 'react'

import Slider from './testimonial-cards/Slider'
import Slider2 from './testimonial-cards/mobile-slider/Slider2'

const Testimonials = () => {
  return (
    <div className='bg-[#F5F5F5] py-10 relative overflow-hidden bg-center bg-no-repeat quotemarks'>
      <div className='text-center mt-10'>
          <h1 className='text-[40px] font-semibold font-lora'>Vilistlaste tagasiside</h1>
      </div>

      <div className=''>
        <div className='hidden md:flex lg:flex'>
          <Slider/>
        </div>

        <div>
          <Slider2/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials