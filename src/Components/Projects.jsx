import React from 'react'
import project1 from "../assets/project-1.jpg";

const Projects = () => {

   const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A responsive Real Estate website built with React and TailwindCSS showcasing animations and modern UI.",
    image: project1, // ✅ imported image
    link: "https://github.com/Dapreshcode/Real-Estate",
  }

]


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
          Here are some of my favorite projects that I’ve designed and developed using React and modern web technologies.
        </p>
      </div>

      
      {/* ==== Project Cards ==== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1f2937] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>


        </section>
  )
}

export default Projects
