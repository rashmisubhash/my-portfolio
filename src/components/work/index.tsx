// src/components/Work.tsx
"use client";

import React, { useState, useMemo } from "react";
import { ProjectsAndBlogsProps } from "@/src/typings";
import ProjectTabs from "./projectTabs";
import ProjectList from "./projectList";
import { TabGroup, TabList, TabPanels } from "@headlessui/react";

// Three.js imports
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

/**
 * Work section showcasing Projects & Blogs with 3D floating spheres and animated blobs.
 */
const Work = ({ data }: { data: ProjectsAndBlogsProps }) => {
  const { projects, blogs } = data;
  const tabs = [
    { name: "Projects", items: projects, description: "Featured hands-on builds with cloud and AI tech.", placeholder: "Search Projects..." },
    { name: "Blogs",    items: blogs,    description: "Technical articles and insights.", placeholder: "Search Blogs..." }
  ] as const;

  const [selectedTab, setSelectedTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const items = tabs[selectedTab].items;
  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return items;
    return items.filter(item => {
      const n = item.name.toLowerCase();
      const d = (item.description || "").toLowerCase();
      const t = "techUsed" in item ? (item.techUsed as string).toLowerCase() : "";
      return n.includes(term) || d.includes(term) || t.includes(term);
    });
  }, [searchTerm, items]);

  return (
    <section
    className="relative py-24 bg-[#D8CEE9] overflow-hidden"
    style={{
      backgroundImage:
        "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25), transparent 25%), " +
        "radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2), transparent 30%), " +
        "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 8px)",
      backgroundSize: "400px 400px",
    }}
  >

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-0 text-center">
      <h2 className="text-5xl font-black">
          Projects & Blogs
        </h2>
        <p className="mt-2 text-lg text-gray-600 pb-3">
          {tabs[selectedTab].description}
        </p>

        {/* Search & Count */}
        <input
          type="search"
          placeholder={tabs[selectedTab].placeholder}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="mt-5 w-full max-w-lg mx-auto mb-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 transition"
        />
        <p className="text-sm text-gray-500 mb-12">{filtered.length} {filtered.length===1? 'item':'items'} found</p>

        <TabGroup manual selectedIndex={selectedTab} onChange={i => { setSelectedTab(i); setSearchTerm(""); }}>
          <TabList className="flex justify-center w-full space-x-12 border-b-2 border-gray-300 mb-8" role="tablist">
            {tabs.map((t,i) => (
              <ProjectTabs key={i} label={t.name} isSelected={i===selectedTab} onClick={() => setSelectedTab(i)} />
            ))}
          </TabList>

          <TabPanels>
            {filtered.length>0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((item, idx) => (
                  <li key={idx} className="h-full">
                    <ProjectList data={[item]} setSelectedProjectIndex={() => {}} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No {tabs[selectedTab].name.toLowerCase()} match your search.</p>
            )}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}

export default Work;
