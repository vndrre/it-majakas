import React from 'react'

const Raamatupidaja = () => {
  return (
    <div className='font-lora bg-gradient-to-b from-[#090D30] to-[#004E92] text-white py-10 rounded-lg'>
        <div className='text-left grid grid-cols-1 gap-7 px-5'>
            <h1 className='font-medium text-[28px]'>Raamatupidaja</h1>
            <p className='text-[#F5F5F5] text-[16px]'>Erialal õpitakse ettevõtte rahandust, finants-, maksu-, ja juhtimisarvestust. Õpingud lõppevad kutseeksamiga.</p>
        </div>

        <div className='raamatupidaja overflow-hidden bg-no-repeat mt-10 my-10'>

        </div>
        <a href="/">
            <button className='button1 py-2 px-3 ml-[147px]'>ROHKEM INFOT</button>
        </a>
    </div>
  )
}

export default Raamatupidaja