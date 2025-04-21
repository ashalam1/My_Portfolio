"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields")
      return
    }
  
    setIsSubmitting(true)
  
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
  
      toast.success("Your message has been sent successfully!")
  
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="px-4 py-1 text-sm font-medium bg-blue-950/50 text-blue-400 border-blue-800 mb-4"
          >
            Contact Me
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let&apos;s connect! Whether you have a project in mind or just want to
            say hello, I&apos;m always open to discussing new opportunities and
            ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:col-span-1 space-y-6"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-[#0a45a3]/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0a45a3]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#0a45a3]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-gray-400">
                      Indira Nagar, Lucknow, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0a45a3]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#0a45a3]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">+91 9125794356</p>
                    <p className="text-gray-500 text-sm">
                      Mon to Fri 9am to 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0a45a3]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#0a45a3]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-gray-400">ashfaquealam154@gmail.com</p>
                    <p className="text-gray-500 text-sm">
                      Send me your query anytime!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-white font-medium mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ashalam1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0a45a3]/80 transition-colors"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ashfaquealam154"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0a45a3]/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0a45a3]/80 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/ashfu_003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0a45a3]/80 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:col-span-2"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0a45a3] hover:bg-[#0a45a3]/80 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-5 w-5 mr-2" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12"
        >
          <div className="rounded-xl overflow-hidden border border-gray-800 h-[450px]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.519926899844!2d77.6206220101186!3d12.895501624933344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14bc1f875dd5%3A0x2b126387f21954a7!2sGarvebhavi%20Palya%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1700231426045!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
