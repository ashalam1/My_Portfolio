import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <Link href="/" className="text-white font-bold text-xl mb-4 block">
              <span className="text-[#0a45a3]">Ashfaque</span>Alam
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate full-stack developer specializing in creating modern, responsive web applications with a
              focus on user experience and performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ashalam1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a45a3] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ashfaquealam154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a45a3] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a45a3] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ashfu_003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a45a3] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#0a45a3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/component/about" className="text-gray-400 hover:text-[#0a45a3] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/component/portfolio" className="text-gray-400 hover:text-[#0a45a3] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/component/contact" className="text-gray-400 hover:text-[#0a45a3] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Indira Nagar, Lucknow, India</li>
              <li className="text-gray-400">+91 9125794356</li>
              <li className="text-gray-400">
                <a href="mailto:ashfaquealam154@gmail.com" className="hover:text-[#0a45a3] transition-colors">
                  ashfaquealam154@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Ashfaque Alam. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-[#0a45a3] mx-1" /> by Ashfaque Alam
          </p>
        </div>
      </div>
    </footer>
  )
}
