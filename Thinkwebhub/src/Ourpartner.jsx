import React from 'react'
import img1 from '../src/assets/google.png'
import img2 from '../src/assets/azure.png'
import img3 from '../src/assets/India.png'
import img4 from '../src/assets/unnamed.png'
import img5 from '../src/assets/razorpay.png'
import img6 from '../src/assets/phonepay.png'
function Ourpartner() {
    const imgss = [img1,img2,img3,img4,img5,img6];
  return (
    <div className='w-full flex items-center justify-center px-2 bg-black h-[30rem]'>
        
        <div className=' flex w-3/4 border-2 border-neutral-900 shadow-inner shadow-zinc-700  rounded-xl px-5 py-4 flex-col items-center'>
        <div className='text-white font-semibold text-center flex text-5xl'> Our <div className='text-[#F05742] px-2'>Partner</div></div>

            
            <div className='flex w-3/4 h-[15rem] gap-4 justify-center items-center'>
            {
                imgss.map((items,index) => (
                        <div className='w-40 px-2 '><img key={index} src={items} className='' /></div>
                    
                ))
            }
            </div>
        </div>

    </div>
  )
}

export default Ourpartner
