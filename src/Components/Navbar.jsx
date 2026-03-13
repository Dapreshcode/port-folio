import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
  }, [showMobileMenu]);

  // detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "backdrop-blur-md bg-slate-900/70 border-b border-gray-700 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <div className="text-gray-100 font-bold text-lg tracking-wide">
          presh <span className="text-yellow-400">dev</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          <a
            href="#Header"
            className="relative hover:text-yellow-400 transition"
          >
            Home
          </a>

          <a
            href="#About"
            className="relative hover:text-yellow-400 transition"
          >
            About
          </a>

          <a
            href="#projects"
            className="relative hover:text-yellow-400 transition"
          >
            Projects
          </a>

          <a
            href="#Services"
            className="relative hover:text-yellow-400 transition"
          >
            Services
          </a>

        </ul>

        {/* Mobile Icon */}
        <FontAwesomeIcon
          onClick={() => setShowMobileMenu(true)}
          icon={faBars}
          className="text-2xl text-white cursor-pointer md:hidden"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#020617] text-white 
        flex flex-col items-center justify-center gap-8 text-xl 
        transform transition-transform duration-300 
        ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}`}
      >

        <FontAwesomeIcon
          onClick={() => setShowMobileMenu(false)}
          icon={faXmark}
          className="absolute top-8 right-8 text-3xl cursor-pointer"
        />

        <a onClick={() => setShowMobileMenu(false)} href="#Header">
          Home
        </a>

        <a onClick={() => setShowMobileMenu(false)} href="#About">
          About
        </a>

        <a onClick={() => setShowMobileMenu(false)} href="#projects">
          Projects
        </a>

        <a onClick={() => setShowMobileMenu(false)} href="#Services">
          Services
        </a>

      </div>
    </div>
  );
};

export default Navbar;