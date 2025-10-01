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

export type Tech = {
  name: string;
  iconPath: string;
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

export const stack: Tech[] = [
  {
    name: 'Next.js',
    iconPath:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12.5 7v10h-1V7h1zm3.91 3.5-1.42 1.42L16.17 12l-1.18 1.08 1.42 1.42L18 12l-1.59-1.5z',
  },
  {
    name: 'React',
    iconPath:
      'M12 4.48c-3.93 0-7.14 2.84-7.14 6.36s3.21 6.36 7.14 6.36c3.93 0 7.14-2.84 7.14-6.36S15.93 4.48 12 4.48z m0 11.22c-2.97 0-5.38-2.19-5.38-4.86s2.41-4.86 5.38-4.86 5.38 2.19 5.38 4.86-2.41 4.86-5.38 4.86z M12 7.74a3.26 3.26 0 1 0 0 6.52 3.26 3.26 0 0 0 0-6.52z',
  },
  {
    name: 'TypeScript',
    iconPath:
      'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
  },
  {
    name: 'Node.js',
    iconPath:
      'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
  },
  {
    name: 'PostgreSQL',
    iconPath:
      'M5 13.18v4.24c0 .79.87 1.27 1.57.84l4.13-2.52c.6-.36.6-.96 0-1.32L6.57 12.3c-.7-.43-1.57.05-1.57.88zm14-1.35c0-.79-.87-1.27-1.57-.84L13.3 13.51c-.6.36-.6.96 0 1.32l4.13 2.52c.7.43 1.57-.05 1.57-.88v-4.24z',
  },
];

export const frameworks: Tech[] = [
  {
    name: "Angular",
    iconPath: "M12 2L2 7l10 12 10-12L12 2zm0 2.34L18.36 9H5.64L12 4.34zM4.14 8h15.72L12 18.5 4.14 8zM12 10.5l-4 4h8l-4-4z"
  },
  {
    name: "React",
    iconPath: "M12 4.48c-3.93 0-7.14 2.84-7.14 6.36s3.21 6.36 7.14 6.36c3.93 0 7.14-2.84 7.14-6.36S15.93 4.48 12 4.48z m0 11.22c-2.97 0-5.38-2.19-5.38-4.86s2.41-4.86 5.38-4.86 5.38 2.19 5.38 4.86-2.41 4.86-5.38 4.86z M12 7.74a3.26 3.26 0 1 0 0 6.52 3.26 3.26 0 0 0 0-6.52z"
  },
  {
    name: "Vue.js",
    iconPath: "M22 8.79l-10-8.2L2 8.79l10 14 10-14zM12 19.38L4.86 10l7.14-5.83 7.14 5.83L12 19.38z"
  },
  {
    name: "Svelte",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
  },
  {
    name: "Ember.js",
    iconPath: "M20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.38 1.04 4.53 2.7 6.02L12 22l5.3-3.98A7.94 7.94 0 0 0 20 12zM12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"
  },
];

export const portfolioText = [
  profile.bio,
  ...projects.map(p => `${p.title}: ${p.description}`),
  ...skillsData.flatMap(s => s.skills),
].join(' ');
