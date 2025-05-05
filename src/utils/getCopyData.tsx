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
              items: ["Python", "JavaScript", "Java", "TypeScript", "HTML", "CSS3"]
            },
            {
              category: "Frontend",
              items: ["React.js", "Next.js", "Material UI", "Bootstrap"]
            },
            {
              category: "Backend & APIs",
              items: ["FastAPI", "Node.js", "Boto3"]
            },
            {
              category: "Databases",
              items: ["DynamoDB", "MongoDB", "PostgreSQL", "MySQL"]
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
                "Git & GitHub"
              ]
            }
          ],          
          skillsTitle: "Skills",
          skillsSubline: "My stack and toolbelt",
          skills: "Python, FastAPI, AWS Lambda, Step Functions, DynamoDB, JavaScript, Reactjs, Nodejs, Nextjs, HTML, CSS3",
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
        previousWork: {
          title: "Experience",
          subline: "Roles & Projects",
          companies: {
            list: [
              {
                key: "durandal",
                companyTitle: "Durandal Lab, Rutgers University",
                duration: "Jun 2024 – Aug 2024",
                role: "Research Assistant",
                logo: "/images/work/rutgers.png",
                projects: [
                  {
                    name: "Ergonomic Risk Assessment",
                    description:
                      "Engineered a full‑stack image‑upload and processing pipeline on AWS EC2 using React.js & Flask. ",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS EC2, React.js, Flask",
                  },
                  {
                    name: "Vehicle Speed Estimation",
                    description:
                      "Enhanced real‑time video streaming efficiency by 30% and reduced debugging time by 25% with AWS IVS.",
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
                projects: [
                  {
                    name: "CertHub",
                    description:
                      "Directed development of CertHub—enabled organizers to create custom feedback forms and analytics for 40k+ users.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS DynamoDB, S3, React.js",
                  },
                  {
                    name: "Agile Team Leadership",
                    description:
                      "Managed a 20+ member cross‑functional team, instituted Agile practices and CI/CD, cutting delivery time by 30%.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "Jira, GitHub Actions",
                  },
                  {
                    name: "Women at KonfHub Initiative",
                    description:
                      "Spearheaded interactive sessions promoting work‑life balance, improving team cohesion by 70%.",
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
                projects: [
                  {
                    name: "Feature Development",
                    description:
                      "Built 12+ front‑end features (tickets, sponsors, workshops, email templates), scaling platform to 300k+ users.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "React.js, TypeScript",
                  },
                  {
                    name: "Contact Attendees Module",
                    description:
                      "Engineered targeted messaging via AWS SNS/SQS/WhatsApp/SMS for 500+ events, improving communication efficiency.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "AWS SNS, SQS, CloudWatch",
                  },
                ],
              },
              {
                key: "konfhub-intern",
                companyTitle: "KonfHub Technologies LLP",
                duration: "Jan 2020 – Sep 2020",
                role: "SDE Intern",
                logo: "/images/work/kh.png",
                projects: [
                  {
                    name: "Event Site Development",
                    description:
                      "Built and maintained websites for 15+ events (100k+ registrations) collaborating with RedHat, GirlScript, Azure & AWS.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "HTML, CSS, AWS",
                  },
                  {
                    name: "API Integration",
                    description:
                      "Coded front‑end integrations for KonfHub event pages, ensuring reliable organizer workflows.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "JavaScript, REST",
                  },
                ],
              },
              {
                key: "sedin-intern",
                companyTitle: "Sedin Technologies LLP",
                duration: "July 2019 – August 2019",
                role: "SDE Intern",
                logo: "/images/work/sedin.png",
                projects: [
                  {
                    name: "Event Site Development",
                    description:
                      "Built and maintained websites for 15+ events (100k+ registrations) collaborating with RedHat, GirlScript, Azure & AWS.",
                    cover: "",
                    media: "",
                    mediaType: "image",
                    techUsed: "HTML, CSS, AWS",
                  },
                  {
                    name: "API Integration",
                    description:
                      "Coded front‑end integrations for KonfHub event pages, ensuring reliable organizer workflows.",
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
