import React from "react";
import {useRouter} from "next/router";

interface NavbarProps {
    pathname: string;
}

const Navbar: React.FC<NavbarProps> = ({pathname}) => {
    return (
        <header className="sticky top-0 z-50 flex justify-between p-4 bg-white border-b border-black-200 shadow-md ">
            <div className="text-black font-bold ml-4">
                <a href="/">Miguel.dev</a>
            </div>
            <nav className="mr-2">
                <ul className="flex space-x-4">
                    {["Home", "About", "Projects", "Contact"].map((page) => (
                        <li key={page}>
                            <a
                                href={`/${page.toLowerCase()}`}
                                className={
                                    pathname === `/${page.toLowerCase()}`
                                        ? "text-green-300"
                                        : "text-black font-semibold"
                                }>
                                {page}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
