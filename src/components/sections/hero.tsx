import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-primary py-20 text-center sm:py-32"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src={profile.avatar.imageUrl}
            alt="Alex Doe"
            width={120}
            height={120}
            priority
            className="rounded-full border-4 border-primary-foreground shadow-lg"
            data-ai-hint={profile.avatar.imageHint}
          />
          <div className="space-y-4 text-primary-foreground">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="text-xl text-primary-foreground/80 sm:text-2xl">
              {profile.title}
            </p>
            <p className="mx-auto max-w-xl text-lg text-primary-foreground/90">
              {profile.bio}
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="#stack">My Stack</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="#projects">My Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
