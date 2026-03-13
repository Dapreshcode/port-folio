import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
      
      style={{ backgroundImage: "url('/background-1.jpg')" }}
      id="Header"
    >
      {/* Glow Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-400 opacity-20 blur-3xl rounded-full top-[-80px] left-[-80px] animate-pulse"></div>

        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      </div>

       {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0"></div>
   <div className="relative z-10 w-full">
      <Navbar />
      

      <section className="w-full flex items-center justify-center text-white px-6 pt-24 md:pt-0">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Precious Baribe
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "Frontend Developer", 2000,
              "React Developer", 2000,
              "UI Developer", 2000,
              "Building Modern Web Apps", 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-xl sm:text-2xl md:text-3xl text-yellow-400 font-semibold"
          />

          {/* Description */}
          <p className="text-gray-200 mt-6 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            I build modern, responsive and interactive web applications
            using React, TailwindCSS and Framer Motion.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <a
              href="#projects"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition mx-6"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Contact Me
            </a>

          </div>

          {/* Tech Stack Ticker */}
          <div className="mt-12 overflow-hidden border-t border-gray-800 pt-6">

            <div className="animate-[scroll_20s_linear_infinite] whitespace-nowrap text-gray-400 text-xs sm:text-sm">

              React • JavaScript • TailwindCSS • Framer Motion • GitHub • Vercel • Responsive Design • React • JavaScript • TailwindCSS • Framer Motion •

            </div>

          </div>

        </motion.div>

      </section>
       </div>

    </div>
  );
};

export default Header;