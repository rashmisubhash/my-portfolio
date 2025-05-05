import React from "react";
import { AboutSectionProps } from "@/src/typings";
import {
  Code,
  Layout,
  CloudCog,
  Database,
  Server,
} from "lucide-react";

const categoryIcons: Record<string, JSX.Element> = {
  Languages: <Code className="w-5 h-5 text-purple-600" />,
  Frontend: <Layout className="w-5 h-5 text-purple-600" />,
  "Backend & APIs": <CloudCog className="w-5 h-5 text-purple-600" />,
  Databases: <Database className="w-5 h-5 text-purple-600" />,
  "Infrastructure & DevOps": <Server className="w-5 h-5 text-purple-600" />,
};

const SkillBricks = ({ data }: { data: AboutSectionProps }) => {
  const { skillGroups, skillsTitle, skillsSubline } = data;

  return (
    <section id="skills" className="relative py-20 bg-white">
      {/* Section header */}
      <div className="text-center mb-8 px-4">
        <h2 className="font-blacker text-5xl mb-2">{skillsTitle}</h2>
        <p className="mt-4 text-lg text-gray-600">{skillsSubline}</p>
      </div>

      {/* Card container */}
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

        {/* The white “box” */}
        <div className="bg-white rounded-b-3xl pt-10 pb-10 px-8 shadow-xl">
          <ul className="space-y-6">
            {skillGroups.map(({ category, items }) => (
              <li key={category} className="flex flex-col">
              <div className="flex items-center mb-2">
                {categoryIcons[category]}
                <span className="font-bold text-lg text-gray-900">
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

        {/* Bottom wave divider */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden h-8">
          <svg
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0 C300,80 900,-80 1200,0 L1200,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SkillBricks;
