import React from 'react'

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TailwindCSS",
  "Framer Motion",
  "Git",
  "GitHub",
  "Vercel",
  "Responsive Design"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-400">
            Technologies I use to build modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              className="bg-[#1f2937] border border-gray-700 
              rounded-xl py-6 text-center shadow-md
              hover:border-yellow-400 transition"
            >
              <p className="font-medium">{skill}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}