import React from 'react'
import { FileWarning,          // Material Topics
  FileText,     // Incident Reporting
      // Safety and Internal Audit
  AlertTriangle,   // Risk Assessment
   // Training Management
  ClipboardCheck,  // Compliance Tracking
  Fuel,            // Fuel & Energy Usage
  Droplets,        // Water Management
  Siren,           // Emergency
           // Vehicle
  Recycle,         // Waste Management
  Sprout,          // Soil Management
  MessageSquare,   // Complaint Handling
  UtensilsCrossed ,FileBarChart, Settings,  Building, Wallet,Scissors,Skull, Syringe, Map ,Scale,Truck,ShieldAlert,BarChart3, Fingerprint, Tag,LockKeyhole,Clock, QrCode,Bell,Calculator,FileCheck,Users,BookOpen,ClipboardList,UserPlus,Ticket, GraduationCap,Banknote,UserCog , Home,Handshake, Wifi,Workflow , Star,Hospital, Leaf, Layers, LockOpen, School,LogIn, Globe, Activity, Calendar, Camera, Projector, Paperclip, Notebook, NotepadText, Tractor, Package, Shield, ShieldUser, LocateFixed,ShieldCheck,ClipboardPen  } from "lucide-react";
import "remixicon/fonts/remixicon.css";

import { motion, AnimatePresence } from "framer-motion";


import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination , Navigation } from 'swiper/modules';





// import required modules
import { EffectCoverflow , Autoplay } from 'swiper/modules';


