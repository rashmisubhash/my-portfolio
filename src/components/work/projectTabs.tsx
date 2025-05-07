// src/components/projectTabs.tsx
"use client";

import React from "react";
import clsx from "clsx";

/**
 * Simplified horizontal tabs with clear spacing and bottom indicator.
 */
const ProjectTabs = ({ label, isSelected, onClick }: { label: string; isSelected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={clsx(
      "px-4 pb-2 text-lg font-medium transition-colors focus:outline-none",
      isSelected
        ? "text-purple-700 border-b-4 border-purple-700"
        : "text-gray-600 hover:text-purple-700"
    )}
    role="tab"
    aria-selected={isSelected}
  >
    {label}
  </button>
);

export default ProjectTabs;