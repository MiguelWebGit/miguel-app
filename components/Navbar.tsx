"use client";
import React, {useState} from "react";
import {SunIcon, MoonIcon, MenuIcon, XIcon} from "@heroicons/react/solid";
import useDarkMode from "./Darkmode";

const Navbar: React.FC = () => {
    const navbarHeight = 150;
    const [isSidebarOpen, setSidebarOpen] = useState(false);

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
            <div className="hidden md:flex space-x-4 font-semibold cursor-pointer">
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
                <button
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="ml-4 focus:outline-none md:hidden">
                    <MenuIcon className="h-6 w-6 text-gray-500" />
                </button>
            </div>
            <div
                className={`fixed top-0 right-0 transform  ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-200 ease-in-out w-64 h-full dark:bg-gray-800 bg-white shadow-lg p-4 md:hidden`}>
                <div className="flex justify-end">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="focus:outline-none">
                        <XIcon className="h-6 w-6 text-gray-500 " />
                    </button>
                </div>
                <div className="flex flex-col items-center space-y-4 mt-10 font-semibold cursor-pointer">
                    <a onClick={() => scrollToSection("home")}>Home</a>
                    <a onClick={() => scrollToSection("about")}>About</a>
                    <a onClick={() => scrollToSection("projects")}>Projects</a>
                    <a onClick={() => scrollToSection("contact")}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
