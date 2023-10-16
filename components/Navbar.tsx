"use client";
import React from "react";

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

    return (
        <nav className="sticky top-0 z-50 flex justify-between p-4 bg-white border-b border-black-200 shadow-md">
            <div>
                <a
                    onClick={() => scrollToSection("home")}
                    className="cursor-pointer font-semibold">
                    Miguel.dev
                </a>
            </div>
            <div className="flex space-x-4 font-semibold cursor-pointer">
                <a onClick={() => scrollToSection("home")}>Home</a>
                <a onClick={() => scrollToSection("about")}>About</a>
                <a onClick={() => scrollToSection("projects")}>Projects</a>
                <a onClick={() => scrollToSection("contact")}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
