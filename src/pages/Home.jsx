import React from 'react'
import HackathonFilter from '../components/HackathonFilter'
import Features from '../components/LandingPage/Features'
import Hero from '../components/LandingPage/Hero'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Features/>
    <HackathonFilter/>
    </div>
  )
}

export default Home