const Stack = () => {
const [activeIndex, setActiveIndex] = useState(0);
 

const nextSlide = () => {
    if (activeIndex < product.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    // agar last slide hai to kuch bhi na ho
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    // agar first slide hai to kuch bhi na ho
  };


 const product = [
   {
    id: 2,
    logo: "/erps1.png",
    heading: "Enterprise resource plainning",
    subheading: "( OSPPREY ERP )",
    description:
      "All in one Business Management, Seamlessly combine essential functions for modern businesses",
    features: [
      {
        icon: <ClipboardList className="w-5 h-5 text-red-900" />,
        title: "Project Management & CRM",
        text: "Enables project planning,lead management,financial tracking, HR Management and more.",
      },
      {
        icon: <Ticket className="w-5 h-5 text-red-900" />,
        title: "Ticket and IT Management",
        text: "Integration with Outlook, emails, calenders, Teams and Google authentication,Power BI, and Salesforce",
      },
      {
        icon: <UserCog  className="w-5 h-5 text-red-900" />,
        title: "User Roles & Acces Management",
        text: "Drives Efficiency productivity and seamless data management",
      },
      {
        icon: <Handshake className="w-5 h-5 text-red-900" />,
        title: "Comercial Agrements & Performance Management",
        text: "Enables project planning,lead management,financial tracking, HR Management and more.",
      },
      {
        icon: <Banknote className="w-5 h-5 text-red-900" />,
        title: "Finance Accounting & HRM",
        text: "Integration with Outlook, emails, calenders, Teams and Google authentication,Power BI, and Salesforce",
      },
       {
        icon: <UserPlus className="w-5 h-5 text-red-900" />,
        title: "Recruitment To Seperation (FnF) Processes",
        text: "Integration with Outlook, emails, calenders, Teams and Google authentication,Power BI, and Salesforce",
      },
      {
        icon: < GraduationCap className="w-5 h-5 text-red-900" />,
        title: "Training & Markrting campaigns",
        text: "Drives Efficiency productivity and seamless data management",
      },
    ],
    images: [
      { src: "/d3.jpg", type: "main" },
      { src: "/d4.jpg", type: "small", position: "bottom-right" },
    ],
  },
  {
    id: 7,
    logo: "",
    heading: "Environmental Sustainability & Governance",
    subheading: "( ESG )",
    description:
      "Digital registration check-in/out and ID scaning. Smart allocation based on availability.",
    features: [
      {
        icon: <Settings className="w-5 h-5 text-red-700" />,
        title: "Core Set-up",
        text: "Logs login time session duration and logout time",
      },
      {
        icon: <Building className="w-5 h-5 text-red-700" />,
        title: "Organizaional Information",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <Scale className="w-5 h-5 text-red-700" />,
        title: "Governance & Compliance",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <Layers className="w-5 h-5 text-red-700" />,
        title: "Material Topics",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <FileText className="w-5 h-5 text-red-700" />,
        title: "Built-In Templates",
        text: "Captures users at set intervals for transparent monitoring",
      },
      
    ],
    images: [
      { src: "/d13.PNG", type: "main" },
      { src: "./d14.PNG", type: "small", position: "bottom-right" },
    ],
  },
   {
    id: 4,
    logo: "",
    heading: "health and safety environment",
    subheading: "( HSE )",
    description:
      "Manages Health Safety and environmental compliance. Incident tracking ,risk assesment, safety audits training",
    features: [
      {
        icon: < FileWarning className="w-5 h-5 text-blue-900" />,
        title: "Incident Reporting",
        text: "Logs login time session duration and logout time",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-blue-900" />,
        title: "Safety and Internal Audit",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <AlertTriangle className="w-5 h-5 text-blue-900" />,
        title: "Risk Assesment",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <GraduationCap className="w-5 h-5 text-blue-900" />,
        title: "Training Management",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <ClipboardCheck className="w-5 h-5 text-blue-900" />,
        title: "Compliance Tracking",
        text: "Captures users at set intervals for transparent monitoring",
      },
      {
        icon: <Fuel className="w-5 h-5 text-blue-900" />,
        title: "Fuel & Energy Usage",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <Droplets className="w-5 h-5 text-blue-900" />,
        title: "Water Management ",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <Siren className="w-5 h-5 text-blue-900" />,
        title: "Emergency",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: < Truck className="w-5 h-5 text-blue-900" />,
        title: "Vehicle",
        text: "Captures users at set intervals for transparent monitoring",
      },
       {
        icon: <Recycle className="w-5 h-5 text-blue-900" />,
        title: "Waste Management",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: < Sprout className="w-5 h-5 text-blue-900" />,
        title: "Soil Management",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <MessageSquare className="w-5 h-5 text-blue-900" />,
        title: "Complaint Handling",
        text: "Captures users at set intervals for transparent monitoring",
      },
       {
        icon: < UtensilsCrossed className="w-5 h-5 text-blue-900" />,
        title: "Food & Safety Hazards",
        text: "Captures users at set intervals for transparent monitoring",
      },
    ],
    images: [
      { src: "/d7.jpg", type: "main" },
      { src: "/d8.jpg", type: "small", position: "bottom-right" },
    ],
  },
  {
    id: 1,
    logo: "/ats1.png",
    heading: "Autotracking System",
    subheading: "( SMARTTRACK )",
    description:
      "A simple desktop application designed to enhance organizational productivity by providing clear insights into user activity",
    features: [
      {
        icon: <LogIn className="w-5 h-5 text-blue-900" />,
        title: "User login Tracking",
        text: "Logs login time session duration and logout time",
      },
      {
        icon: <Globe className="w-5 h-5 text-blue-900" />,
        title: "Browser And Website Monitoring",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <Activity className="w-5 h-5 text-blue-900" />,
        title: "Activity Logs and Reports",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <Calendar className="w-5 h-5 text-blue-900" />,
        title: "Daily/Weekly Reports",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <Camera className="w-5 h-5 text-blue-900" />,
        title: "Screenshot Capturing",
        text: "Captures users at set intervals for transparent monitoring",
      },
    ],
    images: [
      { src: "/d1.PNG", type: "main" },
      { src: "/d2.png", type: "small", position: "bottom-right" },
    ],
  },


  
  

  

  
  
   {
    id: 6,
    logo: "/vms.png",
    heading: "Visitor Management System",
    subheading: "( VISIMEET )",
    description:
      "Digital registration check-in/out and ID scaning. Smart allocation based on availability.",
    features: [
      {
        icon: <Globe className="w-5 h-5 text-red-700" />,
        title: "Multi-tenant & multi-location support",
        text: "Logs login time session duration and logout time",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-red-700" />,
        title: "User roles & Permission Controls",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <ClipboardPen className="w-5 h-5 text-red-700" />,
        title: "Visitor Pre-registration & walk-in registration",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <Bell className="w-5 h-5 text-red-700" />,
        title: "Host Approval system with realtime notifications",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <QrCode className="w-5 h-5 text-red-700" />,
        title: "QR code-based check-in/check-out",
        text: "Captures users at set intervals for transparent monitoring",
      },
      {
        icon: <Clock className="w-5 h-5 text-red-700" />,
        title: "Receptionist and shift management",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <LockKeyhole className="w-5 h-5 text-red-700" />,
        title: "Acces control & Parking Management",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <Package className="w-5 h-5 text-red-700" />,
        title: "Visitor & Parcel tracking",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <Fingerprint className="w-5 h-5 text-red-700" />,
        title: "Security clearence workflows",
        text: "Captures users at set intervals for transparent monitoring",
      }
      ,
      {
        icon: <BarChart3 className="w-5 h-5 text-red-700" />,
        title: "Audit logs, analytics & reporting",
        text: "Captures users at set intervals for transparent monitoring",
      }
    ],
    images: [
      { src: "/d12.jpg", type: "main" },
      { src: "./d11.jpg", type: "small", position: "bottom-right" },
    ],
  },
   {
    id: 5,
    logo: "/edu.png",
    heading: "Academic Management System",
    subheading: "( OSPREY EDU )",
    description:
      "Manages universities, schools and institutes from admission to graduation. Role based Acces &  multilingual Support",
    features: [
      {
        icon: <BookOpen className="w-5 h-5 text-blue-500" />,
        title: "Academic Management",
        text: "Logs login time session duration and logout time",
      },
      {
        icon: <Users className="w-5 h-5 text-blue-500" />,
        title: "Student Management",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <FileCheck className="w-5 h-5 text-blue-500" />,
        title: "Examination & Results",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <UserCog className="w-5 h-5 text-blue-500" />,
        title: "HR & Staff Management",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <Calculator className="w-5 h-5 text-blue-500" />,
        title: "Finance & Accounting",
        text: "Captures users at set intervals for transparent monitoring",
      }
    ],
    images: [
      { src: "/d9.png", type: "main" },
      { src: "/d10.png", type: "small", position: "bottom-right" },
    ],
  },
  {
    id: 3,
    logo: "/agri1.png",
    heading: "faetining erp",
    subheading: "( AGRIFATT )",
    description:
      "Streamlines livestock fattening operation and inventory from start to finish",
    features: [
      {
        icon: <Tag className="w-5 h-5 text-green-900" />,
        title: "Animal Tagging & Traceability",
        text: "Logs login time session duration and logout time",
      },
      {
        icon: <ShieldAlert className="w-5 h-5 text-green-900" />,
        title: "Quarantine Managemen & livestock",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <Truck className="w-5 h-5 text-green-900" />,
        title: "Unloading",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <Scale className="w-5 h-5 text-green-900" />,
        title: "Weight Monitoring",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <Hospital className="w-5 h-5 text-green-900" />,
        title: "Hospitals visits & Management",
        text: "Captures users at set intervals for transparent monitoring",
      },
      {
        icon: < Map className="w-5 h-5 text-green-900" />,
        title: "Barn & Lot Allocations",
        text: "Track browser used, websites visited and time spent on each site",
      },
      {
        icon: <Syringe className="w-5 h-5 text-green-900" />,
        title: "Feed formulaion & vaccination",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <Skull className="w-5 h-5 text-green-900" />,
        title: "Mortality Recording",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <Scissors className="w-5 h-5 text-green-900" />,
        title: "Slaughters & Yield Management",
        text: "Captures users at set intervals for transparent monitoring",
      },
       {
        icon: <Wallet className="w-5 h-5 text-green-900" />,
        title: "Expense Tracking",
        text: "Real time activity logging with timestamps and duration data",
      },
      {
        icon: <Workflow className="w-5 h-5 text-green-900" />,
        title: "Procurement Workflow (PR to PO)",
        text: "Auto-generated summaries highlighting productive vs. unproductive usage",
      },
      {
        icon: <FileBarChart className="w-5 h-5 text-green-900" />,
        title: "Reporting & Analytics",
        text: "Captures users at set intervals for transparent monitoring",
      },
    ],
    images: [
      { src: "/d5.png", type: "main" },
      { src: "/d6.jpg", type: "small", position: "bottom-right" },
    ],
  },
  
  
 
  // agar future m koi aur product add krna ho to isi array m object push krdo
];


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
  className="grid md:grid-cols-2 grid-cols-1 py-10 md:ps-10 items-center overflow-hidden"
>
  {/* Left Side - Content (Linked with activeIndex) */}
  <div className="md:ps-10 px-5">
    <img src={product[activeIndex].logo} className="ps-2 w-40" alt="" />

    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      key={product[activeIndex].heading} // re-animate on change
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-3xl font-bold pt-2 uppercase text-gray-600 flex items-center"
    >
      {product[activeIndex].heading}
    </motion.h2>

    <h2 className="font-bold text-2xl text-gray-600">
      {product[activeIndex].subheading}
    </h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={product[activeIndex].description}
      transition={{ delay: 0.3 }}
      className="mt-6 pb-5 text-md text-gray-600 max-w-2xl mx-auto"
    >
      {product[activeIndex].description}
    </motion.p>

    {/* Features */}
    {product[activeIndex].features.map((item, i) => (
      <motion.div key={i} className="mt-2 flex items-center"
       initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }}>
        {item.icon}
        <div className="ps-3">
          <p className="text-gray-600 font-bold">{item.title}</p>
         
        </div>
      </motion.div>
    ))}
  </div>

 

 



