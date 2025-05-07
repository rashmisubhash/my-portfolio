import { list } from "postcss";

export interface DataProps {
  navigation: NavigationProps;
  hero: HeroSectionProps;
  about: AboutSectionProps;
  contact: ContactSectionProps;
  previousWork: PreviousWorkSectionProps;
  footer: FooterProps;
  projectsAndBlogs: ProjectsAndBlogsProps;
}

export interface NavigationProps {
  list: {
    key: string;
    url: string;
    label: string;
  }[];
}
export interface FooterProps {
  copyright: string;
  attributions: string;
  links: { list: { key: string; icon: string; url: string }[] };
}

// SECTIONS

export interface HeroSectionProps {
  cards: {
    list: {
      key: string;
      number: number;
      line: string;
      icon: string;
      special: boolean;
    }[];
  };
}

// Skill group for About section
export interface SkillGroup {
  category: string;
  items: string[];
}

// About & Skills section
export interface AboutSectionProps {
  aboutTitle: string;
  aboutSubline: string;
  skillGroups: SkillGroup[];
  skills: string;
  skillsTitle: string;
  skillsSubline: string;
  timelineTitle: string;
  mobileButtons: { list: { label: string; emoji: string }[] };
  story: { list: { title: string; content: string }[] };
  timeline: { list: TimelineProps[] };
}

export interface TimelineProps {
  title: string;
  date: string;
  role?: string;
  image: string;
  alt: string;
  content: string;
  link_company: string;
  type: "life" | "work" | "special";
}


export interface ProjectsAndBlogsProps {
  projects: ProjectDataProps[];
  blogs: BlogsDataProps[];
  
}

export interface BlogsDataProps {
  name: string;
  description: string | null;
  cover: string;
  externalLink?: string;
  keywords: string;
}

export interface ProjectDataProps {
  name: string;
  description: string | null;
  cover: string;
  media: string;
  mediaLightbox?: string;
  mediaDescription?: string;
  mediaType: "image" | "video";
  techUsed: string;
  externalLink?: string;
  githubLink?: string;
}

export interface PreviousWorkSectionProps {
  title: string;
  subline: string;
  companies: { list: CompaniesDataProps[] };
}

export interface CompaniesDataProps {
  key: string;
  companyTitle: string;
  duration?: string;
  role?: string;
  logo: string;
  link_company: string;
  projects: ProjectsListProps[];
}

export interface ProjectsListProps {
  name: string;
  description: string | null;
  cover: string;
  media: string;
  mediaLightbox?: string;
  mediaDescription?: string;
  mediaType: "image" | "video";
  techUsed: string;
  externalLink?: string;
  githubLink?: string;
}

export interface ContactSectionProps {
  title: string;
  subline: string;
  employMe: string;
  contactMe: string;
  links: {
    list: {
      key: string;
      label: string;
      logo: string;
      url: string;
    }[];
  };
}
