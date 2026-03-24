// components/AboutMe.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { AboutSectionProps } from "@/src/typings";
import {
  Search,
  FileText,
  Zap,
  RefreshCw,
  Users,
  Award,
  Calendar,
  BookOpen,
  Music,
  Megaphone,
  Trophy
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Motion variants for list animations
const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const highlightItems = [
  { icon: <BookOpen className="h-6 w-6 text-purple-500" />, title: "CodePath Alumni", detail: "Completed Advanced Web Dev course with honors." },
  { icon: <Calendar className="h-6 w-6 text-purple-500" />, title: "RTC Member", detail: "Active in Rutgers Women in Tech community." },
  { icon: <Users className="h-6 w-6 text-purple-500" />, title: "Mentor & VP", detail: "Guided 80+ students at Blueprint Tech Club." },
  { icon: <Calendar className="h-6 w-6 text-purple-500" />, title: "AWS User Group", detail: "4x AWS Community Builder & Community Days NYC organizer." },
  { icon: <Award className="h-6 w-6 text-purple-500" />, title: "5x Hackathon Winner", detail: "AI & Cloud Systems—GreenPioneers: Most Technically Polished." },
  { icon: <Megaphone className="h-6 w-6 text-purple-500" />, title: "Tech Speaker", detail: "Spoke at AWS community events on serverless & AI systems.", link: "https://www.youtube.com/watch?v=b2isGkOxzNw&t=2672s" },
  // { icon: <Music className="h-6 w-6 text-purple-500" />, title: "Creative Outlet", detail: "Dancing, singing, and guitar fuel my creativity." }
];
export default function AboutMe({ data }: { data: AboutSectionProps }) {
  // Simplified narrative focused on backend SDE, curiosity, and advocacy
  return (
    <section id="about" className="bg-white py-16" aria-labelledby="about-title">
      <div className="container mx-auto px-6 lg:px-8 space-y-12">
        {/* Title */}
        <motion.h2
          id="about-title"
          className="text-4xl font-extrabold text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Narrative */}
        <motion.div
          className="prose prose-lg prose-gray max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            I’m <strong>Rashmi Subhash</strong>, a software engineer focused on building AI systems that ship reliably to real users, and the infrastructure that powers them at scale.
          </p>

          <p>
            Most recently, I completed my SDE internship at Amazon on the CloudTrail team, where I designed and deployed a <strong>Bedrock-powered LLM pipeline</strong> for incident classification—achieving <strong>90% validation accuracy</strong> while saving <strong>$250K annually</strong>. I also built a serverless incident automation system that eliminated manual triage for <strong>350+ AWS services</strong>, using <strong>deterministic routing logic, DynamoDB conditional writes, and structured JSON workflows</strong> to ensure zero-collision state across distributed Lambda workers. The work combined real-time telemetry pipelines, compliance automation, and reliability engineering at massive scale.
          </p>

          <p>
            Before that, I was a Senior Software Engineer at KonfHub, where I helped revamp and scale the platform to <strong>300K+ users</strong> across <strong>1,200+ global events</strong>. I shipped a <strong>Stripe-integrated referral and payment system</strong> that increased platform revenue by <strong>$2M</strong>, implemented real-time leaderboards and automated settlement workflows, optimized RESTful APIs under peak load (reducing P95 latency via PostgreSQL indexing and Redis caching), and built Docker-based CI/CD pipelines with blue/green deployments that <strong>reduced deployment failures by 40%</strong>—all while maintaining <strong>99.95% uptime</strong> during high-concurrency ticket launches.
          </p>

          <p>
            I’ve also built production AI projects that showcase the constraints I care about: <strong>Smile Sync</strong>, an AI receptionist handling appointment scheduling with multi-turn dialogue, prompt versioning, and output validation layers ensuring <strong>deterministic responses</strong> for healthcare workflows. <strong>Swift AI Aid</strong>, an emergency response system answering 911 callers in under 2 seconds using Claude on Bedrock with streaming speech-to-text and real-time sentiment analysis, scaled to <strong>10K+ concurrent calls</strong> via event-driven Step Functions. <strong>PartSelect AI Agent</strong>, a hybrid deterministic router combining regex with LLM intent classification, achieving <strong>sub-1.5ms latency</strong> with <strong>confidence-gated responses</strong> and hallucination prevention via triple validation. And <strong>RUCarpooling</strong>, a geohash-based ride-matching platform with Claude-powered context management for peer-to-peer carpooling.
          </p>

          <p>
            Lately, I’ve been especially interested in <strong>reliability engineering for agentic AI</strong>—building systems that handle messy real-world inputs (healthcare compliance, emergency constraints, ambiguous user queries) without hallucinating, using <strong>structured outputs, confidence scoring, and validation layers</strong> as first-class design patterns.
          </p>

          <p>
            Outside of work, I’m an <strong>AWS Community Builder</strong> and <strong>Vice President of Blueprint Tech Club</strong>, where I mentor students, run workshops, and help others grow in tech. I do my best work in environments where ownership is high, the team moves fast, and the problem is worth solving.
          </p>

        {/* Recently, I’ve shipped <strong>LLM-backed agents</strong> with Amazon Bedrock and
        <strong>real-time voice experiences</strong> using Transcribe &amp; Polly, adding personalization
        and faster feedback loops to apps. I mentor engineers, speak at AWS community events,
        and champion women in tech.
      </p> */}
          {/* <p>
            My journey began experimenting with simple APIs, today I architect complex data pipelines on AWS, mentor emerging developers, and speak on topics ranging from Lambda best practices to cloud-native design. As a champion for women in tech, I strive to create inclusive environments through mentorship and community events.
          </p> */}
        </motion.div>

        {/* My Approach */}
        <div className="max-w-3xl mx-auto">
          {/* <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            My Approach
          </h3> */}
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700"
          >
            {[
              { icon: <Search className="h-6 w-6 text-purple-500" />, text: "Understand the problem before writing a single line of code." },
              { icon: <FileText className="h-6 w-6 text-purple-500" />, text: "Design APIs that are intuitive, documented, and testable." },
              { icon: <Zap className="h-6 w-6 text-purple-500" />, text: "Leverage automation & infrastructure-as-code for reliability." },
              { icon: <RefreshCw className="h-6 w-6 text-purple-500" />, text: "Iterate quickly based on feedback and metrics." }
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Highlights & Passions Compact Cards */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Highlights & Passions</h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" animate="visible" variants={containerVariants}>
            {highlightItems.map((item, i) => (
              <motion.div key={i} variants={itemVariants}
              className={`relative bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:shadow-2xl hover:-translate-y-2 flex items-start space-x-4 ${
                i % 2 === 0 ? "rotate-1 hover:rotate-0" : "-rotate-1 hover:rotate-0"
              }`}
              >
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.detail}</p>
                  {"link" in item && item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-xs hover:underline mt-1 inline-block">
                      Watch talk →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}