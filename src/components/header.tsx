import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Rashmi Birur Subhash</div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-purple-200 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden">
          <Icon icon="mdi:menu" className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;