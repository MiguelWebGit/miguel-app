"use client";
import React, { useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import useDarkMode from "./Darkmode";

const Navbar: React.FC = () => {
  const navbarHeight = 150;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      window.scrollTo({
        top:
          sectionElement.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight,
        behavior: "smooth",
      });
      setSidebarOpen(false);
    }
  };

  // Use the useDarkMode hook here
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="sticky top-0 z-50 flex justify-between p-4 bg-background-light border-b border-black-200 shadow-md h-14 dark:bg-background-dark ">
      <div>
        <a
          onClick={() => scrollToSection("home")}
          className="cursor-pointer font-semibold ml-10 "
        >
          Miguel.dev
        </a>
      </div>
      <div className="hidden md:flex justify-between space-x-4">
        <div className="relative group">
          <a
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-secondary-dark transition-all duration-200 ease-in-out pb-1"
          >
            Home
          </a>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
        </div>
        <div className="relative group">
          <a
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-secondary-dark transition-all duration-200 ease-in-out pb-1"
          >
            About
          </a>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
        </div>
        <div className="relative group">
          <a
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-secondary-dark transition-all duration-200 ease-in-out pb-1"
          >
            Projects
          </a>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
        </div>
        <div className="relative group">
          <a
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-secondary-dark transition-all duration-200 ease-in-out pb-1"
          >
            Contact
          </a>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
        </div>
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
          className="ml-4 focus:outline-none md:hidden"
        >
          <MenuIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black opacity-50"
          style={{ width: "calc(100% - 12rem)", right: "12rem" }} // Adjust these values as needed
        />
      )}
      <div
        className={`fixed top-0 right-0 transform  ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-400 ease-in-out w-48 h-full dark:bg-background-dark bg-white shadow-lg p-4 md:hidden overflow-x-hidden`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setSidebarOpen(false)}
            className="focus:outline-none"
          >
            <XIcon className="h-6 w-6 text-gray-500 " />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-10 font-semibold cursor-pointer ">
          <div className="relative group">
            <a
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-secondary-dark transition-all duration-200 ease-in-out pb-1"
            >
              Home
            </a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
          </div>
          <div className="relative group">
            <a
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-secondary-dark transition-all duration-200 ease-in-out pb-1"
            >
              About
            </a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
          </div>
          <div className="relative group">
            <a
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer hover:text-secondary-dark transition-all duration-200 ease-in-out pb-1"
            >
              Projects
            </a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
          </div>
          <div className="relative group">
            <a
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-secondary-dark transition-all duration-200 ease-in-out pb-1"
            >
              Contact
            </a>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
