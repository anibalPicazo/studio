import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image.url}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={project.image.hint}
                />
              </div>
            </CardHeader>
            <div className="flex flex-1 flex-col p-6">
              <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
              <CardDescription className="flex-grow">{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <CardFooter className="flex justify-end gap-2 p-6 pt-0">
              {project.githubUrl && (
                <Button variant="ghost" size="icon" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="ghost" size="icon" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Live Demo</span>
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
