import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='relative flex justify-between items-center px-20 py-5 '>
        <div>
            <img src="./logo.png" width={200} alt="" />
        </div>
        <div className=''>
<ul className='flex gap-10 text-lg font-medium '>
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

export default Navbar
