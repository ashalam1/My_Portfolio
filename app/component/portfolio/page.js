"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const filterProjects = (category) => {
    if (category === "all") return projects
    return projects.filter((project) => project.category === category)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-background relative overflow-hidden">
      {/* Dark mode gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 -z-10 hidden dark:block"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="px-4 py-1 text-sm font-medium bg-blue-100 text-blue-800 border-blue-200 mb-4 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-800"
          >
            Portfolio
          </Badge>
          <h1 className="text-4xl font-bold  text-foreground mb-4">My Recent Work</h1>
          <p className="ttext-muted-foreground max-w-2xl mx-auto">
            Explore my projects that showcase my skills and expertise in web development. Each project represents a
            unique challenge and solution.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-12">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#0a45a3] data-[state=active]: text-foreground">
              All
            </TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-[#0a45a3] data-[state=active]: text-foreground">
              Web Apps
            </TabsTrigger>
            <TabsTrigger value="mobile" className="data-[state=active]:bg-[#0a45a3] data-[state=active]: text-foreground">
              Mobile
            </TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:bg-[#0a45a3] data-[state=active]: text-foreground">
              Other
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filterProjects(activeTab).map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-card  borderborder-border rounded-xl overflow-hidden group hover:border-[#0a45a3]/30 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#0a45a3]/80 hover:bg-[#0a45a3]  text-foreground border-none">
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold  text-foreground mb-2">{project.title}</h3>
                    <p className="ttext-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-card/80 ttext-muted-foreground border-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Data
const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with secure payment processing, user accounts, and an admin dashboard for managing products and orders.",
    image: "/image/ecommerce.jpg",
    type: "Web Application",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Learning Platform",
    description:
      "An interactive learning platform featuring courses, quizzes, and progress tracking. Designed with a focus on usability and student engagement.",
    image: "/image/learning.jpg",
    type: "Web Application",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Sales Management System",
    description: "A comprehensive system for shop owners to manage sales, inventory, and analyze business data.",
    image: "/image/sales.jpg",
    type: "Web Application",
    category: "web",
    technologies: ["React", "FastAPI", "SQLite", "Material UI"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Travel Planner",
    description:
      "A web-based travel planning platform offering budget-friendly trip itineraries to unexplored local tourist destinations through crowd-sourced information.",
    image: "/image/TravelPlanner.png",
    type: "Web Application",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "NewsSphere App",
    description:
      "A news application utilizing external news APIs to fetch and display up-to-date news data with filtering and search functionality.",
    image: "/placeholder.svg?height=400&width=600",
    type: "Web Application",
    category: "web",
    technologies: ["React", "Bootstrap", "News API"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "UsabilityHub Clone",
    description:
      "A clone website of UsabilityHub which is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.",
    image: "/image/usability.jpg",
    type: "Web Design",
    category: "web",
    technologies: ["HTML", "CSS", "Bootstrap"],
    demoLink: "#",
    githubLink: "#",
  },
]
