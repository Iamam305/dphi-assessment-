import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/LandingPage/Hero'
import Features from './components/LandingPage/Features'
import HackathonFilter from './components/HackathonFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <HackathonFilter/>
    </>
  )
}

export default App
