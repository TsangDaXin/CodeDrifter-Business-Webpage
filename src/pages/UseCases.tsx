import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  MessageSquare, 
  User, 
  Users, 
  ArrowRight, 
  Database,
  Terminal,
  FileText,
  Code,
  Upload,
  Github,
  FolderOpen,
  Zap,
  Brain,
  Layers
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UseCases = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.scroll-reveal');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const useCases = {
    notebook: {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Notebook Documentation",
      description: "Transform your Jupyter notebooks into beautiful, interactive documentation automatically.",
      features: [
        "Automatic notebook conversion",
        "Interactive code examples",
        "Version control integration",
        "Export to multiple formats"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    chat: {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Team Chat Integration",
      description: "Keep your documentation discussions organized and searchable within your chat platform.",
      features: [
        "Slack and Discord integration",
        "Real-time doc updates",
        "Collaborative editing",
        "Notification system"
      ],
      color: "from-green-500 to-emerald-500"
    },
    individual: {
      icon: <User className="w-12 h-12" />,
      title: "Individual Developer",
      description: "Perfect for solo developers who want to maintain clean, professional documentation.",
      features: [
        "Personal project docs",
        "Portfolio generation",
        "Simple setup process",
        "Free tier available"
      ],
      color: "from-purple-500 to-pink-500"
    },
    team: {
      icon: <Users className="w-12 h-12" />,
      title: "Team Collaboration",
      description: "Scale documentation across your entire development team with enterprise features.",
      features: [
        "Multi-repo support",
        "Team permissions",
        "Advanced analytics",
        "Custom branding"
      ],
      color: "from-orange-500 to-red-500"
    }
  };

  const buildingBlocks = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Source",
      description: "Connect to databases, APIs, and file systems",
      delay: "delay-0"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Prompt",
      description: "Intelligent content generation and analysis",
      delay: "delay-100"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "User Input",
      description: "Interactive forms and user interactions",
      delay: "delay-200"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Code",
      description: "Execute custom logic and transformations",
      delay: "delay-300"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Markdown Text",
      description: "Rich text formatting and documentation",
      delay: "delay-400"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Components",
      description: "Reusable UI elements and templates",
      delay: "delay-500"
    }
  ];

  const templates = [
    {
      icon: <Terminal className="w-12 h-12" />,
      title: "Choose from Local IDE",
      description: "Integrate directly with your development environment for seamless documentation workflow.",
      badges: ["IntelliSense Integration", "Live Preview", "Auto-sync"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Upload className="w-12 h-12" />,
      title: "Upload Files/Folders",
      description: "Drag and drop your project files to instantly generate comprehensive documentation.",
      badges: ["Drag & Drop Support", "Batch Processing", "Smart Recognition"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Github className="w-12 h-12" />,
      title: "GitHub Repository",
      description: "Connect your GitHub repositories for automatic documentation generation and updates.",
      badges: ["Auto Documentation", "PR Integration", "Version Control"],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const allUseCases = Object.entries(useCases);
  const currentUseCase = type ? useCases[type as keyof typeof useCases] : null;

  if (currentUseCase && type === 'notebook') {
    return (
      <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="container mx-auto max-w-7xl text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-primary leading-tight">
                The AI Notebook for data-driven teams
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.3s' }}>
                Take control of your data exploration with a powerful, intuitive workspace built for collaboration.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow interactive-element mb-16"
                style={{ animationDelay: '0.6s' }}
              >
                Get started for free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Company Logos Marquee */}
            <div className="relative overflow-hidden bg-background/50 backdrop-blur-sm rounded-lg p-8" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center justify-center space-x-12 animate-pulse">
                <div className="flex items-center space-x-3 logo-hover">
                  <img
                    src="/uploads/apu.png" // <-- update with your actual logo path
                    alt="Asia Pacific University"
                    className="w-8 h-8 rounded-full object-contain"
                  />
                  <span className="text-sm font-medium text-muted-foreground">Asia Pacific University</span>
                </div>
                <div className="flex items-center space-x-3 logo-hover">
                  <img
                    src="/uploads/ifast.png" // <-- update with your actual logo path
                    alt="ifast"
                    className="w-8 h-8 rounded-full object-contain"
                  />
                  <span className="text-sm font-medium text-muted-foreground">IFast</span>
                </div>
                <div className="flex items-center space-x-3 logo-hover">
                  <img
                    src="/uploads/moneyLion.png" // <-- update with your actual logo path
                    alt="MoneyLion"
                    className="w-8 h-8 rounded-full object-contain"
                  />
                  <span className="text-sm font-medium text-muted-foreground">MoneyLion</span>
                </div>
                <div className="flex items-center space-x-3 logo-hover">
                  <img
                    src="/uploads/ant.png" // <-- update with your actual logo path
                    alt="Ant International"
                    className="w-8 h-8 rounded-full object-contain"
                  />
                  <span className="text-sm font-medium text-muted-foreground">Ant International</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full animate-spin" style={{ animationDuration: '60s' }}></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-6 bg-background/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Documentation is slow to write, painful to read, and quickly goes <span className="text-primary font-medium relative group cursor-help">stale
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  means out-of-date or no longer accurate
                </span>
                </span> in real-world dev environments. This causes onboarding delays, wasted time, and bugs.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "Smart Doc Writer (AI-Powered)",
                  features: [
                    "Auto-generates starter docs from the codebase (classes, methods, API routes, commit history)",
                    "Includes AI-assisted README generator with setup, usage, API, contributing sections", 
                    "Built-in Markdown validator keeps docs clean and professional"
                  ],
                  benefit: "Saves developers time by automating boilerplate documentation",
                  delay: "delay-0"
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Doc Drift Detector (Maintenance)",
                  features: [
                    "Detects mismatches between code and documentation, e.g., renamed functions",
                    "Sends alerts via GitHub Actions and optional Slack/Discord notifications"
                  ],
                  benefit: "Keeps documentation fresh and accurate, avoiding stale docs",
                  delay: "delay-200"
                },
                {
                  icon: <BookOpen className="w-12 h-12" />,
                  title: "Doc Reader Mode", 
                  features: [
                    "AI-powered Q&A chatbot for instant answers from docs",
                    "Auto-generates TL;DR summaries to condense large documents"
                  ],
                  benefit: "Speeds onboarding and comprehension for developers",
                  delay: "delay-400"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Collaborative Documentation Editor",
                  features: [
                    "Share docs with adjustable permissions (view, comment, edit)",
                    "Supports command blocks for rich editing: bullet lists, checklists, syntax-highlighted code blocks",
                    "Auto-generates UML diagrams and flowcharts with AI inline formatting assistance"
                  ],
                  benefit: "Transforms documentation into living, collaborative documents",
                  delay: "delay-600"
                }
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className={`bg-gradient-card border-border/50 p-8 hover:shadow-glow-lg transition-all duration-500 cursor-pointer scroll-reveal ${feature.delay} group interactive-glow`}
                >
                  <div className="text-primary mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-primary font-medium">
                      <strong>Benefit:</strong> {feature.benefit}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20 px-6 bg-gradient-secondary/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Core Features
              </h2>
              <h3 className="text-2xl font-medium mb-4 text-foreground">
                Create New Documentation
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transform code into comprehensive, interactive documentation through a guided workflow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Terminal className="w-8 h-8" />,
                  title: "Choose from Local IDE",
                  description: "Select files and folders directly from your development environment.",
                  features: ["IntelliSense Integration", "Live File Sync", "Project Structure Analysis"],
                  iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
                  iconGlow: "group-hover:shadow-blue-500/50"
                },
                {
                  icon: <Upload className="w-8 h-8" />,
                  title: "Upload Files/Folders", 
                  description: "Upload files or entire folders from your device.",
                  features: ["Drag & Drop Support", "Bulk Upload", "Automatic Detection"],
                  iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
                  iconGlow: "group-hover:shadow-purple-500/50"
                },
                {
                  icon: <Github className="w-8 h-8" />,
                  title: "GitHub Repository Integration",
                  description: "Import and analyze code from any GitHub repository.",
                  features: ["Repository Analysis", "Commit History", "Auto Documentation"],
                  iconBg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
                  iconGlow: "group-hover:shadow-green-500/50"
                }
              ].map((option, index) => (
                <Card 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border-border/50 p-8 hover:shadow-glow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer scroll-reveal group overflow-hidden relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 ${option.iconBg} rounded-xl flex items-center justify-center transition-all duration-300 ${option.iconGlow} group-hover:glow-lg`}>
                        <div className="text-white transition-transform duration-300 group-hover:scale-110">
                          {option.icon}
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors duration-300">
                      {option.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {option.features.map((feature, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300 text-xs px-3 py-1"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full mt-6 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      Start
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (currentUseCase) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Specific Use Case Page */}
        <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="text-primary mb-6 transform transition-transform duration-500 hover:scale-110">
                {currentUseCase.icon}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
                {currentUseCase.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {currentUseCase.description}
              </p>
              <Button variant="hero" size="lg" className="interactive-element pulse-glow">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {currentUseCase.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-muted-foreground transform transition-all duration-300 hover:translate-x-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary mr-3 transition-colors duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative scroll-reveal">
                <div className={`w-full h-64 bg-gradient-to-r ${currentUseCase.color} rounded-lg opacity-20 transform transition-all duration-500 hover:opacity-30 hover:scale-105`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary opacity-50 transform transition-all duration-500 hover:opacity-70 hover:scale-110">
                    {currentUseCase.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
              AI-powered analysis that adapts to how you work
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how CodeDrifer transforms your documentation workflow across different scenarios and team sizes with intelligent automation and seamless integration.
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full animate-spin" style={{ animationDuration: '60s' }}></div>
        </div>
      </section>

      {/* Primary Use Cases */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Choose Your Workflow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every team is unique. Find the perfect approach for your documentation needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {allUseCases.map(([key, useCase], index) => (
              <Card 
                key={key} 
                className="bg-gradient-card border-border/50 glow-card interactive-glow cursor-pointer scroll-reveal group relative overflow-hidden"
                onClick={() => navigate(`/use-cases/${key}`)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="text-primary mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Building Blocks Section */}
      <section className="py-20 px-6 bg-gradient-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Flexible Building Blocks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mix and match powerful components to create the perfect documentation experience for your team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {buildingBlocks.map((block, index) => (
              <Card 
                key={index}
                className={`bg-gradient-card border-border/50 p-6 hover:shadow-glow-lg transition-all duration-500 cursor-pointer scroll-reveal ${block.delay} group`}
              >
                <div className="text-center">
                  <div className="text-primary mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:text-accent">
                    {block.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {block.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Template Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Choose a Template to Get Started
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with the documentation source that works best for your workflow and team setup.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-glow-lg transition-all duration-500 cursor-pointer scroll-reveal group overflow-hidden relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <CardHeader className="relative z-10">
                  <div className="text-primary mb-6 transform transition-all duration-300 group-hover:scale-110">
                    {template.icon}
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {template.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {template.description}
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {template.badges.map((badge, badgeIndex) => (
                      <Badge 
                        key={badgeIndex} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            Ready to Transform Your Documentation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of developers who have already revolutionized their documentation workflow with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="interactive-element pulse-glow text-lg px-8 py-4"
              onClick={() => navigate('/')}
            >
              Start Documentation
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => navigate('/security')}
            >
              View Security
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;