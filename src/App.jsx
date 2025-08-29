import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import 'remixicon/fonts/remixicon.css'
import logo from './../public/logo.png';

const App = () => {


  return (
    <>
    <div className='h-screen w-full'>
     <Hero
  color={[0.4, 0.4, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
/>
</div>
   
      
    </>
  )
}

export default App
