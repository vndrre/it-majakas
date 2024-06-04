import React from 'react'

import Slider from './testimonial-cards/Slider'
import MobileSlider from './testimonial-cards/mobile-slider/MobileSlider'

import pfp1 from '../assets/mobile-profile-pictures/1.png'

const Testimonials = () => {

  const Testimonials = [
    {
      image: pfp1,
      name: 'Nimi Eesnimi',
      profession: 'Lõpetatud eriala vilistlane',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis lectus vel quam dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat hendrerit mauris.",
    },

  ];

  return (
    <div className='bg-[#F5F5F5] py-10 relative overflow-hidden bg-center bg-no-repeat quotemarks'>
      <div className='text-center mt-10'>
          <h1 className='text-[40px] font-semibold font-lora'>Vilistlaste tagasiside</h1>
      </div>

      <div className=''>
        <div className='hidden md:hidden lg:flex'>
          <Slider/>
        </div>

        <div className='hidden py-10'>
          <MobileSlider testimonials={Testimonials} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials