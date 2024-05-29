import React from 'react'

import Slider from './testimonial-cards/Slider'

const Testimonials = () => {
  return (
    <div className='bg-[#F5F5F5] py-10 relative overflow-hidden bg-center bg-no-repeat quotemarks'>
      <div className='text-center mt-10'>
          <h1 className='text-[40px] font-semibold font-lora'>Vilistlaste tagasiside</h1>
      </div>

      <div className=''>
        <div className='hidden md:hidden lg:flex'>
          <Slider/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials