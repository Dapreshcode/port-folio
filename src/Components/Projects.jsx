import React from 'react'
import project1 from "../assets/project-1.jpg";
import project3 from "../assets/project3.png";
import { motion } from 'framer-motion';

const Projects = () => {

  const projects = [
  {
    id: 1,
    title: "Real Estate Website",
    desc: "A responsive real estate platform with modern UI and property browsing features.",
    image: project1,

    demo: "https://real-est-web.vercel.app/",
    github: "https://github.com/Dapreshcode/Real-Est-web",

    stack: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "GitHub",
      "Vercel"
    ]
  },

  {
    id: 2,
    title: "Responsive portfolio website",
    desc: "A responsive portfolio website with modern UI and smooth animations.",
    image: project3,

    demo: "https://precious-portfolio.vercel.app/",
    github: "https://github.com/Dapreshcode/port-folio",

    stack: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "GitHub",
      "Vercel"
    ]
  }
];


  return (
    <section
      id="Project"
      className="bg-[#111827]/90 text-white py-20 px-6 md:px-20 lg:px-32"
    >

    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          My <span className="text-yellow-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Here are some of my favorite projects that I have designed and developed using React and modern web technologies.
        </p>
      </div>

      
      {/* ==== Project Cards ==== */}
<motion.div
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{
    duration: 1.3,
    delay: 0.25,
    type: "spring",
    stiffness: 70,
    damping: 15,
  }}
  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
>
  {projects.map((project) => (
    <div
      key={project.id}
      className="bg-[#1f2937] rounded-2xl overflow-hidden shadow-lg 
      hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
      group border border-gray-700"
    >

      {/* Image Section */}
      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover 
          group-hover:scale-110 transition-transform duration-500"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-black/70 flex items-center 
          justify-center gap-4 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300"
        >

          {/* Live Demo */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg 
            font-medium hover:bg-yellow-300 transition"
          >
            Live Demo
          </a>

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-white px-4 py-2 
            rounded-lg font-medium hover:bg-gray-800 transition"
          >
            GitHub
          </a>

        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between h-[240px]">

        <div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4">
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full 
                bg-gray-800 text-gray-300 border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-3 mt-auto">

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-yellow-400 text-black 
            px-4 py-2 rounded-lg font-medium 
            hover:bg-yellow-300 transition-colors"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-gray-500 
            text-gray-200 px-4 py-2 rounded-lg font-medium
            hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  ))}
</motion.div>
        </section>
  )
}

export default Projects
