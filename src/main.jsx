import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Create from './pages/Create'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />}/>
      <Route path='/create' element={<Create/>}/>
      
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
