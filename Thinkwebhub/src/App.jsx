import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Herosection2 from './Herosection2'
import Whatwedo from './Whatwedo'
import Ourpartner from './Ourpartner'
import Footer from './Footer'
import Whatwedo2 from './Whatwedo2'
import Herosection3 from './Herosection3'
import Space from './Space'
import Fotter2 from './Fotter2'

function App() {
  return (
    <div className='w-full h-screen font-sans relative  selection:text-black selection:bg-[#EE5A5A]'>
      <Navbar/>
      <Herosection/>
      <Herosection2/>
      <Herosection3/>
      <Space/>
      <Whatwedo/>
      <Ourpartner/>
      <Whatwedo2/>
      <Footer/>
      <Fotter2/>
    </div>
  )
}

export default App
