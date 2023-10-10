import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Navbar pathname={""} />
            <div className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-[50rem]">
                <Hero />
                <About />
                <Projects />
            </div>
        </div>
    );
}
