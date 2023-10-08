import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div className="grid grid-cols-2 gap-8 items-center mb-64">
            <div className="flex justify-center">
                {/* Asegúrate de tener una imagen llamada "about.jpg" en la carpeta "public" */}
                <Image
                    className="rounded-lg"
                    src="/about.jpg"
                    alt="About"
                    width={400}
                    height={400}
                />
            </div>
            <div>
                <h1 className="relative bottom-5 text-blue-500 text-3xl font-bold">
                    About Me
                </h1>
                <p className="mt-2 text-sm text-gray-600 text-justify">
                    As a Computer Science graduate from Universidad Nueva
                    Esparta with over 3 years of working experience, I have a
                    strong foundation in technical skills and a passion for
                    using technology to solve problems. My experience includes
                    working as a Software Technical Support at Campify, where I
                    managed the complete use of the platform. Additionally, I
                    completed an internship as a Software Developer at SANNET,
                    where I participated in the development of a web application
                    to automate processes for a bank entity.
                </p>
            </div>
        </div>
    );
};

export default About;
