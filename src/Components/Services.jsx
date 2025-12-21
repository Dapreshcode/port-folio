import React from 'react'
import { motion } from 'framer-motion'



  


const Services = () => {
  return (
   <section className="bg-[#111827]/90 text-gray-300 py-20 px-6" id='Services'>
  <motion.div 
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{
    duration: 1.3,
    delay:  0.25,
    type: "spring",
    stiffness: 70,
    damping: 15
  }}
  class="max-w-6xl mx-auto text-center">
    <h2 class="text-yellow-400 font-semibold">SERVICES</h2>
    <h3 class="text-3xl font-bold mt-2 text-white">What I Do</h3>

    <div class="grid md:grid-cols-3 gap-8 mt-10">
      <div class="p-6 bg-[#1a1f2e]/70 rounded-xl hover:bg-[#1a1f2e]/90 transition">
        
        <h4 class="text-xl font-bold mb-2">Sketches</h4>
        <p> Hand-drawn wireframes and mockups to visualize website layout and functionality
Quick and iterative approach to explore different design concepts
Focus on user flow and information architecture.
</p>
      </div>

      <div class="p-6 bg-[#1a1f2e]/70 rounded-xl hover:bg-[#1a1f2e]/90 transition">
      
        <h4 class="text-xl font-bold mb-2">User Interface (UI) and User Experience (UX) design principles</h4>



        <p>Creating intuitive and engaging interactions with digital products
Balancing aesthetics and functionality for seamless user experience</p>
      </div>

      <div class="p-6 bg-[#1a1f2e]/70 rounded-xl hover:bg-[#1a1f2e]/90 transition">
        
        <h4 class="text-xl font-bold mb-2">Web Design</h4>
        <p> Crafting visually appealing and user-friendly website layoutsCombining typography, color theory, and imagery to create brand identity
      Ensuring responsiveness and accessibility across devices and browsers</p>
      </div>
    </div>
  </motion.div>
</section>

  )
}

export default Services
