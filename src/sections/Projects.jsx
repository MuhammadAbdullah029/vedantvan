import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import useScrollAnimation from '../components/useScrollAnimation';

const Projects = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const headingRef = useRef(null)

  useScrollAnimation(headingRef)

  const displayProjects = projects.length > 0 ? projects : sampleProjects;

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full md:p-[3rem] p-[1rem] ">
      <div className="p-[1rem] border-[1px] border-[#F7F6F6] md:rounded-[25px] rounded-[15px] w-full h-[60vh]  md:h-[80vh] ">
        <h1 ref={headingRef} className="md:text-[5vw] text-4xl font-bold mb-8 text-center">My Work </h1>

        {/* Cards Grid */}
        <div className="flex gap-6 md:h-[65%] lg:h-[60%] h-[95%] min-w-full mx-auto overflow-x-scroll overflow-y-hidden scroll ">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="bg-white flex-shrink-0 md:w-[30%] w-[85%] h-[85%] mb-6 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading='lazy'
              />
              <div className="p-4">
                <h3 className="md:text-xl text-[6vw] font-semibold text-gray-800 mb-2">{project.title}</h3>
                <div className="flex flex-wrap md:gap-2 gap-1 mb-3 md:mt-0 mt-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#061B57] white md:text-xs text-[2.8vw] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-[#0000004d] flex items-center justify-center p-4 z-50">
            <div className="bg-[#F7F6F6] rounded-[5px] max-w-2xl w-full max-h-[90vh] overflow-y-auto scroll">

              {/* Modal Header */}
              <div className="flex justify-between items-center p-6">
                <h2 className="text-4xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#061B57] text-sm rounded-full white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="text-gray-700 leading-relaxed">
                  <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedProject.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;