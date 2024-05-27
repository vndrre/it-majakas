import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-[#F5821F] hover:bg-[#D7690A] duration-200 text-white px-7 py-3'> {children} </button>
  )
}

export default Button