import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // ✅ Correct imports

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // ✅ Fix the useEffect for body scroll locking
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
       <div className='text-gray-100 font-bold '><p>presh <span className='text-yellow-500'>dev</span></p></div>

        {/* ===== Desktop Nav ===== */}
        <ul className="hidden md:flex gap-7 text-grey-300 font-bold">
          <a href="#Header" className="cursor-pointer hover:text-gray-500">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-500">About</a>
          <a href="#Project" className="cursor-pointer hover:text-gray-500">Project</a>
           <a href="#Services" className="cursor-pointer hover:text-gray-500">Services</a>
        </ul>

        {/* ===== Mobile Menu Icon ===== */}
        <FontAwesomeIcon
          onClick={() => setShowMobileMenu(true)}
          icon={faBars}
          className="text-2xl cursor-pointer md:hidden"
        />
      </div>

      {/* ===== Mobile Menu Overlay ===== */}
      <div
        className={`fixed w-full h-full top-0 left-0 bg-white flex flex-col z-50 transform transition-transform duration-300 ${
          showMobileMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end ">
          <FontAwesomeIcon
            onClick={() => setShowMobileMenu(false)}
            icon={faXmark}
            className="text-2xl cursor-pointer md:hidden"
          />
        </div>

        <ul className="flex flex-col items-center gap-3 mt-20 text-lg font-medium">
          <li onClick={() => setShowMobileMenu(false)} className="hover:text-gray-500 cursor-pointer">Home</li>
          <li onClick={() => setShowMobileMenu(false)} className="hover:text-gray-500 cursor-pointer">About</li>
          <li onClick={() => setShowMobileMenu(false)} className="hover:text-gray-500 cursor-pointer">Project</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
