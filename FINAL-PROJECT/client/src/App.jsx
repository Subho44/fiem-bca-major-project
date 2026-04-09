import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Products from './components/Products'

const App = () => {

  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
  </Routes>
  
  
  
  </BrowserRouter>
  
  
  </>
}

export default App