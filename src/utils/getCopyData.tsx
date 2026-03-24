// import { DataProps } from "../typings";
// import sanitizeResponse from "./sanitizeResponse";

// export type ReturnedResponse = {
//   data: DataProps | null;
//   error: null | Error;
// };

// const getCopyData = async (): Promise<ReturnedResponse> => {
//   try {
//     const response = await fetch(`${process.env.CMS_URL}`, {
//       cache: "no-store",
//     });
//     if (!response.ok) {
//       throw new Error("Data not found");
//     }
//     const unsafeJSON = await response.json();
//     const { data }: { data: DataProps } = sanitizeResponse(unsafeJSON);
//     return { data, error: null };
//   } catch (error) {
//     return { data: null, error };
//   }
// };

// export default getCopyData;

import { DataProps } from "../typings";
import sanitizeResponse from "./sanitizeResponse";

export type ReturnedResponse = {
  data: DataProps | null;
  error: null | Error;
};

const getCopyData = async (): Promise<ReturnedResponse> => {
  try {
    if (!process.env.CMS_URL) {
      // Fallback for local development
      const fallbackData: DataProps = {
        hero: {
          cards: {
            list: [
              {
                key: "intro",
                number: 1,
                line: "Backend Developer",
                icon: "💻",
                special: true,
              },
              {
                key: "intro",
                number: 3,
                line: "Professional Roles",
                icon: "💻",
                special: true,
              },
              {
                key: "intro",
                number: 3,
                line: "Professional Experience",
                icon: "💻",
                special: true,
              },
            ],
          },
        },
        about: {
          aboutTitle: "About Me",
          aboutSubline: "Building production AI systems—from customer problem to shipped product.",
          skillGroups: [
            {
              category: "AI / LLM Systems",
              items: [
                "Claude API",
                "Amazon Bedrock",
                "OpenAI API",
                "Prompt Engineering",
                "RAG",
                "Vector Search",
                "ChromaDB",
                "Structured Outputs",
                "Streaming Inference",
                "Multi-step Reasoning",
                "Hallucination Prevention",
                "LLM Orchestration",
                "Evaluation & Error Analysis",
                "Multi-turn Dialogue",
                "Context Management",
              ],
            },
            {
              category: "Languages & Frameworks",
              items: [
                "Python",
                "TypeScript",
                "JavaScript",
                "SQL",
                "Java",
                "FastAPI",
                "React.js",
                "Next.js",
                "Node.js",
                "REST APIs",
                "Boto3",
              ],
            },
            {
              category: "Cloud & Infrastructure",
              items: [
                "Lambda",
                "Step Functions",
                "API Gateway",
                "EventBridge",
                "SQS",
                "SNS",
                "SES",
                "Kinesis",
                "Transcribe",
                "Connect",
                "Comprehend",
                "Polly",
                "Bedrock",
                "S3",
                "DynamoDB",
                "CloudWatch",
                "IAM",
                "ECS",
                "EC2",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "GCP",
              ],
            },
            {
              category: "Databases & Data",
              items: [
                "DynamoDB",
                "PostgreSQL",
                "MySQL",
                "Redis",
                "MongoDB",
                "ChromaDB",
                "RDS",
                "Data Modeling",
              ],
            },
            {
              category: "Core Engineering",
              items: [
                "Real-time Systems",
                "Latency Optimization",
                "Reliability Engineering",
                "Concurrency Control",
                "Observability",
                "Rapid Prototyping",
                "Technical Scoping",
                "System Integration",
                "Production Debugging",
              ],
            },
          ],
          skillsTitle: "Skills",
          skillsSubline: "My stack and toolbelt",
          skills:
            "Python, FastAPI, AWS Lambda, Step Functions, DynamoDB, JavaScript, Reactjs, Nodejs, Nextjs, HTML, CSS3",
          timelineTitle: "My Journey",
          mobileButtons: {
            list: [{ label: "Explore", emoji: "🧭" }],
          },
          story: {
            list: [
              {
                title: "Intro",
                content:
                  "I'm a backend developer focused on serverless architectures, event-driven systems, and scaling solutions with AWS.",
              },
              {
                title: "Previously @ KonfHub",
                content:
                  "Led backend feature development and AWS integrations that scaled to 300k+ users across global tech events.",
              },
            ],
          },
          timeline: {
            list: [
              {
                title: "Rutgers University",
                date: "2024 - Present",
                role: "MS CS Student",
                image: "/images/work/kh.png",
                link_company: "https://www.rutgers.edu/",
                alt: "Rutgers",
                content:
                  "Pursuing my Master's and building cool backend stuff.",
                type: "life",
              },
            ],
          },
        },
        contact: {
          title: "Let's Connect",
          subline: "I'm always open to new opportunities.",
          employMe: "Looking to hire?",
          contactMe: "Want to chat?",
          links: {
            list: [
              {
                key: "github",
                label: "GitHub",
                logo: "github-icon.svg",
                url: "https://github.com/rashmisubhash",
              },
              {
                key: "email",
                label: "Email",
                logo: "mail-icon.svg",
                url: "mailto:rashmi@yourdomain.com",
              },
            ],
          },
        },
        projectsAndBlogs: {
          blogs: [
            {
              name: "Building a Real-Time Carpooling App with AWS",
              description:
                "Where rides meet friendships! Share rides, save money, cut emissions, and connect with fellow students. Smarter, greener, and more fun—RU Ready to Carpool? ",
              cover: "/images/projects/rucarpooling.png",
              externalLink:
                "https://rashmisubhash.hashnode.dev/building-a-real-time-carpooling-app-with-aws",
              keywords: "AWS",
            },
            {
              name: "A more advanced guide to the useState Hooks 🕕>🦸‍♀️",
              description:
                "Advanced topics, rules to follow, and avoiding mistakes when using the useState Hook.",
              cover: "/images/projects/usestate.png",
              externalLink:
                "https://rashmisubhash.hashnode.dev/a-more-advanced-guide-to-the-usestate-hooks",
              keywords: "React.js",
            },
            {
              name: "Complete beginner's guide on the useState Hooks 🕛>🦸‍♀️",
              description:
                "Beginner topics, rules to follow, and avoiding mistakes when using the useState Hook.",
              cover: "/images/projects/usestate.png",
              externalLink:
                "https://rashmisubhash.hashnode.dev/complete-beginners-guide-on-the-usestate-hooks",
              keywords: "React.js",
            },
          ],
          projects: [
            {
              name: "Smile Sync",
              description:
                "AI receptionist for dental clinics handling appointment scheduling and patient inquiries via natural language. Features multi-turn dialogue with prompt versioning, an output validation layer for deterministic responses, and model fallback strategies—production-ready for healthcare business workflows.",
              cover: "/images/projects/smilesync.png",
              media: "",
              mediaType: "image",
              techUsed:
                "FastAPI, Python, Claude AI, React, Prompt Engineering, Multi-turn Dialogue, Structured JSON, Output Validation, Latency Optimization",
              externalLink: "https://devpost.com/software/smile-sync",
            },
            {
              name: "The Dental Dispatcher",
              description:
                "Voice AI assistant that analyzes patient X-rays, explains results over phone calls, and manages prescription refill requests via conversational AI. Implements hallucination prevention through triple validation—regex checks, confidence scoring, and manual review flags—for high-stakes medical guidance.",
              cover: "/images/projects/dentaldispatcher.png",
              media: "",
              mediaType: "image",
              techUsed:
                "Python, Claude API, AWS Lex, Lambda, S3, Vision Models, Voice I/O, Hallucination Prevention, Confidence Scoring, Multi-step Reasoning",
              externalLink: "https://devpost.com/software/the-dental-dispatcher",
            },
            {
              name: "Swift AI Aid",
              description:
                "Real-time emergency AI assistant answering 911 callers in under 2 seconds using Claude AI on Bedrock with structured safety guidance. Streaming speech-to-text pipeline (AWS Transcribe + Kinesis) with real-time sentiment analysis detects distress; scaled to 10K+ concurrent emergency calls via event-driven Step Functions orchestration.",
              cover: "/images/projects/swiftaid.png",
              media: "",
              mediaType: "image",
              techUsed:
                "Claude, AWS Bedrock, Transcribe, Kinesis, Connect, DynamoDB, Comprehend, Step Functions, Lambda, Python, FastAPI, GENAI, Serverless",
              externalLink: "https://devpost.com/software/swiftaid-zd3y6k",
              githubLink: "https://github.com/rashmisubhash/swift-aid-backend",
              demoLink: "https://majestic-cajeta-15bf7d.netlify.app",
            },
            {
              name: "PartSelect AI Agent",
              description:
                "End-to-end AI customer support system built for PartSelect's appliance parts business. Hybrid deterministic router combines regex with LLM intent classification (sub-1.5ms latency), preventing hallucination via dual retrieval, confidence gating, and schema-safe structured outputs. 100% pass rate on all test cases.",
              cover: "/images/projects/partselect.png",
              media: "",
              mediaType: "image",
              techUsed:
                "FastAPI, Python, Next.js, TypeScript, ChromaDB, AWS Bedrock, Titan Embeddings, RAG, Vector Search, Structured Outputs, Hallucination Prevention, LLM Orchestration",
              githubLink: "https://github.com/rashmisubhash/rag-intel-llm",
            },
            {
              name: "RUCarpooling",
              description:
                "Where rides meet friendships! Share rides, save money, cut emissions, and connect with fellow students. Smarter, greener, and more fun—RU Ready to Carpool? ",
              cover: "/images/projects/rucarpooling.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS, CloudWatch, DynamoDB, Lambda, SES, API GateWay, Cognito, IAM, Python, Boto3, FastAPI, Flutter, GENAI, Anthropic, Claude, OSRM, Serverless, Websockets",
              externalLink: "https://devpost.com/software/rucarpooling-yoet12",
              githubLink: "https://github.com/rashmisubhash/RUCarpooling",
              demoLink: "https://vimeo.com/1054955277?share=copy",
            },
            {
              name: "EchoPod",
              description:
                "Welcome to EchoPod – Smart Audio Learning on the Go. Your personalized, AI-powered podcast learning experience",
              cover: "/images/projects/echopod.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS, Bedrock, CloudWatch, DynamoDB, Lambda, API GateWay, Step Functions, Cognito, IAM, Python, Boto3, FastAPI, Flutter, GENAI, Anthropic, Claude, Serverless, Websockets",
              externalLink: "https://devpost.com/software/echopod",
              githubLink: "https://github.com/rashmisubhash/RUCarpooling",
            },
            {
              name: "Stream Study",
              description:
                "An AI-powered platform that turns any topic into structured audio & video lessons—personalized, cloud-delivered, and ready for learning on the go.",
              cover: "/images/projects/streamstudy.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS, CloudWatch, DynamoDB, Lambda, Bedrock, API GateWay, Step Functions, Cognito, IAM, Python, Boto3, FastAPI, Flutter, GENAI, Claude, Serverless",
              externalLink: "https://devpost.com/software/streamstudy",
              githubLink: "https://github.com/aneesa2023/stream-study",
              demoLink: "https://vimeo.com/1070829224?share=copy",
            },
            {
              name: "LearnHub",
              description:
                "Smart Learning Paths in Seconds. Your personalized, AI-curated course builder with chapters, notes, and videos—tailored just for you.",
              cover: "/images/projects/learnhub.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS, Bedrock, CloudWatch, DynamoDB, Lambda, API GateWay, Step Functions, Cognito, IAM, Python, Boto3, FastAPI, Flutter, GENAI, Claude, Serverless",
              externalLink: "https://devpost.com/software/learnhub-j0opiu",
              githubLink: "https://github.com/aneesa2023/learnhub-backend",
            },
            {
              name: "Mentor Bridge",
              description:
                "Mentorship reimagined for women in tech. AI that matches you with mentors who get your goals, your voice, and your journey.",
              cover: "/images/projects/mentorbridge.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS, CloudWatch, MongoDB, Lambda, API GateWay, Step Functions, authO, IAM, Python, Boto3, FastAPI, Flutter, GENAI, Gemini, Serverless, Websockets",
              externalLink: "https://devpost.com/software/mentor-bridge",
              githubLink: "https://github.com/aneesa2023/mentor_bridge_backend",
              demoLink: "https://vimeo.com/1075025617",
            },
            {
              name: "Food Delivery App",
              description:
                "Real-world application using Serverless to Build your own Serverless Food Delivery App in 3 hours!",
              cover: "/images/projects/fooddel.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS, CloudWatch, MongoDB, Lambda, API GateWay, Step Functions, Cognito, IAM, Python, Boto3, FastAPI, React, Serverless, Websockets",
              externalLink:
                "https://srushithr.github.io/acd2022-serverless-workshop/",
              githubLink:
                "https://github.com/SrushithR/acd2022-serverless-workshop?tab=readme-ov-file",
              demoLink:
                "https://docs.google.com/presentation/d/19GNSGKPDX4rq1sOxp4P6fLkW9mBJ744N/edit?slide=id.g18eb3596b70_0_283#slide=id.g18eb3596b70_0_283",
            },
          ],
        },
        previousWork: {
          title: "Experience",
          subline: "Roles & Projects",
          companies: {
            list: [
              {
                key: "AWS",
                companyTitle: "AWS",
                duration: "May 2025 – Aug 2025",
                role: "SDE Intern",
                logo: "/images/work/aws.png",
                link_company: "https://aws.amazon.com/",
                projects: [
                  {
                    name: "CloudTrail Incident Automation",
                    description:
                      "Designed and deployed a serverless CloudTrail incident automation pipeline managing the full lifecycle of operational tickets—from CloudWatch alarm ingestion to escalation—integrating Lambda, EventBridge, SQS DLQs, and internal Sauron APIs with retry/backoff handling.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Lambda, EventBridge, SQS, CloudWatch, DynamoDB",
                  },
                  {
                    name: "Idempotent Incident Routing",
                    description:
                      "Eliminated manual incident triage for 350+ services by implementing idempotent routing logic using DynamoDB conditional writes, structured JSON workflows, and automated ownership rotation across on-call teams.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "DynamoDB, Lambda, Structured JSON",
                  },
                  {
                    name: "RCA Compliance Pipeline",
                    description:
                      "Enforced RCA compliance via telemetry pipelines (CloudWatch alarms + SLO monitoring), validating mandatory fields and escalating overdue incidents to managers and SecOps—ensuring 100% audit coverage, saving $250K annually.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "CloudWatch, SLO Monitoring, EventBridge",
                  },
                  {
                    name: "Bedrock LLM Ticket Classification",
                    description:
                      "Migrated 8,000+ legacy Sauron tickets by deploying a Bedrock-powered LLM classification pipeline with latency-optimized inference and batch processing, achieving 90% validation accuracy and saving $100K in support overhead.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS Bedrock, LLM, Batch Processing, Claude",
                  },
                ],
              },
              {
                key: "durandal",
                companyTitle: "Durandal Lab, Rutgers University",
                duration: "Jun 2024 – July 2024",
                role: "Research Assistant Developer",
                logo: "/images/work/rutgers.png",
                link_company: "https://www.rutgers.edu/",
                projects: [
                  {
                    name: "Video Analytics Pipeline",
                    description:
                      "Improved video analytics throughput by 30% by building an event-driven AWS IVS pipeline for concurrent streams.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS IVS, Event-driven Architecture",
                  },
                  {
                    name: "ML Concurrent Processing",
                    description:
                      "Reduced ML runtime by 40% via a fault-tolerant EC2-based concurrent processing system for 500+ daily jobs.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS EC2, Concurrent Processing",
                  },
                ],
              },
              {
                key: "konfhub-lead",
                companyTitle: "KonfHub Technologies LLP",
                duration: "Oct 2020 – March 2023",
                role: "Senior Software Engineer",
                logo: "/images/work/kh.png",
                link_company: "https://konfhub.com/",
                projects: [
                  {
                    name: "Distributed Microservices Architecture",
                    description:
                      "Redesigned scalable distributed microservices architecture to support 300K+ users and 1,200+ global events, achieving 99.95% uptime during high-concurrency ticket launches.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Microservices, PostgreSQL, AWS",
                  },
                  {
                    name: "Stripe Referral & Payment System",
                    description:
                      "Increased platform revenue by $2M by architecting a Stripe-integrated referral and global payment system with real-time leaderboards and automated settlement workflows.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Stripe, PostgreSQL, Redis, React.js",
                  },
                  {
                    name: "API Performance Optimization",
                    description:
                      "Optimized RESTful API performance under peak load via PostgreSQL schema design, indexing strategies, Redis caching, pagination, and rate limiting—reducing API P95 latency.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "PostgreSQL, Redis, Rate Limiting",
                  },
                  {
                    name: "CI/CD Blue/Green Deployments",
                    description:
                      "Reduced production deployment failures by 40% by implementing Docker-based CI/CD pipelines with blue/green deployments, ensuring zero-downtime releases across distributed services.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Docker, CI/CD, GitHub Actions",
                  },
                ],
              },
              
              
              {
                key: "sedin-intern",
                companyTitle: "Sedin Technologies LLP",
                duration: "July 2019 – August 2019",
                role: "SDE Intern",
                logo: "/images/work/sedin.png",
                link_company: "https://sedintechnologies.com/",
                projects: [
                  {
                    name: "Event Site Development",
                    description:
                      "Architected and optimized reusable UI components with modern JavaScript frameworks, HTML5 and CSS3, driving consistency and slashing maintenance overhead.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "HTML, CSS, AWS",
                  },
                  {
                    name: "API Integration",
                    description:
                      "Orchestrated collaboration with product managers, QA testers and backend engineers to streamline Agile processes, accelerating feature delivery and boosting team efficiency.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "JavaScript, REST",
                  },
                ],
              },
            ],
          },
        },
        // …rest of fallbackData…
        navigation: {
          list: [],
        },
        footer: {
          copyright: "© 2025 Rashmi Birur Subhash. All rights reserved.",
          attributions: "Made with ❤️ by Rashmi",
          links: {
            list: [],
          },
        },
      };

      return { data: fallbackData, error: null };
    }

    const response = await fetch(`${process.env.CMS_URL}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Data not found");
    }

    const unsafeJSON = await response.json();
    const { data }: { data: DataProps } = sanitizeResponse(unsafeJSON);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export default getCopyData;
