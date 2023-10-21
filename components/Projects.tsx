import React from "react";
import Image from "next/image";
import { Project } from "./Project";
import { FaGithub } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div id="projects" className="text-center mb-20">
      <div className="mx-auto w-80">
        <h1 className="text-5xl text-primary-light dark:text-primary-dark font-bold mb-4">
          Projects
        </h1>
        <p className="mb-8">
          Every item is unique piece of development, created from scratch 🚀
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:flex-wrap">
        {projects &&
          projects.length > 0 &&
          projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-8 gap-8 w-full md:w-1/2"
            >
              <h2 className="text-2xl text-secondary-light dark:text-secondary-dark font-semibold mb-2">
                {project.title}
              </h2>
              <Image
                src={project.image}
                alt={project.title}
                className=""
                width={200}
                height={200}
              />
              <p className="text-base text-text-light dark:text-text-dark text-center mb-2 w-80">
                {project.description}
              </p>
              <div className="flex justify-center space-x-4 ">
                <a
                  href={project.githubLink}
                  className="flex items-center space-x-1"
                >
                  <div className="hover:scale-125 transition duration-300 ease-in-out">
                    <FaGithub size={24} />
                  </div>
                  <span>Code</span>
                </a>

                <a
                  href={project.liveDemoLink}
                  className="flex items-center space-x-1 "
                >
                  <span>Live Demo</span>
                  <div className="hover:scale-125 transition duration-300 ease-in-out">
                    <IoIosOpen size={20} />
                  </div>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
