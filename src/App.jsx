import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/LandingPage/Hero'
import Features from './components/LandingPage/Features'
import HackathonFilter from './components/HackathonFilter'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
