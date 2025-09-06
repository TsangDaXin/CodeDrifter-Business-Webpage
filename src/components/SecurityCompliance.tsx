import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import soc2Icon from "@/assets/icons/soc2.png";
import gdprIcon from "@/assets/icons/gdpr.png";
import txrampIcon from "@/assets/icons/txramp.png";

export const SecurityCompliance = () => {
  const complianceItems = [
    {
      name: "TX-RAMP",
      icon: txrampIcon,
      description: "Texas Risk and Authorization Management Program",
      status: "certified"
    },
    {
      name: "SOC 2 Type II",
      icon: soc2Icon,
      description: "Service Organization Control 2",
      status: "certified"
    },
    {
      name: "GDPR",
      icon: gdprIcon,
      description: "General Data Protection Regulation",
      status: "in-progress"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary relative">
      <div className="container mx-auto max-w-7xl text-center">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            Security & Compliance
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Your data security is our top priority. We maintain the highest standards of compliance 
            with industry-leading certifications including SOC 2 Type II, TX-RAMP, and GDPR.
          </p>
        </div>

        {/* Compliance Icons */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 scale-in">
          {complianceItems.map((item, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 glow-card interactive-glow relative">
              <CardContent className="p-8 text-center">
                {item.status === "in-progress" && (
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    In Progress
                  </Badge>
                )}
                <div className="flex justify-center mb-6">
                  <img 
                    src={item.icon} 
                    alt={`${item.name} certification`}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="fade-in">
          <Button 
            variant="hero" 
            size="lg" 
            className="interactive-element text-lg px-8 py-4"
            onClick={() => window.location.href = '/security'}
          >
            Learn More About Our Security
          </Button>
        </div>
      </div>
    </section>
  );
};