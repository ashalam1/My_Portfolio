import React from 'react';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-700 text-white py-6">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-center mb-4">
                    <a href="mailto:ashfaquealam154@gmail.com" className="hover:underline">ashfaquealam154@gmail.com</a>
                </p>

                {/* Copyright Notice */}
                <p className="text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Ashfaque Alam. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
