// components/AboutMe.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { AboutSectionProps } from "@/src/typings";
import {
  Search,
  FileText,
  Zap,
  RefreshCw,
  Users,
  Award,
  Calendar,
  BookOpen,
  Music,
  Megaphone,
  Trophy
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Motion variants for list animations
const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const highlightItems = [
  { icon: <BookOpen className="h-6 w-6 text-purple-500" />, title: "CodePath Alumni", detail: "Completed Advanced Web Dev course with honors." },
  { icon: <Calendar className="h-6 w-6 text-purple-500" />, title: "RTC Member", detail: "Active in Rutgers Women in Tech community." },
  { icon: <Users className="h-6 w-6 text-purple-500" />, title: "Mentor & VP", detail: "Guided 80+ students at Blueprint Tech Club." },
  { icon: <Calendar className="h-6 w-6 text-purple-500" />, title: "AWS User Group", detail: "AWS Community Days NYC organizing team." },
  { icon: <Award className="h-6 w-6 text-purple-500" />, title: "Hackathon Winner", detail: "GreenPioneers: Most Technically Polished." },
  { icon: <Music className="h-6 w-6 text-purple-500" />, title: "Creative Outlet", detail: "Dancing, singing, and guitar fuel my creativity." }
];
export default function AboutMe({ data }: { data: AboutSectionProps }) {
  // Simplified narrative focused on backend SDE, curiosity, and advocacy
  return (
    <section id="about" className="bg-white py-16" aria-labelledby="about-title">
      <div className="container mx-auto px-6 lg:px-8 space-y-12">
        {/* Title */}
        <motion.h2
          id="about-title"
          className="text-4xl font-extrabold text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Narrative */}
        <motion.div
          className="prose prose-lg prose-gray max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            I’m <strong>Rashmi Subhash</strong>, a full-stack engineer with a passion for building serverless systems that scale effortlessly. Curious by nature and detail-oriented by habit, I dive deep into distributed architectures, optimize performance, and automate workflows to deliver reliable solutions.
          </p>
          <p>
            My journey began experimenting with simple APIs, today I architect complex data pipelines on AWS, mentor emerging developers, and speak on topics ranging from Lambda best practices to cloud-native design. As a champion for women in tech, I strive to create inclusive environments through mentorship and community events.
          </p>
        </motion.div>

        {/* My Approach */}
        <div className="max-w-3xl mx-auto">
          {/* <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            My Approach
          </h3> */}
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700"
          >
            {[
              { icon: <Search className="h-6 w-6 text-purple-500" />, text: "Understand the problem before writing a single line of code." },
              { icon: <FileText className="h-6 w-6 text-purple-500" />, text: "Design APIs that are intuitive, documented, and testable." },
              { icon: <Zap className="h-6 w-6 text-purple-500" />, text: "Leverage automation & infrastructure-as-code for reliability." },
              { icon: <RefreshCw className="h-6 w-6 text-purple-500" />, text: "Iterate quickly based on feedback and metrics." }
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Highlights & Passions Compact Cards */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Highlights & Passions</h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" animate="visible" variants={containerVariants}>
            {highlightItems.map((item, i) => (
              <motion.div key={i} variants={itemVariants} 
              className={`relative bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:shadow-2xl hover:-translate-y-2 flex items-start space-x-4 ${
                i % 2 === 0 ? "rotate-1 hover:rotate-0" : "-rotate-1 hover:rotate-0"
              }`}
              // className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 flex items-start space-x-4"
              >
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Let’s Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
}