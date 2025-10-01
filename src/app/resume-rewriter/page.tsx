import { ResumeForm } from "@/components/resume-form";

export default function ResumeRewriterPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 sm:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          AI-Powered Resume Tool
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Upload your resume and let our AI adapt its content to match the tone of this portfolio,
          helping you stand out.
        </p>
      </div>
      <div className="mt-12">
        <ResumeForm />
      </div>
    </div>
  );
}
