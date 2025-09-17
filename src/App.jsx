import React from 'react'

import 'aos/dist/aos.css';


import 'remixicon/fonts/remixicon.css'

import Footer from './components/Footer/footer';
import AOS from 'aos';
import Heroes from './components/Hero/Heroes';

const App = () => {
  const directions = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out']; 


  return (
    <>
     { AOS.init()}
 
  
 <Heroes/>

    
      
      <Footer/>
    </>
  )
}

export default App
