import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className='min-h-screen  bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/background-1.jpg')" }} id= 'Header'>
      <div class="absolute inset-0 bg-black/60"></div> 
    <Navbar/>

    <div className='relative z-10 flex justify-center items-center container flex-col px-8 md:px-10'>
      <h1 className='font-semibold text-4xl md:6xl lg:7xl text-gray-400 '>Hi, I am <span className='text-yellow-400'>Michael Precious</span></h1>
      <p class="mt-4 text-gray-300 ">I'm a frontend web developer, passionate about crafting beautifuland functional websites. I am proficient in HTML, CSS, TAILWIND and JAVASCRIPT 
      
      </p>
    </div>
  

    

    </div>
  )
}

export default Header
