import React from 'react'
import Navbar from './Navbar'
import HeroBanner from './HeroBanner'
import Categories from './Categories'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroBanner></HeroBanner>
        <Categories></Categories>
        <Footer></Footer>
    </div>
  )
}

export default Home
