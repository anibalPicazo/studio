import { PlaceHolderImagesMap } from "@/lib/placeholder-images";

export type Project = {
  title: string;
  description: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const profile = {
  name: "Alex Doe",
  title: "Senior Full-Stack Developer",
  bio: "A passionate developer with a knack for building beautiful, functional, and scalable web applications. Specializing in modern web technologies and always eager to learn something new.",
  avatar: PlaceHolderImagesMap.get("avatar")!,
  contact: {
    email: "hello@alexdoe.com",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

export const projects: Project[] = [
  {
    title: "Project Nova",
    description:
      "A comprehensive project management tool designed to streamline team collaboration and task tracking with real-time updates and an intuitive interface.",
    image: PlaceHolderImagesMap.get("project1")!,
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ConnectSphere",
    description:
      "A social networking platform for professionals to connect, share insights, and build their personal brand within their industry.",
    image: PlaceHolderImagesMap.get("project2")!,
    tags: ["Next.js", "Firebase", "TypeScript", "Shadcn/UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Shopify Express",
    description:
      "A headless e-commerce solution that provides a fast, modern, and customizable shopping experience for customers.",
    image: PlaceHolderImagesMap.get("project3")!,
    tags: ["Vue.js", "Shopify API", "Netlify", "Jest"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {

    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Vue.js", "GraphQL"],
  },
  {
    name: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "AWS", "Docker"],
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Webpack", "Figma", "Jira", "CI/CD"],
  },
];

export const portfolioText = [
  profile.bio,
  ...projects.map(p => `${p.title}: ${p.description}`),
  ...skillsData.flatMap(s => s.skills),
].join(' ');
