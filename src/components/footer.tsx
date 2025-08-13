import React from "react";
import { FooterProps } from "../typings";
import { Icon } from "@iconify/react";

const Footer = ({ data }: { data: FooterProps }) => {
  const { copyright, attributions } = data;

  const socialLinks = [
    { name: "LinkedIn", icon: "mdi:linkedin", url: "https://www.linkedin.com/in/rashmisubhash/" },
    { name: "GitHub", icon: "mdi:github", url: "https://github.com/rashmisubhash" },
    { name: "Email", icon: "mdi:email", url: "mailto:rashmi.bsubash@gmail.com" },
    { name: "Blog", icon: "mdi:rss", url: "https://rashmisubhash.hashnode.dev" },
    { name: "Projects", icon: "mdi:folder-multiple", url: "https://devpost.com/rashmisubhash" }
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-8 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label={link.name}
            >
              <Icon icon={link.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-gray-300 mb-2">{copyright}</p>
        <p className="text-gray-400 text-sm">{attributions}</p>
      </div>
    </footer>
  );
};

export default Footer;