import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individual developers",
      features: [
        "Basic doc generation",
        "Up to 5 repos",
        "Local processing",
        "VSCode integration",
        "Community support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For professional development teams",
      features: [
        "Advanced AI doc generation",
        "Unlimited repos",
        "Real-time drift detection",
        "Slack/Discord notifications",
        "Priority support",
        "Custom templates",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Custom AI models",
        "On-premise deployment",  
        "SSO integration",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start free, scale as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 scroll-reveal">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-border/50 glow-card interactive-element card-3d ${
                plan.popular ? 'ring-2 ring-primary glow-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary px-4 py-1 text-sm">
                    <Zap className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <CardDescription className="text-lg">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  variant={plan.popular ? "hero" : "secondary"} 
                  className={`w-full mb-6 interactive-element ${plan.popular ? 'glow-primary' : ''}`}
                >
                  {plan.cta}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};