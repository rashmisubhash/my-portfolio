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
          aboutSubline: "Building the backend with brains.",
          skillGroups: [
            {
              category: "Languages",
              items: [
                "Python",
                "JavaScript",
                "Java",
                "TypeScript",
                "HTML",
                "CSS3",
              ],
            },
            {
              category: "Frontend",
              items: ["React.js", "Next.js", "Material UI", "Bootstrap"],
            },
            {
              category: "Backend & APIs",
              items: ["FastAPI", "Node.js", "Boto3"],
            },
            {
              category: "Databases",
              items: ["DynamoDB", "MongoDB", "PostgreSQL", "MySQL"],
            },
            {
              category: "Infrastructure & DevOps",
              items: [
                "Lambda",
                "Step Functions",
                "API Gateway",
                "Bedrock",
                "Polly",
                "SageMaker",
                "Q",
                "S3",
                "EC2",
                "CloudWatch",
                "EventBridge",
                "IAM",
                "Websockets",
                "Cognito",
                "Docker",
                "CI/CD",
                "Git & GitHub",
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
              name: "Swift AI Aid",
              description:
              "Emergency response reimagined. SwiftAid connects users to nearby help during emergencies with real-time location sharing, instant alerts, and community-driven assistance.",
              cover: "/images/projects/swiftaid.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS, Bedrock, Lambda, Connect, Transcribe, Kinesis, Comprehend, Python, Boto3, FastAPI, Flutter, GENAI, Anthropic, Claude, Serverless, Websockets",
              externalLink: "https://devpost.com/software/swiftaid-zd3y6k",
              githubLink: "https://github.com/rashmisubhash/swift-aid-backend",
              demoLink: "https://majestic-cajeta-15bf7d.netlify.app",
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
                    name: "Ergonomic Risk Assessment",
                    description:
                      "Built real-time CloudTrail monitoring and automatic escalation for 35K+ APIs, cutting incident response latency by 80%.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS EC2, React.js, Flask",
                  },
                  {
                    name: "Ergonomic Risk Assessment",
                    description:
                      "Cut investigation time from 30 to 10 days by deploying a serverless root-cause pipeline across 354 AWS services.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS EC2, React.js, Flask",
                  },
                  {
                    name: "Ergonomic Risk Assessment",
                    description:
                      "Launched automated monthly compliance reporting via EventBridge workflows, reducing review from 40 to 2 hours.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS EC2, React.js, Flask",
                  },
                  {
                    name: "Ergonomic Risk Assessment",
                    description:
                      "Migrated off legacy platform by creating integration guides and using Bedrock LLM on 8K+ tickets for smoother handoffs.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS EC2, React.js, Flask",
                  },
                ],
              },
              {
                key: "durandal",
                companyTitle: "Durandal Lab, Rutgers University",
                duration: "Jun 2024 – Aug 2024",
                role: "Research Assistant",
                logo: "/images/work/rutgers.png",
                link_company: "https://www.rutgers.edu/",
                projects: [
                  {
                    name: "Ergonomic Risk Assessment",
                    description:
                      "Streamlined a Flask service for risk assessment by processing over 500 images daily, reduced manual review time by 60%",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS EC2, React.js, Flask",
                  },
                  {
                    name: "Vehicle Speed Estimation",
                    description:
                      "Deployed a real-time highly-scalable solution to estimate the speed of the vehicle with AWS IVS, increasing throughput 30%.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS IVS",
                  },
                  {
                    name: "Vehicle Speed Estimation",
                    description:
                      "Orchestrated ML inference on EC2, optimizing frontend-to-model flow and reducing latency 40%.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS IVS",
                  },
                  
                ],
              },
              {
                key: "konfhub-lead",
                companyTitle: "KonfHub Technologies LLP",
                duration: "Jan 2020 – Oct 2023",
                role: "Lead Software Engineer",
                logo: "/images/work/kh.png",
                link_company: "https://konfhub.com/",
                projects: [
                  {
                    name: "CertHub",
                    description:
                      "Spearheaded end-to-end platform revamp, launching 12+ features that scaled user engagement to over 300K participants.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS DynamoDB, S3, React.js",
                  },
                  {
                    name: "Agile Team Leadership",
                    description:
                      "Architected a referral system with Stripe payments and real-time leaderboards, driving a 5x increase in event registrations.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Jira, GitHub Actions",
                  },
                  {
                    name: "Women at KonfHub Initiative",
                    description:
                      "Led Agile delivery for a 20-person team, increasing sprint velocity 30% and accelerating release cadence.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Eventbrite, Zoom",
                  },
                  {
                    name: "Women at KonfHub Initiative",
                    description:
                      "Scaled backend event infrastructure to support 1,200+ global events with zero downtime during rollout.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Eventbrite, Zoom",
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
