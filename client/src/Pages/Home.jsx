import React from 'react'
import Banner from '../Components/home/Banner'
import Hero from '../Components/home/Hero'
import Features from '../Components/home/Features'
import Testimonial from '../Components/home/Testimonial'
import About from '../Components/home/About'
import Footer from '../Components/home/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Hero/>
      <About/>
      <Features/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home