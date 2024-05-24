import React from 'react'
import Nav from './Nav'
import Button from './Button'

const Landing = () => {
  return (
    <div className='relative overflow-hidden bg-cover bg-no-repeat landing-cover bg-black lg:font-lora md:font-lora font-inter'>
        <Nav/>

        <div className='py-20 px-10 grid grid-cols-1 gap-10'>
            <div className='text-left md:text-center grid grid-cols-1 gap-2 text-white'>
                <p className='text-[20px]'>Sed sollicitudin</p>
                <h1 className='text-[28px] md:text-[56px] font-medium'>Lorem ipsum dolor sit amet</h1>
            </div>
            
            <div className='pt-14 md:pt-7 flex md:justify-center lg:scale-125'>
                <Button>Esita avaldus juba täna <ion-icon name="arrow-forward"></ion-icon></Button>
            </div>
        </div>
    </div>
  )
}

export default Landing