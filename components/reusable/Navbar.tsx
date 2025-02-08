"use client"

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="bg-white dark:bg-neutral-950 shadow-md w-full z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <p className="text-xl font-bold text-neutral-800 dark:text-white cursor-pointer transition-all duration-300 p-2 rounded-md hover:bg-neutral-700">
                                    Swastik Biswas
                                </p>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex space-x-6">
                                <li>
                                    <Link href="/about">
                                        <p className="text-neutral-600 dark:text-neutral-300 transition-all duration-300 p-2 rounded-md hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-white">
                                            About
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects">
                                        <p className="text-neutral-600 dark:text-neutral-300 transition-all duration-300 p-2 rounded-md hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-white">
                                            Projects
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <p className="text-neutral-600 dark:text-neutral-300 transition-all duration-300 p-2 rounded-md hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-white">
                                            Blog
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <p className="text-neutral-600 dark:text-neutral-300 transition-all duration-300 p-2 rounded-md hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-white">
                                            Contact
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white focus:outline-none"
                            >
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29A1 1 0 105.7 5.71L10.59 10.6 5.7 15.49a1 1 0 101.42 1.42L12 12.83l4.88 4.88a1 1 0 001.42-1.42l-4.88-4.88 4.88-4.88z"
                                        />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <ul className="px-2 pt-2 pb-3 space-y-1">
                            <li>
                                <Link href="/about">
                                    <p className="block text-neutral-600 dark:text-neutral-300 transition-all duration-300 p-2 rounded-md hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-white">
                                        About
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <p className="block text-neutral-600 dark:text-neutral-300 transition-all duration-300 p-2 rounded-md hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-white">
                                        Projects
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <p className="block text-neutral-600 dark:text-neutral-300 transition-all duration-300 p-2 rounded-md hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-white">
                                        Blog
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p className="block text-neutral-600 dark:text-neutral-300 transition-all duration-300 p-2 rounded-md hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-white">
                                        Contact
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            <div className="mt-16">
                {/* Main content goes here */}
            </div>
        </>
    );
};

export default Navbar;
