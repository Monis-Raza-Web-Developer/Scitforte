import React from 'react'


const Stack = () => {

  const skills = [
  {
    title: "React",
    desc: "(UI Library)",
    iconClass: "ri-reactjs-fill text-3xl text-blue-700",
    borderClass: "border-l-blue-800",
  },
  {
    title: "Next js",
    desc: "(Full Stack)",
    iconClass: "ri-nextjs-line text-3xl text-red-700",
    borderClass: "border-l-red-800",
  },
  {
    title: "PHP",
    desc: "(Backend Language)",
    iconClass: "ri-php-line text-3xl",
    borderClass: "border-l-black",
  },
  {
    title: "Angular",
    desc: "(UI Library)",
    iconClass: "ri-angularjs-line text-3xl text-purple-700",
    borderClass: "border-l-purple-700",
  },
  {
    title: "Wordpress",
    desc: "(UI Library)",
    iconClass: "ri-wordpress-fill text-3xl text-blue-500",
    borderClass: "border-l-blue-500",
  },
  {
    title: "Node js",
    desc: "(UI Library)",
    iconClass: "ri-nodejs-fill text-3xl text-yellow-700",
    borderClass: "border-l-yellow-700",
  },
  {
    title: "Figma",
    desc: "(UI Library)",
    iconClass: "ri-figma-fill text-3xl text-orange-500",
    borderClass: "border-l-orange-500",
  },
  {
    title: "Flutter",
    desc: "(UI Library)",
    iconClass: "ri-flutter-fill text-3xl text-blue-400",
    borderClass: "border-l-blue-400",
  },
];

   const directions = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out']; 
  return (
    <div className='px-20'>
       <section className=' w-full  md:mt-90 mt-100 grid md:grid-cols-2 grid-cols-1 gap-x-20 items-center mb-20'>
<div className='  ps-5'  data-aos="fade-left" // 👈 dynamic direction
      data-aos-offset="100"
      data-aos-delay="50" // 👈 slightly staggered delay
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom">
  <h1 className='md:text-5xl text-3xl font-bold '>Powering <span className='text-blue-700'>Innovation</span> With The Right Technology <span  className='text-blue-700'>Stack</span> </h1>
  <p className='pt-10 text-lg'>Build <span className='text-blue-700 font-bold'>scalable , high performance </span>
  
  with ctting edge tools and frameworks.</p>

  <p className='pt-10 text-lg' >From UI Libararies to backend frameworks, we carefully choose technologies that ensure <span className='text-blue-700 font-bold'>stability,security</span> and <span className='text-blue-700 font-bold'>smooth user experiences</span></p>

  <p className='mt-5 py-2 px-4 bg-blue-600 w-fit text-white'>Explore more</p>

</div>
<div className=' grid grid-cols-2   gap-x-25  gap-y-10'> 

  {skills.map((skill, index) => (
    <div
      key={index}
      className={`rounded-lg backdrop-blur-lg border-l-6 bg-white/10 ${skill.borderClass} shadow-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ps-5 py-2`}
   
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
      <p className="flex justify-center text-sm">{skill.desc}</p>
    </div>
  ))}








</div>

   </section>
    </div>
  )
}

export default Stack
