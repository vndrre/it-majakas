import React from 'react'

import Nav from '../components/Nav'
import Landing from '../components/Landing'
import Professions from '../components/Professions'
import Vastuvott from '../components/Vastuvott'
import Why from '../components/Why'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Landing/>
      <Professions/>
      <Vastuvott/>
      <Why/>
      <Footer/>
    </div>
  )
}

export default Home