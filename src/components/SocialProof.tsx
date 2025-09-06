import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import microsoftLogo from "@/assets/logos/microsoft.svg";
import googleLogo from "@/assets/logos/google.svg";
import githubLogo from "@/assets/logos/github.png";
import stripeLogo from "@/assets/logos/stripe.svg";
import vercelLogo from "@/assets/logos/vercel.png";
import slackLogo from "@/assets/logos/slack.svg";
import notionLogo from "@/assets/logos/notion.svg";
import figmaLogo from "@/assets/logos/figma.svg";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Owen Tsang",
      role: "Java Engineer intern",
      company: "Ant international",
      content: "CodeDrifer transformed our documentation workflow. What used to take hours now happens automatically.",
      rating: 5,
      initials: "SC"
    },
    {
      name: "Tan Lok Qi",
      role: "Machine learning intern", 
      company: "Money Lion",
      content: "Finally, docs that stay in sync with our code. The drift detection saved us countless debugging hours.",
      rating: 5,
      initials: "MR"
    },
    {
      name: "delaynomore",
      role: "DevOps Engineer",
      company: "I love apu",
      content: "The repo digest feature is a game-changer. Perfect for onboarding new team members quickly.",
      rating: 5,
      initials: "EW"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "500K+", label: "Docs Generated" },
    { value: "95%", label: "Time Saved" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero relative">
      <div className="container mx-auto max-w-7xl">
        {/* Stats */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            Trusted by 10,000+ Developer Teams
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 scale-in">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 glow-card interactive-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="border-2 border-primary/30">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company logos carousel */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by teams at</p>
          <div className="relative max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                })
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { name: "Microsoft", logo: microsoftLogo },
                  { name: "Google", logo: googleLogo },
                  { name: "GitHub", logo: githubLogo },
                  { name: "Stripe", logo: stripeLogo },
                  { name: "Vercel", logo: vercelLogo },
                  { name: "Slack", logo: slackLogo },
                  { name: "Notion", logo: notionLogo },
                  { name: "Figma", logo: figmaLogo },
                ].map((company, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="flex items-center justify-center h-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="h-8 w-auto filter grayscale hover:grayscale-0 logo-hover"
                      />
                    </div>
                  </CarouselItem>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { name: "Microsoft", logo: microsoftLogo },
                  { name: "Google", logo: googleLogo },
                  { name: "GitHub", logo: githubLogo },
                  { name: "Stripe", logo: stripeLogo },
                ].map((company, index) => (
                  <CarouselItem key={`duplicate-${index}`} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="flex items-center justify-center h-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};