import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileCheck, Users, Database } from "lucide-react";
import soc2Icon from "@/assets/icons/soc2.png";
import gdprIcon from "@/assets/icons/gdpr.png";
import txrampIcon from "@/assets/icons/txramp.png";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Zero-Trust Architecture",
      description: "Every request is verified and authenticated before accessing any resources."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy by Design",
      description: "We collect only what's necessary and never share your data with third parties."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Regular Audits",
      description: "Independent security audits and penetration testing performed quarterly."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Access Controls",
      description: "Role-based access controls and multi-factor authentication for all accounts."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Residency",
      description: "Choose where your data is stored with multiple geographic regions available."
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      icon: soc2Icon,
      description: "Audited for security, availability, processing integrity, confidentiality, and privacy.",
      status: "Active"
    },
    {
      name: "TX-RAMP",
      icon: txrampIcon,
      description: "Texas state government cybersecurity certification program compliance.",
      status: "Active"
    },
    {
      name: "GDPR",
      icon: gdprIcon,
      description: "European Union data protection regulation compliance framework.",
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            Security & Compliance
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Enterprise-grade security with industry-leading compliance certifications. 
            Your code and data are protected by best-in-class security measures.
          </p>
          <Button variant="hero" size="lg" className="interactive-element">
            <Shield className="w-5 h-5 mr-2" />
            View Security Documentation
          </Button>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Built with Security First
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every aspect of our platform is designed with security in mind, from code architecture to data handling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 glow-card interactive-glow">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gradient-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
              Compliance Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of compliance with industry regulations and frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 glow-card interactive-glow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src={cert.icon} alt={cert.name} className="w-16 h-16" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {cert.name}
                  </CardTitle>
                  <Badge 
                    variant={cert.status === "Active" ? "default" : "secondary"}
                    className="w-fit mx-auto"
                  >
                    {cert.status}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;