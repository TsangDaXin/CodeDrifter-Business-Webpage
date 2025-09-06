import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2, Maximize } from "lucide-react";

export const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fullscreen handler
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  const features = [
    {
      title: "Smart Code Analysis",
      description: "AI scans your entire codebase to understand structure and dependencies",
      timestamp: "0:15"
    },
    {
      title: "Auto Documentation",
      description: "Generates README files, API docs, and setup instructions automatically",
      timestamp: "0:45"
    },
    {
      title: "Drift Detection",
      description: "Monitors code changes and alerts when documentation becomes outdated",
      timestamp: "1:20"
    },
    {
      title: "Interactive Q&A",
      description: "Ask questions about your codebase and get instant, accurate answers",
      timestamp: "2:00"
    }
  ];

  return (
    <section id="demo" className="py-20 px-6 bg-secondary/20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 scroll-reveal">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            See CodeDrifer in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how CodeDrifer transforms complex codebases into clear, maintainable documentation in minutes, not hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="scroll-reveal">
            <Card className="bg-gradient-card border-border/50 glow-card overflow-hidden card-3d">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 aspect-video flex items-center justify-center">
                  {/* Video overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                  {/* Video Element */}
                  <video
                    ref={videoRef}
                    src="/uploads/codeDrifterVideoDemo.mp4"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    controls={false}
                    onEnded={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  {/* Show play or pause button */}
                  {!isPlaying ? (
                    <Button
                      variant="hero"
                      size="lg"
                      className="relative z-10 interactive-element group"
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.play();
                          setIsPlaying(true);
                        }
                      }}
                    >
                      <Play className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform" />
                      Watch Demo
                    </Button>
                  ) : (
                    <Button
                      variant="hero"
                      size="lg"
                      className="relative z-10 interactive-element group"
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.pause();
                          setIsPlaying(false);
                        }
                      }}
                    >
                      <Pause className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform" />
                      Pause
                    </Button>
                  )}
                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4 text-white" />
                      <div className="text-white text-sm">2:45</div>
                    </div>
                    <Maximize
                      className="w-4 h-4 text-white cursor-pointer hover:text-primary transition-colors"
                      onClick={handleFullscreen}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Timeline */}
          <div className="space-y-6 scroll-reveal">
            <h3 className="text-2xl font-bold text-primary mb-6">What You'll See</h3>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-4 rounded-lg bg-gradient-card border border-border/50 interactive-element group"
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      {feature.timestamp}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};