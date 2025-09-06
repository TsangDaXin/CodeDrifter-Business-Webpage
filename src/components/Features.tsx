import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, MessageSquare, GitBranch } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Doc Writer",
      description: "Auto-scans codebases to create README outlines, setup instructions, usage, and API docs.",
      image: "/uploads/1f9ea06b-d79a-464b-873c-c1d155186d3e.png",
      badge: "AI-Powered"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Doc Drift Detector",
      description: "Visualize code and doc sync, flagging discrepancies and sending PR comments/Slack/Discord alerts.",
      image: "/uploads/5128b3ab-424d-4f9d-9988-85dda4543e4c.png",
      badge: "Real-time"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Doc Reader Mode",
      description: "Doc Q&A chatbot with bullet-point auto-summarization for instant understanding.",
      image: "/uploads/9091aaa6-8279-4058-9191-a2bf70d026b9.png",
      badge: "Interactive"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Git Repo Digest",
      description: "Transform any repo URL into a structured code summary, ready for LLM prompting.",
      image: "/uploads/b46a27d3-a30b-4a7a-9223-a0e813dd48fd.png",
      badge: "One-Click"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-background relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            Powerful Features for Modern Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop wasting time on documentation. Let AI handle the heavy lifting while you focus on coding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 glow-card interactive-element group overflow-hidden card-3d scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 group-hover:bg-primary/30 transition-colors">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};