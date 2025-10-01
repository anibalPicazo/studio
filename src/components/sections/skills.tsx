import { skillsData } from "@/lib/portfolio-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          A glimpse into the technologies I work with.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((category) => (
          <Card key={category.name} className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
