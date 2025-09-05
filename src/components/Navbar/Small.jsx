import React from 'react'

const Small = () => {
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
        
      </div> 
    </>
  )
}

export default Small
