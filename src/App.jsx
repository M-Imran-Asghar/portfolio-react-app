import { useRef, useState } from 'react'

import './App.css'
import Landing from './Components/Landing'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Sidebar from './Data/Sidebar'


function App() {
  // const contactRef = useRef(null)
  // const scrollToContact =()=>{
  //  if(contactRef.current){
  //   contactRef.current.scrollIntoView({behavior: 'smooth'})
  //  }else{
  //   console.error("contact ref is null");
    
  //  }
  // }
  return (
    <>
    {/* <Sidebar scrollToContact={scrollToContact} /> */}
    <Landing/>
    <About/>
    <Education/>
    <Skills/>
    <Contact />
    </>
  )
}

export default App
