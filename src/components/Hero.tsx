import { Button } from "@/components/ui/button";
import { Download, GitBranch } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto max-w-7xl text-center">
        <div className="scroll-reveal visible">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary leading-tight">
            Turn Your Codebase Into Useful Docs – Instantly
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            AI-powered documentation tools for teams who hate writing and reading stale docs. 
            Transform any repository into clear, actionable documentation in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 glow-primary-lg interactive-element group"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download Extension
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-primary/50 hover:border-primary text-primary interactive-element"
            >
              <GitBranch className="w-5 h-5 mr-3" />
              Try Demo
            </Button>
          </div>
        </div>

        <div className="relative scroll-reveal card-3d">
          <div className="bg-gradient-card rounded-2xl p-2 glow-card max-w-4xl mx-auto interactive-element">
            <img 
              src = "/uploads/p10.PNG"
              alt="CodeDrifer VSCode Extension Preview"
              className="w-full rounded-xl shadow-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};