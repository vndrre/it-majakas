import React from 'react'

const Tarkvararendaja = () => {
  return (
    <a href='/' className='hover:scale-105 duration-500'>
        <div className='w-full relative overflow-hidden bg-cover bg-no-repeat ta text-white font-manrope'>
        <div className='flex justify-between p-2'>
            <p></p>
            <a href="/">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 34L34 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 14H34V34" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
        </div>

        <div className='py-[128px] px-[32px] pb-[32px] grid gap-[16px]'>
            <h1 className='text-[18px] font-medium'>Noorem tarkvaraarendaja</h1>
            <p className='text-[16px]'>Tarkvaraarendaja erialal keskendutakse uue tarkvara <br/> ja veebilahenduste loomisele, testimisele ning dokumenteerimisele.</p>
            <p></p>
        </div>
        </div>
    </a>
  )
}

export default Tarkvararendaja