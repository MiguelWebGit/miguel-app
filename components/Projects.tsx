import React from 'react';
import { Project } from './Project'; // Define your Project type in '../types'
import { FaGithub } from 'react-icons/fa'; // Import Github icon from FontAwesome
import { IoIosOpen } from 'react-icons/io'; // Import redirection icon from Ionicons

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="text-left">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-2" />
          <p className="text-base text-center mb-2">{project.description}</p>
          <div className="flex justify-center space-x-4">
            <a href={project.githubLink} className="flex items-center space-x-1">
              <FaGithub size={24} />
              <span>Code</span>
            </a>
            <a href={project.liveDemoLink} className="flex items-center space-x-1">
              <span>Live Demo</span>
              <IoIosOpen size={24} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
