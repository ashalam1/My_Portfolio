"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl">
            <span className="text-[#0a45a3]">Ashfaque</span>Alam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8 text-white">
              <li>
                <Link href="/" className="hover:text-[#0a45a3] transition-colors duration-300 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/component/about"
                  className="hover:text-[#0a45a3] transition-colors duration-300 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/component/portfolio"
                  className="hover:text-[#0a45a3] transition-colors duration-300 font-medium"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/component/contact"
                  className="hover:text-[#0a45a3] transition-colors duration-300 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 text-gray-400">
              <a
                href="https://github.com/ashalam1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0a45a3] transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/ashfaquealam154"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0a45a3] transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0a45a3] transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com/ashfu_003"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0a45a3] transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            {/* Contact Button */}
            <Link href="/component/contact">
              <Button className="bg-[#0a45a3] hover:bg-[#0a45a3]/80 text-white">Contact Me</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}
        >
          <ul className="flex flex-col space-y-4 text-white py-4">
            <li>
              <Link href="/" onClick={toggleMenu} className="block hover:text-[#0a45a3] transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/component/about"
                onClick={toggleMenu}
                className="block hover:text-[#0a45a3] transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/component/portfolio"
                onClick={toggleMenu}
                className="block hover:text-[#0a45a3] transition-colors duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/component/contact"
                onClick={toggleMenu}
                className="block hover:text-[#0a45a3] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Social Links */}
          <div className="flex space-x-6 text-gray-400 py-4">
            <a
              href="https://github.com/ashalam1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0a45a3] transition-colors duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/ashfaquealam154"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0a45a3] transition-colors duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0a45a3] transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/ashfu_003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0a45a3] transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Mobile Contact Button */}
          <div className="py-4">
            <Link href="/component/contact" onClick={toggleMenu}>
              <Button className="w-full bg-[#0a45a3] hover:bg-[#0a45a3]/80 text-white">Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
