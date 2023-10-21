import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-28 md:mb-40 "
    >
      <div className="w-72 mx-auto">
        <h1 className="relative bottom-5 md:text-left text-primary-light dark:text-primary-dark text-4xl font-bold text-center">
          About Me
        </h1>
        <p className="text-sm mt-2  md:text-left md:text-md text-text-light text-center dark:text-text-dark md:w-72">
          As a Computer Science graduate from Universidad Nueva Esparta with
          over 3 years of working experience. Strong foundation in technical
          skills and a passion for using technology to solve problems.
        </p>
      </div>
      <div className="flex justify-center mb-5">
        <Image
          className="rounded-lg"
          src="/about.jpg"
          alt="About"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
