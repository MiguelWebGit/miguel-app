"use strict";
import {useEffect, useState} from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
            setDarkMode(mediaQuery.matches);
            const listener = (event: {
                matches: boolean | ((prevState: boolean) => boolean);
            }) => {
                setDarkMode(event.matches);
            };
            mediaQuery.addListener(listener);
            return () => mediaQuery.removeListener(listener);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Return the state and toggle function
    return {darkMode, toggleDarkMode};
};

export default DarkModeToggle;
