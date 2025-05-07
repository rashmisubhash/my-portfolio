"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  PenTool,
  Server,
  Users,
  Notebook,
  Trophy,
  UserPlus,
} from "lucide-react";
import myself from "/public/images/hero/my_photo.png";
import myselfWink from "/public/images/hero/myself-wink_sotgys.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-300 to-purple-600">
      {/* Morphing background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-400 opacity-20 rounded-full animate-blob1 mix-blend-multiply" />
      <div className="absolute -bottom-40 right-0 w-80 h-80 bg-indigo-500 opacity-20 rounded-full animate-blob2 mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* TEXT & STATS */}
        <div className="md:col-span-2 space-y-8 text-[rgba(255,255,255,0.95)] text-hero">
          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            {[
              "I’m ",
              "Rashmi Subhash",
              // "\nEngineer & Educator",
            ].map((t, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={
                  i === 1
                    ? "block heading-text"
                    : "block"
                }
              >
                {t}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg max-w-2xl text-[rgba(255,255,255,0.85)]"
          >
            Crafting scalable web platforms & empowering future engineers
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm text-[rgba(255,255,255,0.9)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              {
                Icon: PenTool,
                label: "Engineer",
                text: "Designing end-to-end solutions",
              },
              {
                Icon: Server,
                label: "AWS Builder",
                text: "Community Builder & Speaker",
              },
              {
                Icon: Users,
                label: "Mentor",
                text: "Guided 80+ students",
              },
              {
                Icon: Notebook,
                label: "Blogger",
                text: "Monthly technical blogs",
              },
              {
                Icon: Trophy,
                label: "Hackathons",
                text: "2+ award-winning prototypes",
              },
              {
                Icon: UserPlus,
                label: "Advocate",
                text: "Championing Women in Tech",
              },
            ].map(({ Icon, label, text }, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <Icon className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                <div className="mt-1">
                  <strong>{label}:</strong> {text}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#projects"
            className="inline-block mt-8 px-6 py-3 bg-yellow-300 text-purple-900 font-semibold rounded-lg shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
          >
            Explore My Portfolio
          </motion.a>
        </div>

        {/* AVATAR */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <div className="group relative w-64 h-80 sm:w-72 sm:h-96">
            {/* Glow ring */}
            <div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-yellow-300 to-pink-400 blur-xl opacity-60"
              aria-hidden="true"
            />

            {/* Photo card */}
            <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-shadow duration-300">
              <Image
                src={myself}
                alt="Portrait of Rashmi"
                fill
                style={{ objectFit: "cover" }}
              />
              <Image
                src={myself}
                alt="Portrait of Rashmi winking"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Hover hint */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md px-3 py-1 rounded-full text-purple-900 text-xs">
              Hover to Wink 😉
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C360,96 1080,0 1440,64 L1440,120 L0,120 Z"
          fill="white"
        />
      </svg>

      {/* CSS for blobs, gradient text, shadows */}
      <style jsx global>{`
        @keyframes blob1 {
          0%,100% {
            border-radius: 50% 50% 40% 60%;
            transform: translate(0,0) scale(1);
          }
          33% {
            border-radius: 60% 40% 70% 30%;
            transform: translate(20px,-10px) scale(1.1);
          }
          66% {
            border-radius: 40% 60% 30% 70%;
            transform: translate(-20px,10px) scale(0.9);
          }
        }
        @keyframes blob2 {
          0%,100% {
            border-radius: 55% 45% 60% 40%;
            transform: translate(0,0) scale(1);
          }
          33% {
            border-radius: 45% 55% 30% 70%;
            transform: translate(-10px,20px) scale(1.05);
          }
          66% {
            border-radius: 65% 35% 50% 50%;
            transform: translate(10px,-20px) scale(0.95);
          }
        }
        .animate-blob1 {
          animation: blob1 12s ease-in-out infinite;
        }
        .animate-blob2 {
          animation: blob2 15s ease-in-out infinite;
        }
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .heading-text {
          background: linear-gradient(90deg, #FFD54F, #F06292, #AB47BC);
          background-size: 200% 200%;
          animation: textGradient 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-hero {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}