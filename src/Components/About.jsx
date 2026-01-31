import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="bg-[#0b0f19]/90 text-gray-200 py-20 px-6 md:px-20"  id='About'>
  <motion.div 
  initial = {{opacity:0, x:100}}
  transition = {{duration:0.6}}
  whileInView = {{opacity:1, x:0}}
  viewport={{ once: true }}
  
  className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
    
    <img src="/portfolio-about.jpg" alt="Profile" className="w-64 rounded-lg shadow-lg" />
    
    <div className='px-10 md:px-18'>
      <h2 className="text-yellow-400 text-lg font-semibold">ABOUT ME</h2>
      <h3 className="text-3xl font-bold mt-2">Hi There! I'm <span className='text-yellow-400'>Michael Precious</span></h3>
      <p className="mt-4 text-gray-400">
        Highly motivated and detail-oriented front-end web
 developer with a passion for creating visualy
 appealing and user-friendly web applications. Skiled in
 HTML, CSS, JavaScript, and modern frameworks like
 React jsx, Next js and TailwindCSS. Proficient in translating designs into responsive
 interactive web pages.
      </p>

      <ul className="mt-6 space-y-2">
        <li><span className="font-semibold text-yellow-400">Birthday:</span> July 30</li>
        <li><span className="font-semibold text-yellow-400">Email:</span> empreciousbaribe@gmail.com</li>
        <li><span className="font-semibold text-yellow-400">Freelance/Internship:</span> Available</li>
      </ul>

      <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
        <a href="Precious_Baribe_Web_Developer_CV (1).pdf">Download CV</a>
      </button>
    </div>
  </motion.div>
</section>

  )
}

export default About
