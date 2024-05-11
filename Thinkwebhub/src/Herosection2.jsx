import React from 'react'
import imgforthis from '../src/assets/asset2.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Herosection2 = () => {
  return (
    <div className='w-full z-[0] h-[35rem] relative flex items-center justify-center bg-black'>
      <div className='border-neutral-900 z-[2] text-white bg-neutral-950 w-2/3 h-[35rem] flex items-center justify-around absolute top-0 border-2 rounded-2xl'>

        <div className='z-[3] px-10'>
            <div className='font-semibold text-5xl mb-3 flex'>What We <div className='text-[#F05742] px-2'>Are</div>
            </div>
            <div className='text-zinc-400 text-md mb-6'>
            We are a crew of builders, designers & investors building disruptive products in Web3 and empowering founders along the way We are a crew of builders, designers & investors building disruptive products in Web3 and empowering founders along the way We are a crew of builders, designers & investors. 
            </div>
            <div className='tracking-normal flex items-center justify-around text-md mt-3  w-40 text-white duration-500 ease-in-out hover:text-[#F05742] hover:border-[#F05742] border-2 rounded-full p-4'>
          Know More 
          <div className='px-2'> 
          <FaArrowRightLong />
          </div>
          </div>
        </div>

      <img src={imgforthis} className='w-[30rem]'/>
            
      </div>
    </div>
  )
}

export default Herosection2
