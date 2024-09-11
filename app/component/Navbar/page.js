"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 border-b border-gray-700 py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Social Media Links */}
                    <div className="flex space-x-4 text-white">
                        <a href="https://github.com/ashalam1" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a45a3] transition-colors duration-300">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/ashfaquealam154" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a45a3] transition-colors duration-300">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a45a3] transition-colors duration-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com/ashfu_003" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a45a3] transition-colors duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>

                    {/* Centered Navigation Links */}
                    <div className="hidden lg:flex items-center w-full lg:w-auto">
                        <ul className="flex justify-center lg:space-x-8 text-white">
                            <li className="nav-item">
                                <Link href="/" className="hover:text-[#0a45a3] transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/component/about" className="hover:text-[#0a45a3] transition-colors duration-300">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/component/portfolio" className="hover:text-[#0a45a3] transition-colors duration-300">
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/component/contact" className="hover:text-[#0a45a3] transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Button */}
                    <div className="hidden lg:block">
                        <Link href="/component/contact">
                            <button className="relative overflow-hidden bg-gradient-to-b from-[#0a45a3] to-black text-white px-4 py-2 rounded group">
                                <span className="relative z-10">Contact Me</span>
                                <span className="absolute inset-0 bg-gradient-to-b from-[#123061] to-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} text-center`}>
                <ul className="space-y-4 mt-4 text-white">
                    <li>
                        <Link href="/" onClick={toggleMenu} className="hover:text-[#0a45a3] transition-colors duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/component/about" onClick={toggleMenu} className="hover:text-[#0a45a3] transition-colors duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/component/portfolio" onClick={toggleMenu} className="hover:text-[#0a45a3] transition-colors duration-300">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/component/contact" onClick={toggleMenu} className="hover:text-[#0a45a3] transition-colors duration-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
