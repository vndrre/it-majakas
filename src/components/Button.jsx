import React from 'react'

const Button = ({children}) => {
  return (
    <button className='btn py-2 px-5 bg-[#F5821F] text-white flex items-center rounded-full'>{children} </button>
  )
}

export default Button