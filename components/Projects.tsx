import React from "react";
import Image from "next/image";
import {Project} from "./Project";
import {FaGithub} from "react-icons/fa";
import {IoIosOpen} from "react-icons/io";

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({projects}) => {
    return (
        <div id="projects" className="text-center mb-40">
            <div className="mx-auto w-80">
                <h1 className="text-5xl text-blue-500 font-bold mb-10">
                    Projects
                </h1>
            </div>
            <div className="flex flex-wrap justify-center">
                {projects &&
                    projects.length > 0 &&
                    projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center mb-8 gap-8 w-1/2">
                            <h2 className="text-2xl font-semibold mb-2">
                                {project.title}
                            </h2>
                            <Image
                                src={project.image}
                                alt={project.title}
                                className=""
                                width={200}
                                height={200}
                            />
                            <p className="text-base text-center mb-2 w-80">
                                {project.description}
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href={project.githubLink}
                                    className="flex items-center space-x-1">
                                    <FaGithub size={24} />
                                    <span>Code</span>
                                </a>
                                <a
                                    href={project.liveDemoLink}
                                    className="flex items-center space-x-1">
                                    <span>Live Demo</span>
                                    <IoIosOpen size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Projects;
