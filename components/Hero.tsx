/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import {
    FaGithub,
    FaLinkedin,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaReact,
} from "react-icons/fa";
import {SiTypescript, SiTailwindcss} from "react-icons/si";

const Hero = () => {
    return (
        <div className="flex justify-between items-center mb-64 mt-32">
            <div>
                <h1 className="text-4xl font-bold">Software Developer</h1>
                <p className="mt-2 mb-5 mr-28">
                    Hi I'm Miguel Guerrero. A passionate Software <br />
                    Developer based in Caracas, Venezuela.
                </p>
                <div className="flex space-x-2 mb-14">
                    <a
                        href="https://www.linkedin.com/in/miguel-guerrero-52987615a/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin size={24} color="blue" />
                    </a>
                    <a
                        href="https://github.com/MiguelWebGit/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                </div>
                <div className="flex space-x-2 mb-14">
                    <h2 className="text-lg font-semibold mr-4">Tech Stack</h2>
                    <p>|</p>
                    {/* Aquí puedes agregar los iconos de las diferentes tecnologías */}
                    <div className="flex space-x-4">
                        <FaHtml5 size={29} color="#e34c26" />
                        <FaCss3Alt size={29} color="#264de4" />
                        <FaJsSquare size={28} color="#f0db4f" />
                        <SiTypescript size={27} color="#007acc" />
                        <FaReact size={28} color="#61dbfb" />
                        <SiTailwindcss size={28} color="#61dbfb" />
                    </div>
                </div>
            </div>
            <div className="relative bottom-8 rounded-full overflow-hidden">
                {/* Asegúrate de tener una imagen llamada "profile.jpg" en la carpeta "public" */}
                <Image
                    src="/profile.jpg"
                    alt="Foto de perfil"
                    width={228}
                    height={228}
                />
            </div>
        </div>
    );
};

export default Hero;
