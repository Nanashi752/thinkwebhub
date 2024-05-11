import React from 'react'
import thinkweb from './assets/thinkweb.png'
const Footer = () => {
  return (
    <div className='w-full h-[25rem] relative bg-black flex items-center font-semibold justify-around '>
      <div className='flex flex-col text-white'>
        <img src={thinkweb} className='w-[12rem]'/>
        <p className='mt-3 text-zinc-400'>We offer the services you need to <br /> succeed online.  Get in touch with us <br /> and let us help you transform your <br /> online presence.</p>

      </div>
      <div className='text-white'>
        <div className='font-bold text-xl '>Pages</div>
        <ul className='mt-3 text-zinc-400 ]'>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>About Us</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>Service</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>Portfolio</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>Contact Us</li>
        </ul>
      </div>
      <div className='text-white mt-11'>
        
            <div className='font-bold text-xl '>Services</div>
            <ul className='mt-3 text-zinc-400 '>
                <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>domain & hosting</li>
                <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>web design & devlopment</li>
                <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>app devlopment</li>
                <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>web maintain</li>
                <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>digital marketing</li>
                <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>graphic design</li>
            </ul>
        </div>
      <div className='text-white'>
        <div className='font-bold text-xl'>product</div>
        <ul className='mt-3 text-zinc-400'>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>clinic management</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>product management</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>taxi booking</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>business listing</li>
        </ul>
      </div>
      <div className='text-white'>
        <div className='font-bold text-xl'>quick links</div>
        <ul className='mt-3 text-zinc-400'>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>FAQ</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>support</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>privacy policy</li>
            <li className='cursor-pointer duration-300 ease-in-out hover:text-[#EE5A5A]'>terms & condition</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
