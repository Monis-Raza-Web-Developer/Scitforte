import React from 'react'

import Stack from './Stack';
import Navbar from '../Navbar/Navbar.jsx';




const Hero = (
  
) => {
  
  return (
    <> 

   
  
  

 <div className="relative h-screen w-full ">
      {/* Background Video */}
      <video
        src="/homeweb1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
      ></video>
<Navbar/>

 <div className='flex flex-col justify-center top-1/2 -translate-y-1/2 text-center relative '>
  <div>
<h1 className='md:text-4xl text-2xl  text-blue-900   font-mono font-bold   pb-4  px-2' style={{  fontFamily: "Kanit, sans-serif" }}>
Scitforte Pioneering Tomorrow's Solutions</h1>
<p className=' md:px-20 px-3 md:text-lg text-sm'>We are on a mission to revolutionize the digital landscape with <span className='font-bold'>  cutting-edge software solutions</span> that empower businesses and individuals alike.</p>

  </div>
  <div className='flex justify-center items-center '>
    <img src="hero5.png" alt="" />
  </div>
 </div>

 <div className='absolute bg-white/50   w-[80%] md:h-[30%] h-[50%] md:top-[90%] top-[85%] left-1/2 -translate-x-1/2 rounded-4xl backdrop-blur-3xl shadow-2xl grid md:grid-cols-3 grid-cols-1  items-center text-center'>
  <div className='text-center'><h1 className='md:text-4xl text-3xl' >$850m+</h1>
  <p className=' md:text-lg text-sm'>Portfolio value generated</p></div>
  <div>
    <h1 className='md:text-4xl text-3xl'>150m+</h1>
  <p  className=' md:text-lg text-sm'>Countries service</p>
  </div>
  <div>
    <h1 className='md:text-4xl text-3xl'>1000+</h1>
  <p  className=' md:text-lg text-sm'>Direct Jobs Created</p>
  </div>
 </div>
     </div>
    
  


<Stack/>

<section className='mt-10'>
<div className=' grid text-white grid-cols-2 bg-gradient-to-l  from-blue-600 via-purple-600 to-purple-900'>
<div className='px-20 pt-10'>
  <p className='text-5xl font-black '>Promote your Business through our Expertise</p>
  <p className='text-lg pt-20'>Our experienced team is ready to collaborate with you, bringing our innovative spirit, technical expertise, and unwavering commitment to excellence to your project</p>
</div>
<div className='pt-20'>
  <img src="./promote2.png" height={10} width={400} alt="" />
</div>
</div>
</section>
     
  

    </>
  )
}

export default Hero
