import React from 'react'
import Landing from '../components/Landing'
import Professions from '../components/Professions'
import Why from '../components/Why'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
       <Landing/>
       <Professions/>
       <Why/>
       <Testimonials/>
       <Footer/>
    </div>
  )
}

export default Home