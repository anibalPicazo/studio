import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto max-w-5xl px-4">
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
