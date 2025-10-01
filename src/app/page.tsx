import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
