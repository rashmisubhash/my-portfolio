"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [visitorInfo, setVisitorInfo] = useState({
    name: "",
    email: "",
    company: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `Name: ${visitorInfo.name}%0D%0AEmail: ${visitorInfo.email}%0D%0ACompany: ${visitorInfo.company || 'Not provided'}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:rashmi.bsubash@gmail.com?subject=Portfolio Contact from ${visitorInfo.name}&body=${emailBody}`;
    
    // Reset form
    setMessage("");
    setVisitorInfo({ name: "", email: "", company: "" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-purple-50 transition-colors flex items-center gap-2"
      >
        <Icon icon="mdi:chat" className="w-4 h-4" />
        Let's Chat
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Let's Connect!</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Icon icon="mdi:close" className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={visitorInfo.name}
                  onChange={(e) => setVisitorInfo({...visitorInfo, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={visitorInfo.email}
                  onChange={(e) => setVisitorInfo({...visitorInfo, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Company (Optional)"
                  value={visitorInfo.company}
                  onChange={(e) => setVisitorInfo({...visitorInfo, company: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;