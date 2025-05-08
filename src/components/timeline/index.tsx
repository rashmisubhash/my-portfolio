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
  link_company?: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const percent = items.length > 1 ? (selectedIndex / (items.length - 1)) * 100 : 0;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#D8CEE9]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 8px)",
        backgroundSize: "400px 400px",
      }}
    >

      {/* Soft blob accent */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-300 rounded-full filter blur-2xl opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto py-20 px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
          Experience
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center mb-12">
          My journey over the years!!
        </p>

        {/* Timeline bar */}
        <div className="relative pt-6 mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-1 bg-black rounded-full" />
          </div>
          <motion.div
            className="absolute inset-0 flex items-center"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="w-full h-1 bg-purple-500 rounded-full" />
          </motion.div>

          <div className="relative flex justify-between items-center">
            {items.map((item, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="flex flex-col items-center focus:outline-none"
                >
                  <div
                    className={
                      `w-10 h-10 flex items-center justify-center rounded-full transition-shadow ` +
                      (isActive
                        ? 'ring-2 ring-purple-500 shadow-md'
                        : 'opacity-60') +
                      (item.company === 'AWS' ? ' bg-black' : ' bg-white')
                    }
                  >
                    {item.iconUrl || item.logo ? (
                      <Image
                        src={item.iconUrl || item.logo!}
                        alt={item.title}
                        width={20}
                        height={20}
                        className={isActive ? '' : 'opacity-50'}
                      />
                    ) : (
                      <span
                        className={
                          `block w-4 h-4 rounded-full ` +
                          (isActive ? 'bg-purple-500' : 'bg-gray-400')
                        }
                      />
                    )}
                  </div>
                  <span
                    className={
                      `mt-2 text-xs font-medium transition-colors ` +
                      (isActive ? 'text-purple-700' : 'text-gray-500')
                    }
                  >
                    {item.date}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Detail card */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-2 mt-0">
            {items[selectedIndex].title}, {' '}
            <a
              href={items[selectedIndex].link_company}
              className="text-yellow-300 underline hover:text-yellow-200"
            >
              {items[selectedIndex].company}
            </a>
          </h3>
          <ul className="mt-2 list-disc list-inside space-y-1 font-medium">
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