<div className="relative w-full flex justify-center items-center px-10 ">
  <div className="relative w-[80%] min-h-[300px] flex justify-center items-center ">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        className="relative w-full"
      >
        {/* Main Image */}
        {product[activeIndex].images
          .filter((img) => img.type === "main")
          .map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt={`main-${activeIndex}-${i}`}
              className="rounded-xl shadow-lg object-cover w-full relative z-10"
              whileHover={{ scale: 1.02 }}
            />
          ))}

        {/* Small Image */}
        {product[activeIndex].images
          .filter((img) => img.type === "small")
          .map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt={`small-${activeIndex}-${i}`}
              className="absolute -bottom-10 -right-10 w-[60%] rounded-lg shadow-md z-20"
              whileHover={{ scale: 1.05 }}
            />
          ))}
      </motion.div>
    </AnimatePresence>
  </div>
 

 <div className="absolute md:-bottom-18 -bottom-10  flex justify-center items-center gap-4 mt-6">
  <button
    onClick={prevSlide}
    disabled={activeIndex === 0}
    className={`p-3  shadow ${
      activeIndex === 0
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
    }`}
  >
    ◀
  </button>
  <button
    onClick={nextSlide}
    disabled={activeIndex === product.length - 1}
    className={`p-3 shadow ${
      activeIndex === product.length - 1
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
    }`}
  >
    ▶
  </button>
</div>
</div>

{/* Buttons ko parent ke bahar nikal lo */}




 





 
 </section>



 

    







   <section className='mt-10 '>
<div className=' grid text-white md:grid-cols-2 grid-cols-1 bg-gradient-to-l   from-blue-600 via-purple-600 to-purple-900   '>
<div className='md:px-20 px-10 py-10 '>
  <p className='md:text-4xl text-3xl font-black '>Promote Your Business Through Our Expertise</p>
  <p className='md:text-lg text-md md:pt-10 pt-5'>Our experienced team is ready to collaborate with you, bringing our innovative spirit, technical expertise, and unwavering commitment to excellence to your project</p>

  <button className='bg-white text-md text-blue-900 mt-5 py-3 px-5 rounded-md font-semibold tracking-wider'>Contact Us</button>
</div>
<div className='  md:flex pt-20 items-end hidden'>
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
      className={` flex items-center rounded-lg backdrop-blur-lg mt-4 border-l-6 bg-white/10 ${skill.borderClass} shadow-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 px-3 py-2 `}
   
    data-aos="fade-up"
    data-aos-offset="20"
    data-aos-delay="10"
    data-aos-duration="400"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"
   >
      <p className=''>
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
