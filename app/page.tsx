"use client";
import {useState, useEffect} from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import {PROJECT_CONSTANT} from "../lib/constants";
import Contact from "@/components/Contact";
import LoadingSpinner from "@/components/LoadingSpinner"; // This is your loading component

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust this delay as needed
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-[50rem]">
                <Hero />
                <About />
                <Projects projects={PROJECT_CONSTANT} />
                <Contact />
            </div>
        </div>
    );
}
