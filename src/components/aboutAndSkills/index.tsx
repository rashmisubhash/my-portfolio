// components/AboutMe.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { AboutSectionProps } from "@/src/typings";
import { GraduationCap, Handshake, Globe } from "lucide-react";

export default function AboutMe({ data }: { data: AboutSectionProps }) {
  const { aboutTitle, aboutSubline } = data;

  const highlights = [
    {
      Icon: GraduationCap,
      title: "MS Computer Science",
      detail: "Rutgers University (’24–’25)",
    },
    {
      Icon: Handshake,
      title: "VP, Blueprint Tech Club",
      detail: "Mentoring & community leadership",
    },
    {
      Icon: Globe,
      title: "Volunteer, Crowd2Map Tanzania",
      detail: "Mapping for social impact",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-10 md:py-10"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-6 lg:px-8 space-y-12">
        {/* Title & Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            {aboutTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{aboutSubline}</p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="prose prose-lg prose-gray max-w-3xl mx-auto"
        >
          <p className="lead">
            Hi there! I’m <strong>Rashmi Subhash</strong>—a backend engineer & AWS
            enthusiast on a mission to turn complex problems into elegant,
            serverless solutions.
          </p>
          <p>
            Whether it’s architecting carbon-reducing carpool platforms or
            building feedback systems for 40k+ users, I love marrying code with
            data to drive real impact.
          </p>
          <p>
            Outside of the terminal, I co-lead Blueprint’s tech community,
            share what I learn at AWS meetups, and map underserved regions in
            Tanzania with Crowd2Map—all to empower communities through
            thoughtful, data-driven innovation.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {highlights.map(({ Icon, title, detail }) => (
            <li
              key={title}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">{detail}</p>
              </div>
            </li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow hover:bg-purple-700 transition"
          >
            View My Work
          </a>
          <a
            href="#blog"
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition"
          >
            Read My Blog
          </a>
        </motion.div>
      </div>
    </section>
  );
}
