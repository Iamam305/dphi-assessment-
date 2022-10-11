import React from 'react'

import Features from '../components/LandingPage/Features'
import HackathonList from '../components/LandingPage/HackathonList'
import Hero from '../components/LandingPage/Hero'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Features/>
    <HackathonList/>
    </div>
  )
}

export default Home