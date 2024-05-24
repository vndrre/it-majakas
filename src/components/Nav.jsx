import React from 'react'

import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <div>
        <div className='flex justify-between px-10 py-4'>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Nav