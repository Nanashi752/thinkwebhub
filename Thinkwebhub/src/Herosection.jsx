import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Herosection = () => {
  return (
    <div className='w-full h-[50rem] z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 from-0% to-black to-45%'>
        <div className='w-full  h-screen tracking-tight  flex justify-center items-center flex-col text-white text-8xl '>
            <div className='text-zinc-200 font-sans tracking-normal font-light text-5xl mb-6'>Crafting Your</div>
            <div className='font-semibold'>
                Web Destiny With
            </div>
            <div className='flex font-semibold'>Stunning <div className='text-[#F05742] font-bold px-2'> Designs</div>
            </div>
            <div className='text-2xl tracking-normal mt-6 text-zinc-500 '>We are a crew of builders, designers & investors building disruptive 
            </div>
            <div className='text-2xl tracking-normal text-zinc-500'>products in Web3 and empowering founders along the way</div>
            <div className='tracking-normal duration-500 ease-in-out cursor-pointer flex items-center justify-between text-xs lg:text-xl mt-7  w-40 lg:w-auto text-white hover:text-[#F05742] hover:border-[#F05742] border-2 rounded-full p-4'>
              Get A Quote 
            <div className='px-2'> 
              <FaArrowRightLong />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Herosection
