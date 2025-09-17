import React, { useState } from 'react'

const Small = () => {
  const [nav,setNav] = useState(false);

  const handlenav = ()=>{

    setNav(!nav)
    console.log(nav)

  }
  return (
    <>
     <div className='relative flex justify-between items-center md:px-10 px-5 py-5 '>
        <div>
            <img src="./logo.png" className='md:w-[150px] w-[100px]' alt="" />
        </div>
        <div className=''>
<ul className='md:flex gap-10 text-md  hidden  '>
    <li>Home</li>
    <li>Products</li>
    <li>About</li>
    <li>Service</li>
    <li>Contact</li>
</ul>

        </div>
        <div className='md:hidden flex'>
<i className="ri-menu-3-line text-xl" onClick={handlenav}></i>
        </div>
        
      </div> 
    <div className={`${nav ? 'flex relative bg-amber-500 ' : 'hidden'}`}>
     <ul className=' transform transition-all ease-in duration-1000'>
    <li>Home</li>
    <li>Products</li>
    <li>About</li>
    <li>Service</li>
    <li>Contact</li>
</ul>
        </div>
    </>
  )
}

export default Small
