"use client";

import { useState } from "react";
import { FileUp, Copy, Check } from "lucide-react";
import { generateRewrittenResume } from "@/lib/actions";
import { portfolioText } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "./ui/skeleton";

export function ResumeForm() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rewrittenResume, setRewrittenResume] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!resumeFile) {
      toast({
        title: "No file selected",
        description: "Please upload your resume to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setRewrittenResume("");

    const reader = new FileReader();
    reader.readAsDataURL(resumeFile);
    reader.onload = async () => {
      const resumeDataUri = reader.result as string;
      const result = await generateRewrittenResume({ resumeDataUri, portfolioText });

      setIsLoading(false);
      if (result.error) {
        toast({
          title: "An error occurred",
          description: result.error,
          variant: "destructive",
        });
      } else if (result.rewrittenResume) {
        setRewrittenResume(result.rewrittenResume);
      }
    };
    reader.onerror = () => {
      setIsLoading(false);
      toast({
        title: "File reading error",
        description: "Could not read the selected file.",
        variant: "destructive",
      });
    };
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rewrittenResume);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast({
        title: "Copied!",
        description: "The rewritten resume has been copied to your clipboard.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Your Resume</CardTitle>
        <CardDescription>
          Select a .txt, .md, or .pdf file. The AI will rewrite the content for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="resume-upload">Resume File</Label>
            <div className="flex items-center gap-4">
              <Button type="button" variant="outline" asChild>
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <FileUp className="mr-2 h-4 w-4" />
                  Choose File
                </label>
              </Button>
              <input
                id="resume-upload"
                type="file"
                accept=".txt,.md,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              {fileName && <span className="text-sm text-muted-foreground">{fileName}</span>}
            </div>
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Rewriting..." : "Rewrite with AI"}
          </Button>
        </form>

        {(isLoading || rewrittenResume) && (
          <div className="space-y-4 pt-4">
            <Label htmlFor="rewritten-resume">Rewritten Resume</Label>
            {isLoading ? (
                <div className="space-y-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-32 w-full" />
                </div>
            ) : (
                <div className="relative">
                <Textarea
                    id="rewritten-resume"
                    readOnly
                    value={rewrittenResume}
                    className="h-64"
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-7 w-7"
                    onClick={handleCopy}
                >
                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
                </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
