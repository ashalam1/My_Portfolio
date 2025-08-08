"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

export default function About() {
  const [activeTab, setActiveTab] = useState("about")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-background relative overflow-hidden">
  {/* Gradient background, only dark mode */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 -z-10 hidden dark:block"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="px-4 py-1 text-sm font-medium bg-blue-100 text-blue-800 border-blue-200 mb-4 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-800"
          >
            About Me
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Know Me Better</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate full-stack developer with expertise in creating modern web applications that deliver
            exceptional user experiences.
          </p>
        </div>

        <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="about" className="data-[state=active]:bg-[#0a45a3] data-[state=active]:text-foreground">
              About
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-[#0a45a3] data-[state=active]:text-foreground">
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-[#0a45a3] data-[state=active]:text-foreground">
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="grid md:grid-cols-2 gap-16 items-center"
  >
    {/* Left side: Stats */}

    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Full-Stack Developer</h2>
      <p className="text-muted-foreground leading-relaxed">
        I&apos;m a full-stack developer specializing in React.js, Next.js, Material-UI, Python, and FastAPI. I build dynamic UIs and scalable backend services while efficiently managing databases with SQLAlchemy and SQLite.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        I&apos;m passionate about delivering intuitive user experiences and optimizing performance. My approach combines technical expertise with creative problem-solving to build applications that not only function flawlessly but also provide exceptional user experiences.
      </p>

      <div className="grid grid-cols-2 gap-6 text-muted-foreground">
        <div>
          <p className="font-medium mb-1">Name:</p>
          <p>Ashfaque Alam</p>
        </div>
        <div>
          <p className="font-medium mb-1">Email:</p>
          <p>ashfaquealam154@gmail.com</p>
        </div>
        <div>
          <p className="font-medium mb-1">Location:</p>
          <p>Lucknow, India</p>
        </div>
        <div>
          <p className="font-medium mb-1">Availability:</p>
          <p>Available for work</p>
        </div>
      </div>
    </div>

    

    {/* Right side: About Text */}
    <div className="space-y-8">
      <div className="flex justify-center md:justify-start gap-8">
        <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center w-36">
          <h3 className="text-5xl font-bold text-[#0a45a3] mb-1">2+</h3>
          <p className="text-muted-foreground text-sm font-semibold">Years Experience</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center w-36">
          <h3 className="text-5xl font-bold text-[#0a45a3] mb-1">10+</h3>
          <p className="text-muted-foreground text-sm font-semibold">Projects Completed</p>
        </div>
      </div>
    </div>
  </motion.div>
</TabsContent>


          <TabsContent value="skills" className="mt-6">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>

                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-card/80" indicatorClassName="bg-[#0a45a3]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-foreground">Professional Skills</h2>

                <div className="grid grid-cols-2 gap-6">
                  {professionalSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-card border border-gray-800 rounded-lg p-6 hover:border-[#0a45a3]/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-[#0a45a3]">{skill.icon}</div>
                        <h3 className="text-foreground font-medium">{skill.name}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-[#0a45a3]/30 pl-8 pb-8 ml-4">
                <div className="absolute w-4 h-4 bg-[#0a45a3] rounded-full -left-[9px] top-0"></div>
                <div className="bg-card border border-gray-800 rounded-lg p-6">
                  <span className="inline-block px-3 py-1 bg-[#0a45a3]/10 text-[#0a45a3] rounded-full text-sm font-medium mb-3">
                    2019 - 2023
                  </span>
                  <h3 className="text-xl text-foreground font-semibold mb-2">
                    Bachelor of Engineering - Electronics and Communication Engineering
                  </h3>
                  <p className="text-muted-foreground mb-3">SDM College of Engineering and Technology, Dharwad, Karnataka</p>
                  <p className="text-gray-500">
                    Completed a comprehensive engineering program with a focus on electronics and communication systems.
                    Developed strong analytical and problem-solving skills through rigorous coursework and practical
                    projects.
                  </p>
                </div>
              </div>

              <div className="relative border-l-2 border-[#0a45a3]/30 pl-8 ml-4">
                <div className="absolute w-4 h-4 bg-[#0a45a3] rounded-full -left-[9px] top-0"></div>
                <div className="bg-card border border-gray-800 rounded-lg p-6">
                  <span className="inline-block px-3 py-1 bg-[#0a45a3]/10 text-[#0a45a3] rounded-full text-sm font-medium mb-3">
                    2023 - Present
                  </span>
                  <h3 className="text-xl text-foreground font-semibold mb-2">
                    Self-Directed Learning & Professional Development
                  </h3>
                  <p className="text-muted-foreground mb-3">Online Platforms & Personal Projects</p>
                  <p className="text-gray-500">
                    Continuously expanding my knowledge and skills through online courses, tutorials, and hands-on
                    projects. Focused on modern web development technologies and best practices to stay current with
                    industry trends.
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Data
const technicalSkills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "FastAPI", level: 65 },
]

const professionalSkills = [
  {
    name: "Problem Solving",
    description: "Analytical approach to identifying and resolving complex technical challenges efficiently.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
  {
    name: "Communication",
    description: "Clear and effective communication with clients and team members to ensure project success.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    name: "Time Management",
    description: "Efficient organization and prioritization of tasks to meet deadlines and deliver quality work.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    name: "Adaptability",
    description: "Quick to learn new technologies and adapt to changing project requirements and environments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
      </svg>
    ),
  },
]
