import React from 'react'
import wwd1 from '../src/assets/wwd1.jpeg'
import wwd2 from '../src/assets/wwd2.jpeg'
import wwd3 from '../src/assets/wwd3.png'

import { FaArrowRightLong } from "react-icons/fa6";
const Whatwedo = () => {
    const imgs = [wwd1,wwd2,wwd3];
    const title = ["Web Design","App Development","Graphic Design"];
    const all = [{img:wwd1,name:"Web Design" , dis:"Developing a user-friendly interface to engage more possible customers."},
                    {img:wwd2,name:"App Development",dis:"Developing mobile Apps for both IOS and Androids with the latest techniques."},
                    {img:wwd3,name:"Graphic Design", dis:"Magically designing logos, and other media to build the brand identity."}]
  return (
    <div className='w-full h-[40rem] px-40 bg-black'>
        <div className='text-center bg-black  text-5xl font-bold text-white selection:text-black selection:bg-orange-500 flex items-center justify-center'>What We <div className='text-[#F05742] px-3'>Do</div> </div>
        <div className='flex gap-0 items-center justify-around mt-10'>
            {
                all.map((items,index) => (
                    
                        <div key={index} className='border-2 border-neutral-900 bg-neutral-950 w-[20rem] h-[27rem] px-4 py-3 rounded-md'>
                            <img className='bg-cover w-full h-[13rem]' src={items.img}/>
                            <div className='text-white text-3xl font-semibold px-2 py-1'>{items.name}</div>
                            <div className='text-zinc-400 text-md font-light'>{items.dis}</div>
                            <div className='tracking-normal cursor-pointer flex items-center justify-around text-md mt-3 duration-500 ease-in-out  w-40 text-white hover:text-[#F05742] p-4'>
                                Read More
                                <FaArrowRightLong />
                            </div>
                        </div>
                    
                ))
            }
        </div>
        <div className='text-zinc-300 mt-5 text-center text-lg flex justify-center items-center'>Interested to See More? <div className='font-bold px-2 cursor-pointer duration-500 ease-in-out hover:text-[#F05742]'>View More.</div> </div>
        
      
    </div>
  )
}

export default Whatwedo
