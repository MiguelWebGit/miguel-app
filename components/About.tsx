import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="grid grid-cols-2 gap-8 items-center mb-40">
            <div className="flex justify-center">
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
                <p className="mt-2 text-md text-gray-600 text-align-left dark:text-white">
                    As a Computer Science graduate from Universidad Nueva
                    Esparta with over 3 years of working experience. Strong
                    foundation in technical skills and a passion for using
                    technology to solve problems.
                </p>
            </div>
        </div>
    );
};

export default About;
