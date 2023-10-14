import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import {Project} from "./Project"; // Define your Project type in '../types'
import {FaGithub} from "react-icons/fa"; // Import Github icon from FontAwesome
import {IoIosOpen} from "react-icons/io"; // Import redirection icon from Ionicons

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({projects}) => {
    return (
        <div className="text-left">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            {projects &&
                projects.length > 0 &&
                projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center mb-8 gap-8">
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
                        <p className="text-base text-center mb-2">
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
    );
};

export default Projects;
