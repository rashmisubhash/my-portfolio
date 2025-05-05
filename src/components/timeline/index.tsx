// components/Timeline.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type TimelineItem = {
  date: string;
  title: string;
  company: string;
  description?: string;
  bullets: string[];
  logo?: string;
  iconUrl?: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const percent =
    items.length > 1 ? (selectedIndex / (items.length - 1)) * 100 : 0;

  return (
    <section className="relative text-gray-900 bg-gradient-to-b from-purple-50 to-purple-50">

      <div className="relative z-10 max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Experience
        </h2>

        {/* Timeline bar */}
        <div className="relative mb-16">
          {/* base line */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-1 bg-gray-300 rounded-full" />
          </div>

          {/* progress fill */}
          <motion.div
            className="absolute inset-0 flex items-center"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-full h-1 bg-purple-500 rounded-full" />
          </motion.div>

          {/* icons */}
          <div className="relative flex justify-between items-center">
            {items.map((item, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className="flex flex-col items-center focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white transition-shadow ${
                      isActive
                        ? "ring-2 ring-purple-500 shadow-lg"
                        : "opacity-60 shadow-md"
                    }`}
                  >
                    {item.iconUrl || item.logo ? (
                      <Image
                        src={item.iconUrl || item.logo!}
                        alt={item.title}
                        width={24}
                        height={24}
                        className={isActive ? "" : "opacity-50"}
                      />
                    ) : (
                      <span
                        className={`block w-4 h-4 rounded-full ${
                          isActive ? "bg-purple-500" : "bg-gray-400"
                        }`}
                      />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium transition-colors ${
                      isActive ? "text-purple-700" : "text-gray-500"
                    }`}
                  >
                    {item.date}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail card — purple background, white text */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-purple-300 to-purple-600 text-white rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-3">
            {items[selectedIndex].title}
          </h3>
          <p className="text-sm italic mb-4">
            {items[selectedIndex].company}
          </p>
          {items[selectedIndex].description && (
            <p className="mb-4">{items[selectedIndex].description}</p>
          )}
          <ul className="list-disc list-inside space-y-2">
            {items[selectedIndex].bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
