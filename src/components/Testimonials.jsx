import React from 'react'
import Swiper from './testimonial-cards/Swiper'

const Testimonials = () => {
  return (
    <div className='bg-[#F5F5F5] p-10'>
        <div className='text-center my-5'>
            <h1 className='text-[28px] font-semibold'>Vilistlaste tagasiside</h1>
        </div>

        <div className='py-20'>
          <Swiper/>
        </div>
    </div>
  )
}

export default Testimonials