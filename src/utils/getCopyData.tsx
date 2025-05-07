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
              externalLink: "https://rashmisubhash.hashnode.dev/building-a-real-time-carpooling-app-with-aws",
              keywords: "AWS",
            },
            {
              name: "A more advanced guide to the useState Hooks 🕕>🦸‍♀️",
              description:
"Advanced topics, rules to follow, and avoiding mistakes when using the useState Hook.",
              cover: "/images/projects/usestate.png",
              externalLink: "https://rashmisubhash.hashnode.dev/a-more-advanced-guide-to-the-usestate-hooks",
              keywords: "React.js",
            },
            {
              name: "Complete beginner's guide on the useState Hooks 🕛>🦸‍♀️",
              description:
"Beginner topics, rules to follow, and avoiding mistakes when using the useState Hook.",
              cover: "/images/projects/usestate.png",
              externalLink: "https://rashmisubhash.hashnode.dev/complete-beginners-guide-on-the-usestate-hooks",
              keywords: "React.js",
            },
          ],
          projects: [
            {
              name: "RUCarpooling",
              description:
                "Where rides meet friendships! Share rides, save money, cut emissions, and connect with fellow students. Smarter, greener, and more fun—RU Ready to Carpool? ",
              cover: "/images/projects/rucarpooling.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS - CloudWatch, DynamoDB, Lambda, SES, API GateWay; Python, Boto3, FastAPI, Flutter, GENAI, Grow, OSRM, Serverless, Websockets",
              externalLink: "https://devpost.com/software/rucarpooling-yoet12",
              githubLink: "https://github.com/rashmisubhash/RUCarpooling",
            },
            {
              name: "EchoPod",
              description:
                "Welcome to EchoPod – Smart Audio Learning on the Go. Your personalized, AI-powered podcast learning experience",
              cover: "/images/projects/echopod.png",
              media: "",
              mediaType: "image",
              techUsed:
                "AWS - CloudWatch, DynamoDB, Lambda, Bedrock, API GateWay, Step Functions; Python, Boto3, FastAPI, Flutter, GENAI, Claude, OSRM, Serverless, Websockets",
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
                "AWS - CloudWatch, DynamoDB, Lambda, Bedrock, API GateWay, Step Functions; Python, Boto3, FastAPI, Flutter, GENAI, Claude, OSRM, Serverless, Websockets",
              externalLink: "https://devpost.com/software/streamstudy",
              githubLink: "https://github.com/rashmisubhash/RUCarpooling",
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
                    description: "Incoming SDE Intern @AWS Fargate",
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
                      "Engineered a full-stack solution for uploading and storing over 500 images on AWS EC2, using React.js and Python Flask, optimizing the ergonomic assessment workflow. ",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS EC2, React.js, Flask",
                  },
                  {
                    name: "Vehicle Speed Estimation",
                    description:
                      "Enhanced video streaming efficiency by 30% and reduced debugging time by 25% using AWS IVS for vehicle speed estimation.",
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
                duration: "Oct 2021 – Oct 2023",
                role: "Lead Software Engineer",
                logo: "/images/work/kh.png",
                link_company: "https://konfhub.com/",
                projects: [
                  {
                    name: "CertHub",
                    description:
                      "Directed the development of CertHub, a dynamic platform empowering event organizers to create customized feedback forms and providing in-depth analysis of user engagement metrics to drive data informed decisions.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS DynamoDB, S3, React.js",
                  },
                  {
                    name: "Agile Team Leadership",
                    description:
                      "Streamlined certificate creation for over 40k+ users by developing adaptable templates with flexible placeholders in CertHub using AWS DynamoDB and S3, enabling organizers to efficiently personalize certificates for their events.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Jira, GitHub Actions",
                  },
                  {
                    name: "Women at KonfHub Initiative",
                    description:
                      "Managed a team of 20+ cross-functional members, implementing Agile methodologies such as sprint retrospectives, task designation, and continuous integration to accelerate delivery timelines by 30% and foster high quality output.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Eventbrite, Zoom",
                  },
                  {
                    name: "Women at KonfHub Initiative",
                    description:
                      "Spearheaded the Women at KonfHub initiative by organizing interactive sessions and promoting work life balance, which helped improve team cohesion by 70% during my tenure.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Eventbrite, Zoom",
                  },
                ],
              },
              {
                key: "konfhub-eng",
                companyTitle: "KonfHub Technologies LLP",
                duration: "Oct 2020 – Sep 2021",
                role: "Software Engineer",
                logo: "/images/work/kh.png",
                link_company: "https://konfhub.com/",
                projects: [
                  {
                    name: "Feature Development",
                    description:
                      "Spearheaded a ground-up revamp of the KonfHub platform, delivering 12+ core features (flexible ticketing, coupon engine, automated settlements) that boosted operational efficiency and scaled the user base to 300K+.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "React.js, TypeScript",
                  },
                  {
                    name: "Contact Attendees Module",
                    description:
                      "Architected and deployed high throughput communication pipelines and real-time analytics dashboards using Python, React.js, TypeScript, Bootstrap, and AWS (Lambda, Step Functions, Event Bridge, API GateWay, Cognio, SNS, SQS, CloudWatch), supporting 500+ events for 100+ enterprise clients.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS SNS, SQS, CloudWatch",
                  },
                  {
                    name: "Contact Attendees Module",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS SNS, SQS, CloudWatch",
                    description:
                      "Engineered a viral referral contest feature and fully customizable event pages integrated Stripe for seamless international payments driving a 5x lift in sales and expanding global reach across multiple time zones.",
                  },
                  {
                    name: "Contact Attendees Module",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS SNS, SQS, CloudWatch",
                    description:
                      "Championed Agile best practices by leading technical demos, sprint planning sessions, and cross-team syncs, removing blockers, accelerating delivery cadence, and ensuring 99.9% platform uptime.",
                  },
                  {
                    name: "Contact Attendees Module",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS SNS, SQS, CloudWatch",
                    description:
                      "Mentored and coached junior engineers on scalable architecture, test driven development, and code review rigor, elevating team competency and consistently delivering high-quality releases.",
                  },
                ],
              },
              {
                key: "konfhub-intern",
                companyTitle: "KonfHub Technologies LLP",
                duration: "Jan 2020 – Sep 2020",
                role: "SDE Intern",
                logo: "/images/work/kh.png",
                link_company: "https://konfhub.com/",
                projects: [
                  {
                    name: "Event Site Development",
                    description:
                      "Orchestrated the end-to-end design, development, and deployment of 16 high traffic event websites on Microsoft Azure, RedHat, GirlScript, and AWS, ensuring enterprise grade scalability and 99.9% uptime.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "HTML, CSS, AWS",
                  },
                  {
                    name: "API Integration",
                    description:
                      "Engineered responsive, user centric interfaces that seamlessly handled 100K+ registrations, streamlining the onboarding flow and elevating attendee engagement.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "JavaScript, REST",
                  },
                  {
                    name: "API Integration",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "JavaScript, REST",
                    description:
                      "Collaborated with cross-functional teams (design, content, DevOps) to implement accessibility best practices, optimize performance, and leverage analytics insights amplifying event visibility and conversion.",
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
          copyright: "© 2025 Rashmi Subhash",
          attributions: "Built with ❤️ using Next.js + Tailwind",
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
