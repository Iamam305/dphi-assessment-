import React from 'react'
import HackathonFilter from '../components/HackathonFilter'
import Features from '../components/LandingPage/Features'
import HackathonList from '../components/LandingPage/HackathonList'
import Hero from '../components/LandingPage/Hero'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Features/>
    {/* <HackathonFilter/> */}
    <HackathonList/>
    </div>
  )
}

export default Home