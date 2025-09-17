import React from 'react'
import { Building2, Home, Hospital, Leaf, Layers, Factory, School, Projector, Paperclip, Notebook, NotepadText, Tractor, Package, Shield, ShieldUser, LocateFixed, ConciergeBell, Handshake } from "lucide-react";
import "remixicon/fonts/remixicon.css";
import { Device } from "@codinix/device-mockup";







// import required modules
import { EffectCoverflow , Autoplay } from 'swiper/modules';


const Stack = () => {

const products = [
  {
    title: "PAMS",

    desc: "Project & Audit Management System",
    icon: <NotepadText className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "SMART REMS",
    desc: "Real Estate Management System",
    icon: <Home className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "SMART CARE",
    desc: "Hospital Management System",
    icon: <Hospital className="h-6 w-6 text-red-500" />,
  },
  {
    title: "ESGENIUS",
    desc: "Environmental, Social and Governance Reporting Tool",
    icon: <Leaf className="h-6 w-6 text-green-500" />,
  },
  {
    title: "OSPREY EDU",
     img:"./edu.png",
    desc: "Academic Management System",
    icon: <School className="h-6 w-6 text-pink-500" />,
  },
  {
    title: "OSPREY ERP",
    img:"./erps1.png",
    desc: "Enterprise Resource Planning System",
    icon: <Tractor className="h-6 w-6 text-yellow-500" />,
    
  },
    {
    title: "AGRIFATT",
    img:"/agri1.png",
    desc: "Fatting & Procurement Management System",
    icon: <Package className="h-6 w-6 text-gray-500" />,
  },
    {
    title: "HSE MANAGER",
    desc: "Health Safety & Environment Management System",
    icon: <ShieldUser className="h-6 w-6 text-blue-500" />,
  },
    {
    title: "SMART TRACK",
    img:"/ats1.png",
    desc: "Auto-Tracking Desktop Application",
    icon: <LocateFixed  className="h-6 w-6 text-black-500" />,
  },
    {
    title: "VMS",
       img:"/vms.png",
    desc: "Visitor Management System",
    icon: <Handshake className="h-6 w-6 text-orange-500" />,
  },
];

  const skills = [
  {
    title: "React",
    desc: "(UI Library)",
    iconClass: "ri-reactjs-fill text-3xl text-blue-700",
    borderClass: "border-l-blue-700",
  },
  {
    title: "Python",
    desc: "(Full Stack)",
    iconClass: "devicon-python-plain colored text-3xl",
    borderClass: "border-l-yellow-400",
  },
  {
    title: "PHP",
    desc: "(Backend Language)",
    iconClass: "ri-php-line text-3xl",
    borderClass: "border-l-black",
  },
  {
    title: "Open Cv",
    desc: "(UI Library)",
    iconClass: "devicon-opencv-plain colored text-3xl",
    borderClass: "border-l-blue-500",
  },
  {
    title: "Laravel",
    desc: "(UI Library)",
    iconClass: "devicon-laravel-original colored text-3xl",
    borderClass: "border-l-red-600",
  },
  {
    title: "Node js",
    desc: "(UI Library)",
    iconClass: "ri-nodejs-fill text-3xl text-green-700",
    borderClass: "border-l-green-700",
  },
  {
    title: "Angular",
    desc: "(UI Library)",
    iconClass: "devicon-angularjs-plain colored text-3xl ",
    borderClass: "border-l-red-700",
  },
  {
    title: "Flutter",
    desc: "(UI Library)",
    iconClass: "ri-flutter-fill text-3xl text-blue-400",
    borderClass: "border-l-blue-400",
  },
   {
    title: "Bootstrap",
    desc: "(UI Library)",
    iconClass: "devicon-bootstrap-plain colored text-3xl ",
    borderClass: "border-l-purple-700",
  },
  {
    title: "Asp .Net Core",
    desc: "(UI Library)",
    iconClass: "devicon-dotnetcore-plain colored text-3xl ",
    borderClass: "border-l-purple-800",
  },
   {
    title: "Mongo DB",
    desc: "(UI Library)",
    iconClass: "devicon-mongodb-plain colored text-3xl ",
    borderClass: "border-l-green-600",
  },
  {
    title: "MS Sql Server",
    desc: "(UI Library)",
    iconClass: "devicon-microsoftsqlserver-plain colored text-3xl ",
    borderClass: "border-l-red-600",
  },
];

   const directions = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out']; 
  return (
    <>

<section className="clients ">
  <div className=" mx-auto md:px-25 bg-blue-900 py-10 text-white">
    <div className="grid md:grid-cols-5 grid-cols-1 md:gap-12  gap-y-10 items-center justify-center">
      
      {/* Left side - heading and text */} 
      <div className='col-span-2 '>
        <h1 className="text-4xl font-semibold md:ps-0 ps-10   ">Our Clients</h1>
        <p className="md:pt-5 pt-5 text-lg text-white leading-relaxed md:p-0 ps-12  pe-2  ">
          We are proud to be trusted by leading organizations across Pakistan
          and beyond. Our collaborations reflect innovation, growth, and
          meaningful partnerships that shape the future of technology.
        </p>
      </div>

      {/* Right side - logos grid */}
      <div className= "col-span-3 grid grid-cols-3 md:grid-cols-6 gap-5  gap-x-10  md:px-0 px-3 content-center items-center">
        
         <img
          className=" bg-white rounded-full object-contain mx-auto"
          src="./cl1.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl2.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl3.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl4.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full p-2 object-contain mx-auto"
          src="./cl5.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full    object-contain mx-auto"
          src="./cl6.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl7.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl8.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl9.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full p-2 object-contain mx-auto"
          src="./cl10.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl11.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl12.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl13.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl14.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full p-1  object-contain mx-auto"
          src="./cl15.png"
          alt="Pasha"
        />
         <img
          className="bg-white rounded-full  object-contain mx-auto"
          src="./cl16.png"
          alt="Pasha"
        />
      </div>
    </div>
  </div>
</section>


   <section
      id="products"
      className="grid md:grid-cols-2 grid-cols-1 py-20 md:px-10  items-center gap-2  "
    >
   
      <div className=" md:ps-10  ">
        <h2 className="text-3xl md:text-4xl font-bold  px-5">
          We Help Businesses To Grow & Succeed Faster
        </h2>
        <p className="mt-6 md:text-lg text-md text-gray-600 max-w-2xl mx-auto px-5">
          We offer a suite of integrated software solutions including IMS, REMS,
          HMS, ESG, IBS and ERP – empowering businesses to streamline
          operations, enhance customer relationships, and optimize inventory
          management.
        </p>
        <ul className='mt-5'>
          {products.map((u,index)=>(
          <li key={index} className='p-2 text-md flex gap-x-4'> {u.icon}  {u.desc}</li>
          ))}
        </ul>
        </div>
        <div>

     
    
<div class="relative mx-auto border-[10px]  border-gray-600 rounded-t-xl h-[200px] max-w-[350px] md:h-[320px] md:max-w-[560px] 
    shadow-lg">
 
   
    <div class="rounded-md overflow-hidden h-[176px] md:h-[296px] 
         shadow-inner">
        <img src="./d1.PNG" 
             class="h-full w-full object-cover" />
    </div>
</div>


<div class="relative mx-auto bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 
    rounded-b-xl rounded-t-sm h-[20px] max-w-[380px] md:h-[24px] md:max-w-[600px] shadow-lg">

    <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl 
        w-[60px] h-[6px] md:w-[100px] md:h-[8px] 
        bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 shadow"></div>
</div>




   



   
      </div>
    </section> 




   <section className='mt-10'>
<div className=' grid text-white md:grid-cols-2 grid-cols-1 bg-gradient-to-l   from-blue-600 via-purple-600 to-purple-900  '>
<div className='md:px-20 px-10 pt-10'>
  <p className='md:text-4xl text-3xl font-black '>Promote Your Business Through Our Expertise</p>
  <p className='md:text-lg text-md md:pt-10 pt-5'>Our experienced team is ready to collaborate with you, bringing our innovative spirit, technical expertise, and unwavering commitment to excellence to your project</p>

  <button className='bg-white text-md text-blue-900 mt-5 py-3 px-5 rounded-md font-semibold tracking-wider'>Contact Us</button>
</div>
<div className='pt-20  md:flex hidden'>
  <img src="./promote2.png"  className='md:h-110  '  alt="" />
</div>
</div>
</section> 


   <div className='md:px-10 overflow-hidden'>
       <section className=' w-full  mt-20  grid md:grid-cols-2 grid-cols-1 gap-10 items-center mb-20'>
<div className='  ps-10'  data-aos="fade-left" // 👈 dynamic direction
      data-aos-offset="100"
      data-aos-delay="50" // 👈 slightly staggered delay
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom">
  <h1 className='md:text-4xl text-3xl font-bold '>Powering <span className='text-blue-900'>Innovation</span> With The Right Technology <span  className='text-blue-900'>Stack</span> </h1>
  <p className='pt-10 text-lg'>Build <span className='text-blue-900 font-bold'>scalable , high performance </span>
  
  with ctting edge tools and frameworks.</p>

  <p className='pt-10 text-md' >From UI Libararies to backend frameworks, we carefully choose technologies that ensure <span className='text-blue-900 font-bold'>stability,security</span> and <span className='text-blue-900 font-bold'>smooth user experiences</span></p>

  <p className='mt-5 py-2 px-4 bg-blue-900 w-fit text-white'>Explore more</p>

</div>
<div className=' md:grid md:grid-cols-2 md:px-0 px-10  md:mt-0 mt-10   md:gap-x-10 rounded-2xl   gap-y-5 '> 






 


   {skills.map((skill, index) => (
    <div
      key={index}
      className={`rounded-lg backdrop-blur-lg mt-4 border-l-6 bg-white/10 ${skill.borderClass} shadow-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ps-5 py-2 `}
   
    data-aos="fade-up"
    data-aos-offset="20"
    data-aos-delay="10"
    data-aos-duration="400"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"
   >
      <p>
        <i className={skill.iconClass}></i>{" "}
        <span className="text-lg">{skill.title}</span>
      </p>
     
    </div>
  ))} 








</div>

   </section>
   </div>
    </>
  )
}

export default Stack
