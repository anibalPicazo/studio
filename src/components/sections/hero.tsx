import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-primary/10 dark:bg-primary/20 py-20 text-center sm:py-32"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src={profile.avatar.imageUrl}
            alt="Alex Doe"
            width={120}
            height={120}
            priority
            className="rounded-full border-4 border-primary shadow-lg"
            data-ai-hint={profile.avatar.imageHint}
          />
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">
              {profile.title}
            </p>
            <p className="mx-auto max-w-xl text-lg text-foreground/80">
              {profile.bio}
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/resume-rewriter">AI Resume Tool</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
