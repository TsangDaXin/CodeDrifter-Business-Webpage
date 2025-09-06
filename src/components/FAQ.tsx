import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does CodeDrifer work?",
      answer: "CodeDrifer uses advanced AI to analyze your codebase and automatically generate comprehensive documentation. It scans your code structure, comments, and function signatures to create README files, API docs, and setup instructions."
    },
    {
      question: "Is my code data secure?",
      answer: "Absolutely. CodeDrifer processes everything locally within your VSCode environment. Your code never leaves your machine unless you explicitly choose to use our cloud features, which are enterprise-grade encrypted."
    },
    {
      question: "What programming languages are supported?",
      answer: "CodeDrifer supports all major programming languages including JavaScript, TypeScript, Python, Java, Go, Rust, C++, and more. Our AI models are trained on diverse codebases to understand different coding patterns."
    },
    {
      question: "Can I customize the documentation format?",
      answer: "Yes! CodeDrifer offers customizable templates and formatting options. You can create your own documentation templates or use our pre-built ones for different project types and team preferences."
    },
    {
      question: "How accurate is the drift detection?",
      answer: "Our drift detection uses semantic analysis to achieve 95%+ accuracy in identifying when code changes make documentation outdated. It goes beyond simple text matching to understand code semantics and relationships."
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes basic documentation generation for up to 5 repositories, local processing, VSCode integration, and community support. Perfect for individual developers and small projects."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about CodeDrifer.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full scroll-reveal">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-border/50 mb-4 interactive-element"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors duration-300 px-6 py-4 bg-gradient-card rounded-t-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed px-6 py-4 bg-card/50 rounded-b-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};