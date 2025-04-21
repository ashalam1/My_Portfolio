import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Download, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 z-0"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0a45a3_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>

        {/* Content */}
        <div className="container mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <Badge
              variant="outline"
              className="px-4 py-1 text-sm font-medium bg-blue-950/50 text-blue-400 border-blue-800 mb-4"
            >
              Full-Stack Developer @ CareerSuite
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Hey there! I&apos;m{" "}
              <span className="text-[#0a45a3] inline-block relative">
                Ashfaque
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#0a45a3]/30 rounded-full"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl">
              I build exceptional digital experiences with modern web
              technologies, focusing on responsive design and seamless
              functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-[#0a45a3] hover:bg-[#0a45a3]/80 text-white"
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0a45a3] text-[#0a45a3] hover:bg-[#0a45a3]/10"
              >
                View Projects
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6 justify-center md:justify-start">
              <a
                href="https://github.com/ashalam1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a45a3] transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ashfaquealam154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a45a3] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a45a3] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/ashfu_003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a45a3] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0a45a3]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a45a3]/20 to-transparent z-10 rounded-full"></div>
              <Image
                src="/image/profile.png"
                alt="Ashfaque Alam"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="absolute -bottom-4 right-1/2 md:right-20 transform translate-x-1/2 md:translate-x-0 
  bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">
                  Working @ CareerSuite
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="px-4 py-1 text-sm font-medium bg-blue-950/50 text-blue-400 border-blue-800 mb-4"
            >
              Services
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Empowering your projects with expertise and innovation, delivering
              solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300
                  hover:border-[#0a45a3]/50 hover:shadow-[0_0_15px_rgba(10,69,163,0.15)] group"
              >
                <div
                  className="w-14 h-14 bg-[#0a45a3]/10 rounded-lg flex items-center justify-center mb-6
                  group-hover:bg-[#0a45a3]/20 transition-colors duration-300"
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="px-4 py-1 text-sm font-medium bg-blue-950/50 text-blue-400 border-blue-800 mb-4"
            >
              Experience
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Where I&apos;ve Made an Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional experiences that have shaped my skills and expertise
              in software development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Current Role */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8 hover:border-[#0a45a3]/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Software Engineer
                  </h3>
                  <p className="text-[#0a45a3] font-medium">CareerSuite</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <Badge className="bg-[#0a45a3]/80 text-white">Current</Badge>
                  <p className="text-gray-400 mt-1">April 2023 - Present</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Developed a feature-rich upskilling platform with
                functionalities like calendar integration, user authentication,
                profile management, email notifications, and mentor
                recommendations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "FastAPI", "SQLAlchemy", "React", "Next.js", "Shadcn", "Tailwindcss", "PostgreSQL",  "AWS"].map(
                  (tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-gray-800 text-gray-300 border-gray-700"
                    >
                      {tech}
                    </Badge>
                  )
                )}
              </div>
            </div>

            {/* You can add previous roles here following the same pattern */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="px-4 py-1 text-sm font-medium bg-blue-950/50 text-blue-400 border-blue-800 mb-4"
            >
              Portfolio
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Projects that Made an Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real-world solutions tailored to client needs, showcasing my
              expertise and problem-solving abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#0a45a3] text-[#0a45a3] hover:bg-[#0a45a3]/10"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> View Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/component/portfolio">
              <Button className="bg-[#0a45a3] hover:bg-[#0a45a3]/80 text-white">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data
const services = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end development from frontend to backend, ensuring smooth functionality and performance.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a45a3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: "Responsive Web Design",
    description:
      "Create stunning and responsive websites that work perfectly on all devices, from mobile to desktop.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a45a3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    title: "API Integration",
    description:
      "Seamless integration with third-party APIs to extend the functionality of your applications.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a45a3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize your websites and applications for faster load times and better user experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a45a3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    title: "Custom API Development",
    description:
      "Develop custom APIs tailored to the specific needs of your business or project.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a45a3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Streamline your deployment process with automated pipelines for continuous integration and delivery.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0a45a3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
];

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with secure payment processing, user accounts, and an admin dashboard.",
    image: "/image/ecommerce.jpg",
  },
  {
    title: "Learning Platform",
    description:
      "An interactive learning platform featuring courses, quizzes, and progress tracking for students.",
    image: "/image/learning.jpg",
  },
  {
    title: "Sales Management System",
    description:
      "A comprehensive system for shop owners to manage sales, inventory, and analyze business data.",
    image: "/image/sales.jpg",
  },
];
