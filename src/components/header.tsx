import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">Aneesa Shaik</div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden">
          <Icon icon="mdi:menu" className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;