import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-card border-border/50 glow-card relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
          
          <CardContent className="relative z-10 p-12 text-center">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
                Ready to Transform Your Documentation?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of developers who've already streamlined their documentation workflow. 
                Install CodeDrifer and start generating beautiful docs in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4 glow-primary interactive-glow">
                  <Download className="w-5 h-5 mr-2" />
                  Download for VSCode
                </Button>
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                  View Documentation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Free to install</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Works offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No signup required</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};