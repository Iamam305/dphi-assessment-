import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Create from './pages/Create'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />}>

      <Route index element={<Home />}/>
      <Route path='/create' element={<Create/>}/>      
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
