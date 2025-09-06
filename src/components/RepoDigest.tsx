import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, GitBranch, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const RepoDigest = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [digest, setDigest] = useState("");
  const { toast } = useToast();

  const handleDigest = async () => {
    if (!repoUrl.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setDigest(`
# Repository Digest: ${repoUrl}

## Overview
This repository contains a modern React application with TypeScript, featuring:
- Component-based architecture
- State management with hooks
- Responsive design with Tailwind CSS
- Testing setup with Jest

## Key Files
- \`src/App.tsx\` - Main application component
- \`src/components/\` - Reusable UI components  
- \`src/hooks/\` - Custom React hooks
- \`package.json\` - Dependencies and scripts

## Dependencies
- React 18.x for UI framework
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started
\`\`\`bash
npm install
npm run dev
\`\`\`
      `);
      setIsLoading(false);
      toast({
        title: "Digest Generated!",
        description: "Repository summary is ready for LLM prompting.",
      });
    }, 2000);
  };

  const copyToClipboard = () => {  
    navigator.clipboard.writeText(digest);
    toast({
      title: "Copied!",
      description: "Digest copied to clipboard.",
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            Instant Git Repo Digest
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Paste any public GitHub repository URL to instantly get a structured AI-generated summary of the project's architecture, key files, and main features for fast onboarding and analysis.
          </p>
        </div>

        <Card className="bg-gradient-card border-border/50 glow-card scroll-reveal card-3d">
          <CardContent className="p-8">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Input
                  placeholder="https://github.com/username/repository"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  className="bg-input border-border text-lg py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                />
                {repoUrl && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              <Button 
                onClick={handleDigest}
                disabled={isLoading || !repoUrl.trim()}
                variant="hero"
                className="px-8 glow-primary interactive-element group"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    <span className="loading-dots">Analyzing</span>
                  </>
                ) : (
                  <>
                    <GitBranch className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Digest
                  </>
                )}
              </Button>
            </div>

            {digest && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary">Generated Digest</h3>
                  <Button
                    onClick={copyToClipboard}
                    variant="secondary"
                    size="sm"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                  {digest}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};