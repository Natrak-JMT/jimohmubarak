import  React from 'react'
import './App.css'
import Navbar from '../src/naviagtion section/Navbar.jsx'
import Home from '../src/heropage/Home.jsx'
import About from '../src/Aboutpage/About.jsx'
import Service from './servicespage/Service.jsx'
import Portfolio from './portfoilopage/Portfolio.jsx'
import Testimonial from './testimonial/Testimonial.jsx'
import Contact from './contactpage/Contact.jsx'
function App() {
 

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
           
    </>
  )
}

export default App
