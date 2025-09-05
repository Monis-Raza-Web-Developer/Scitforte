import React from 'react'
import { Building2, Home, Hospital, Leaf, Layers, Factory } from "lucide-react";
import "remixicon/fonts/remixicon.css";
import 'aos/dist/aos.css';

import Hero from './components/Hero/Hero'
import 'remixicon/fonts/remixicon.css'

import Footer from './components/Footer/footer';
import AOS from 'aos';

const App = () => {
  const directions = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out']; 
const products = [
  {
    title: "IMS",
    desc: "Institute Management System",
    icon: <Building2 className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "REMS",
    desc: "Real Estate Management System",
    icon: <Home className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "HMS",
    desc: "Hospital Management System",
    icon: <Hospital className="h-6 w-6 text-red-500" />,
  },
  {
    title: "ESG",
    desc: "Environmental, Social and Governance",
    icon: <Leaf className="h-6 w-6 text-green-500" />,
  },
  {
    title: "IBS",
    desc: "Integrated Business Suite",
    icon: <Layers className="h-6 w-6 text-pink-500" />,
  },
  {
    title: "ERP",
    desc: "Enterprise Resource Planning",
    icon: <Factory className="h-6 w-6 text-yellow-500" />,
  },
];

  return (
    <>
     { AOS.init()}
   <Hero/>
  
 

   <section
      id="products"
      className="grid grid-cols-2 py-20 px-10 items-center gap-2 "
    >
   
      <div className=" ps-20  ">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          We help businesses to grow & succeed faster
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a suite of integrated software solutions including IMS, REMS,
          HMS, ESG, IBS and ERP – empowering businesses to streamline
          operations, enhance customer relationships, and optimize inventory
          management.
        </p>
        <ul className='mt-5'>
          {products.map((u,index)=>(
          <li key={index} className='p-2 text-md'><i className="ri-check-double-fill"></i>  {u.desc}</li>
          ))}
        </ul>
        </div>
        <div>

     
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5  px-20">
          {products.map((product, index) => (
            <div
              key={index}
              className=" rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
           
         
        data-aos={directions[index % directions.length]} // 👈 dynamic direction
      data-aos-offset="100"
      data-aos-delay={`${index * 100}`} // 👈 slightly staggered delay
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom">
              <div className="flex flex-col p-4 space-y-2 ">
                {product.icon}
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-slate-500">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>  
      
      <Footer/>
    </>
  )
}

export default App
