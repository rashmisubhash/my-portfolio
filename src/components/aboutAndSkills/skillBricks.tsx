"use client";
import React, { useMemo } from "react";
import { Disclosure } from "@headlessui/react";
import { AboutSectionProps } from "@/src/typings";

import {
  Brain,
  Code,
  Server,
  Database,
  Zap,
} from "lucide-react";

const categoryIcons: Record<string, JSX.Element> = {
  "AI / LLM Systems": <Brain className="w-5 h-5 text-purple-600" />,
  "Languages & Frameworks": <Code className="w-5 h-5 text-purple-600" />,
  "Cloud & Infrastructure": <Server className="w-5 h-5 text-purple-600" />,
  "Databases & Data": <Database className="w-5 h-5 text-purple-600" />,
  "Core Engineering": <Zap className="w-5 h-5 text-purple-600" />,
};

const SkillBricks = ({ data }: { data: AboutSectionProps }) => {
  const { skillGroups, skillsTitle, skillsSubline } = data;

  // Pull AI/LLM first, then Cloud for the hero grid
  const aiItems = skillGroups.find(g => g.category === "AI / LLM Systems")?.items || [];
  const cloudItems = skillGroups.find(g => g.category === "Cloud & Infrastructure")?.items || [];

  // Hero grid: AI skills first, then cloud, capped at 10
  const primarySkills = [...aiItems, ...cloudItems].slice(0, 10);

  return (
    <section id="skills" className="py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-5xl font-black">{skillsTitle}</h2>
        <p className="mt-2 text-lg text-gray-600">{skillsSubline}</p>
      </div>

      {/* Hero grid (core 10 skills) */}
      <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto mb-8">
        {primarySkills.map(skill => (
          <span
            key={skill}
            className="
              px-4 py-2
              rounded-full
              bg-purple-600 text-white
              font-semibold text-sm
              hover:bg-purple-700
              transition
            "
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Reveal-all panel */}
      <Disclosure as="div" className="max-w-screen-md mx-auto">
        {({ open }) => (
          <>
            <Disclosure.Button className="mx-auto block text-sm text-purple-600 hover:underline">
              {open ? "Hide all tools" : "View all tools"}
            </Disclosure.Button>

            <Disclosure.Panel className="mt-6 space-y-8">
              <div className="relative mx-auto max-w-screen-lg px-4">
                {/* Top wave divider */}
                <div className="absolute -top-1 left-0 w-full overflow-hidden h-8">
                  <svg
                    viewBox="0 0 1200 80"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M0,80 C300,0 900,160 1200,80 L1200,0 L0,0 Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* The white box */}
                <div className="bg-white rounded-b-3xl pt-10 pb-10 px-8 shadow-xl">
                  <ul className="space-y-6">
                    {skillGroups.map(({ category, items }) => (
                      <li key={category} className="flex flex-col">
                        <div className="flex items-center mb-2">
                          {categoryIcons[category]}
                          <span className="ml-2 font-bold text-lg text-gray-900">
                            {category}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 flex-1">
                          {items.map((skill) => (
                            <span
                              key={skill}
                              className="bg-purple-300 to-purple-600 whitespace-nowrap border-2 border-red-950/30 text-red-950 font-homevideo text-lg px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  );
};

export default SkillBricks;
