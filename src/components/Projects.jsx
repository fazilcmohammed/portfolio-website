import React from 'react'
import { projects } from '../assets/constant'

const Projects = () => {
  return ( 
    <section className='px-6 md:px-28 py-40 bg-black'>
      <div className="" id='projects'>
        <h1 className="text-[40px] text-center text-white">
          My <b>Projects</b>
        </h1>
        <div className="space-y-20 my-20">
        {
          projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
            >
              {/* Image */}
              <div className="flex-1">
                <img src={project.image} alt={project.title} className="rounded-lg w-[600px]" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-white">0{index + 1}</h2><br />
                <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  View Project
                </a>
              </div>
            </div>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default Projects