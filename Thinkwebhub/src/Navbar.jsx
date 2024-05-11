import React from 'react'
import thinkweb from './assets/thinkweb.png'
const Navbar = () => {
  const data = ["Home" , "About Us" , "Services" , "Porfolio" , "Blog" , "Contact Us"];
  return (
    
      <div className='w-full h-20 md:flex lg:flex items-center bg-transparent justify-around absolute top-0 left-0'>

        <img className='h-8' src= {thinkweb} />

        <div className='hidden lg:flex items-center justify-evenly '>
          {
            data.map((items,index) => (
              <div key={index} className='px-10 pt-4 cursor-pointer text-md duration-500 ease-in-out   hover:text-[#F05742] text-white'>{items}</div>
            ))
          }
        </div>

        <div className='flex text-xs cursor-pointer lg:text-xl mt-3 w-min lg:w-auto text-white duration-500 ease-in-out hover:text-[#F05742] hover:border-[#F05742] border-2 rounded-full p-4'>
          Get A Quote
        </div>


      </div>
    
  )
}

export default Navbar
