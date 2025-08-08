"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/app/context/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/95 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      {/* Dark mode gradient background, visible only when scrolled */}
      {scrolled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden dark:block bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950"
        />
      )}

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-foreground">
            <span className="text-[#0a45a3]">Ashfaque</span>Alam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
                {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-[#0a45a3] dark:hover:text-[#0a45a3] p-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <ul className="flex space-x-8 text-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0a45a3] transition-colors duration-300 font-medium"
                >
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

        
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-[#0a45a3] dark:hover:text-[#0a45a3] p-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <button onClick={toggleMenu} className="text-foreground focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

       {/* Mobile Navigation Drawer */}
<div
  className={cn(
    "lg:hidden fixed top-0 left-0 w-full h-full z-40 transition-all duration-300",
    isOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  )}
  style={{ background: "rgba(0,0,0,0.6)" }}
>
  <div className="absolute right-2 top-2">
    <Button
      variant="ghost"
      onClick={toggleMenu}
      aria-label="Close menu"
      size="icon"
      className="text-foreground"
    >
      <X className="h-7 w-7" />
    </Button>
  </div>
  <div className="relative bg-background rounded-t-2xl shadow-2xl w-full max-w-xs mx-auto mt-24 p-8 flex flex-col items-center gap-6">
    {/* Nav links */}
    <ul className="flex flex-col w-full items-center space-y-4 text-lg font-medium text-foreground">
      {[
        { href: "/", label: "Home" },
        { href: "/component/about", label: "About" },
        { href: "/component/portfolio", label: "Portfolio" },
        { href: "/component/contact", label: "Contact" },
      ].map((item) => (
        <li key={item.href} className="w-full">
          <Link
            href={item.href}
            onClick={toggleMenu}
            className="block w-full text-center py-2 rounded hover:text-[#0a45a3] transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
    <div className="w-full h-px bg-border my-3" />
    {/* Social Links */}
    <div className="flex justify-center gap-5 py-2">
      <a href="https://github.com/ashalam1" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a45a3] text-muted-foreground">
        <i className="fab fa-github" />
      </a>
      <a href="https://linkedin.com/in/ashfaquealam154" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a45a3] text-muted-foreground">
        <i className="fab fa-linkedin" />
      </a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a45a3] text-muted-foreground">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://instagram.com/ashfu_003" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a45a3] text-muted-foreground">
        <i className="fab fa-instagram" />
      </a>
    </div>
    {/* Theme Toggle */}
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="mb-1 text-muted-foreground hover:text-[#0a45a3] dark:hover:text-[#0a45a3]"
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
    {/* Contact Button */}
    <Link href="/component/contact" onClick={toggleMenu}>
      <Button className="w-full bg-[#0a45a3] hover:bg-[#0a45a3]/80 text-white mt-2">
        Contact Me
      </Button>
    </Link>
  </div>
</div>

      </div>
    </nav>
  );
}
