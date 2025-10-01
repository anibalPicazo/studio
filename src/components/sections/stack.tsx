import { stack } from "@/lib/portfolio-data";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted transition-all duration-300 hover:bg-primary/10 hover:shadow-lg dark:bg-muted/50 dark:hover:bg-primary/20">
      {children}
    </div>
  );

export function Stack() {
    return (
      <section id="stack" className="py-20 sm:py-32">
        <div className="space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Tech Stack
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            I work with a variety of modern technologies to build amazing applications.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
            {stack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2">
                    <IconWrapper>
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-foreground/80"
                          fill="currentColor"
                        >
                            <title>{tech.name}</title>
                            <path d={tech.iconPath} />
                        </svg>
                    </IconWrapper>
                    <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
                </div>
            ))}
        </div>
      </section>
    );
}
