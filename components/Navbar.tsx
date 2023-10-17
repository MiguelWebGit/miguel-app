"use client";
import React from "react";
import {SunIcon, MoonIcon} from "@heroicons/react/solid";
import useDarkMode from "./Darkmode"; // Note the change here

const Navbar: React.FC = () => {
    const navbarHeight = 150; // Ajusta este valor al alto de tu barra de navegación

    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            window.scrollTo({
                top: sectionElement.offsetTop - navbarHeight,
                behavior: "smooth",
            });
        }
    };

    // Use the useDarkMode hook here
    const {darkMode, toggleDarkMode} = useDarkMode();

    return (
        <nav className="sticky top-0 z-50 flex justify-between p-4 bg-white border-b border-black-200 shadow-md h-14 dark:bg-gray-800">
            <div>
                <a
                    onClick={() => scrollToSection("home")}
                    className="cursor-pointer font-semibold ml-10 dark:text-white">
                    Miguel.dev
                </a>
            </div>
            <div className="flex space-x-4 font-semibold cursor-pointer">
                <a onClick={() => scrollToSection("home")}>Home</a>
                <a onClick={() => scrollToSection("about")}>About</a>
                <a onClick={() => scrollToSection("projects")}>Projects</a>
                <a onClick={() => scrollToSection("contact")}>Contact</a>
            </div>
            <div className="mr-10">
                <button onClick={toggleDarkMode} className="focus:outline-none">
                    {darkMode ? (
                        <MoonIcon className="h-6 w-6 text-gray-500" />
                    ) : (
                        <SunIcon className="h-6 w-6 text-yellow-500" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
