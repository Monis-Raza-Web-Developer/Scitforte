import React from 'react'
import Stack from './Stack'
import Small from '../Navbar/Small'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';




// import required modules
import { EffectCoverflow , Autoplay } from 'swiper/modules';
import { title, u } from 'framer-motion/client';

const Heroes = () => {


  const cardsservice = [
    {
      title:"Artificial Intelligence Solutions",
      img:"https://media.istockphoto.com/id/2161590787/vector/artificial-intelligence-concept-with-electronic-circuit-vector-electronic-ai-chip-artificial.jpg?s=612x612&w=0&k=20&c=s4r_bXidIpTBH68lYHaS098yGtQDJBTXeo_lpV-mx-4=",
      p:["AI-Driven Automation",
"Predictive Analytics & Forecasting",
"	Natural Language Processing (NLP)",
"AI Agents & Decision Intelligence",
"Machine Learning Model Development",
"Chatbot & Conversational AI Solutions",
]

    },

    {
      title:"3D Modeling & Visualization",
      img:"https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-bananas-in-a-triangle-form-3d-image-png-image_6750882.png",
      p:["Configurators","Animation","Visualization","Product Visualization"]
    },
     {
      title:"Web & Mobile App Development",
      img:"https://www.shutterstock.com/image-vector/web-development-concept-programming-coding-600nw-1064355815.jpg",
      p:[

"Custom apps for web & mobile",
"Cross-platform (iOS, Android, Web)",
"User-friendly responsive design",
"Scalable & integration-ready",
"Support & maintenance"

      ]

    },
     {
      title:"Social Media Marketing",
      img:"https://img.freepik.com/premium-photo/digital-marketing-concept-omnichannel-advertisiment-social-media-isolated-white-background_660230-83682.jpg",
      p:[
        "Logo & brand identity design",
"Page setup & complete handling",
"	Targeted ads & campaigns",
"SEO & content optimization",
"	Digital marketing & growth strategies"

      ]

    },
    

  ]
  const data = [


    {
      img:"./pseb.png",
      text:"OUR AFFILIATES",
      img2:"./pasha.png",
      img3:"./cxo.png"
    },
    
   
    
  ]
  return (
    <>
      <div className="relative h-screen w-full ">
      {/* Background Video */}
      <video
        src="./bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
      ></video>
<Small/>

 <div className='flex flex-col justify-center top-1/2 -translate-y-1/2 text-center relative '>
  <div>
<h1 className='md:text-4xl text-2xl  text-blue-900   font-mono font-bold   pb-4  px-2' style={{  fontFamily: "Kanit, sans-serif" }}>
Innovating Business, Empowering Growth</h1>
<p className=' md:px-20 px-3 md:text-lg text-sm'>From powerful ERP products to custom software services and AI-driven solutions, Scitforte empowers businesses with technology that transforms operations, drives efficiency, and fuels growth</p>

  </div>
  <div className='pt-5 mb-20'>
   

     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        initialSlide={2}
         autoplay={{
          delay: 2500,              // har 2.5s baad slide change hoga
          disableOnInteraction: false, // user click kare tab bhi auto chalta rahe
        }}
        coverflowEffect={{
          rotate: 0,
          
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,

        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide  className="flex justify-center  items-center !w-[180px]  ">
          <img src="./mbl1.png"  className="  object-cover rounded-xl shadow-lg " />
        </SwiperSlide>
        
         <SwiperSlide  className="flex justify-center items-center !w-[180px]  ">
          <img src="./mbl21.png"   className="  object-cover rounded-xl shadow-lg" />
        </SwiperSlide>
        <SwiperSlide  className="flex justify-center items-center !w-[180px] ">
          <img src="./p1.jpg"   className="  object-cover rounded-xl shadow-lg" />
        </SwiperSlide>
       <SwiperSlide  className="flex justify-center items-center !w-[180px] ">
          <img src="./mbl3.webp"   className="  object-cover rounded-xl shadow-lg" />
        </SwiperSlide>
        <SwiperSlide  className="flex justify-center items-center !w-[180px] ">
          <img src="./p6.jpg"  className="  object-cover rounded-xl shadow-lg" />
        </SwiperSlide>
       
      </Swiper>
  </div>
 </div>


     </div>
      <div className=' bg-gradient-to-r from-blue-800 via-purple-700 to-blue-950'>
        <Swiper 
        
         modules={[Autoplay]}
        autoplay={{
          delay: 2000, // har 2 second me slide change hoga
          disableOnInteraction: false, // user interact kare to bhi autoplay continue rahega
        }}
        loop={true}
        className="mySwiper">
        <SwiperSlide className=' '>
          <div className='flex  justify-center py-7'>
            <p className='md:text-4xl text-3xl text-white font-semibold'>OUR AFFILIATES</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' md:py-2 py-5 '>
          <div className='flex items-center justify-center gap-10'>
     <img src="./pasha.png" className='md:w-20 w-15 bg-white rounded-full p-2' alt="" />
       <img src="./pseb.png" className='md:w-20 w-15 bg-white rounded-full p-2' alt="" />
         <img src="./cxo.png" className='md:w-20 w-15 bg-white rounded-full p-2' alt="" />
          </div>
     
        </SwiperSlide>
       
      </Swiper>
      </div>
    
  
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <p className='text-center text-4xl'>Our Services</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
     
      {cardsservice.map((d,index)=>(
      <div className="relative group overflow-hidden rounded-xl shadow-lg"
       key={index}
     data-aos="fade-up"
    data-aos-offset="10"
    data-aos-delay={index * 300}
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"
      >
        <img
          src={d.img}
          alt="Business"
          className="w-full md:h-full h-64  object-cover"
        />
        <div className="
          absolute inset-0 bg-black/60 flex flex-col text-white ps-5 pe-3 justify-center
          translate-x-full group-hover:translate-x-0 
          transition-transform duration-500
        ">
          <h3 className="text-white text-md font-semibold">{d.title}</h3>
           <ul className='list-disc text-[13px] pt-5 px-2'>
            {d.p.map((i,index) =>(

            <li key={index}>{i}</li>
           ))}
          </ul>
        </div>
      </div>
) )}
      

    </div>
  </div>
</section>



<Stack/>


    </>
  )
}

export default Heroes
