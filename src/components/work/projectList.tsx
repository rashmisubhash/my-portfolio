// src/components/projectList.tsx
"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { ProjectDataProps, BlogsDataProps } from "@/src/typings";

// Tech stack pills (max height, scroll if overflow)
const TechStack = ({ tech }: { tech: string }) => (
  <div className="mt-4 flex gap-2 flex-wrap max-h-20 overflow-y-auto">
    {tech.split(",").map((t) => (
      <span key={t} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
        {t.trim()}
      </span>
    ))}
  </div>
);

type Item = ProjectDataProps | BlogsDataProps;
type ProjectListProps = {
  data: Item[];
  setSelectedProjectIndex: (idx: number) => void;
};

const isProject = (item: Item): item is ProjectDataProps =>
  (item as ProjectDataProps).techUsed !== undefined;

/**
 * Renders a list of cards. Work.tsx handles layout and visibility.
 */
const ProjectList = ({ data, setSelectedProjectIndex }: ProjectListProps) => (
  <>
    {data.map((item, idx) => (
      <article
        key={idx}
        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
        role="article"
        aria-labelledby={`card-title-${idx}`}
      >
        {/* Cover Image */}
        <div className="relative w-full aspect-video">
          <Image
            src={item.cover}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content + Tech Stack */}
        <div className="p-6 flex flex-col flex-grow">
          <h3
            id={`card-title-${idx}`}
            className="font-blacker text-2xl mb-2 text-black group-hover:text-purple-700 transition-colors duration-200"
          >
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>
          {isProject(item) && <TechStack tech={item.techUsed} />}
        </div>

        {/* Actions pinned at bottom */}
        <div className="p-6 pt-0 flex flex-wrap gap-3 mt-auto mx-auto">
          {isProject(item) && item.githubLink && (
            <a
              href={item.githubLink}
              onClick={() => setSelectedProjectIndex(idx)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full hover:bg-gray-200 transition"
            >
              <span aria-hidden="true">💻</span>
              <span>Code</span>
            </a>
          )}
          {isProject(item) && (item as ProjectDataProps).externalLink && (
            <a
              href={(item as ProjectDataProps).externalLink!}
              onClick={() => setSelectedProjectIndex(idx)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full hover:bg-gray-200 transition"
            >
              <span aria-hidden="true">📄</span>
              <span>Docs</span>
            </a>
          )}
          {isProject(item) && (item as ProjectDataProps).externalLink && (
            <a
              href={(item as ProjectDataProps).externalLink!}
              onClick={() => setSelectedProjectIndex(idx)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full hover:bg-gray-200 transition"
            >
              <span aria-hidden="true">🎥</span>
              <span>Demo</span>
            </a>
          )}
          {!isProject(item) && (item as BlogsDataProps).externalLink && (
            <a
              href={(item as BlogsDataProps).externalLink!}
              onClick={() => setSelectedProjectIndex(idx)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full hover:bg-gray-200 transition"
            >
              <span aria-hidden="true">📄</span>
              <span>Read Blog</span>
            </a>
          )}
        </div>
      </article>
    ))}
  </>
);

export default ProjectList;