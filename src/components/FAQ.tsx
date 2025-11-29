import { HelpCircle, Shield, Award, Leaf, Users, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    icon: HelpCircle,
    question: "What core value proposition does Rolex New Biotech offer to the agricultural sector?",
    answer: "Rolex New Biotech provides scientifically advanced, high-performance crop protection solutions designed to enhance yield quality, deliver reliable pest control, and support sustainable agricultural practices. Our products empower farmers with technology-driven efficiency and consistent results."
  },
  {
    icon: Award,
    question: "How does Rolex New Biotech differentiate its pesticide formulations from competitors?",
    answer: "We utilize cutting-edge biotechnology, high-purity active ingredients, and precision formulation techniques. This enables us to deliver superior efficacy, longer residual action, enhanced crop safety, and overall improved farm productivity compared to conventional market alternatives."
  },
  {
    icon: Shield,
    question: "What quality assurance measures ensure product reliability and safety?",
    answer: "Our manufacturing follows strict quality protocols, including multi-level raw material screening, formulation stability assessments, batch-wise laboratory testing, and real-time field validation. These measures guarantee product purity, performance consistency, and regulatory compliance."
  },
  {
    icon: Leaf,
    question: "How does Rolex New Biotech ensure environmental responsibility and regulatory compliance?",
    answer: "All products adhere to national and international agrochemical standards. We develop low-residue, eco-friendly formulations and continuously update our processes to align with evolving environmental guidelines, ensuring safe and responsible pest management."
  },
  {
    icon: Users,
    question: "What technical and field support do you provide to farmers and distributors?",
    answer: "Our expert team offers on-field guidance, pest identification assistance, dosage recommendations, product demonstrations, and training sessions. This support ensures correct application, maximized effectiveness, and improved user confidence."
  },
  {
    icon: TrendingUp,
    question: "How do your products contribute to improved crop yield and farmer profitability?",
    answer: "Rolex New Biotech products minimize pest damage, enhance plant vigor, and ensure consistent crop protection. This leads to higher yields, improved produce quality, and greater financial returns for farmers."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="flex items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              GET THE INFO
            </span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Help & Information Hub
        </h2>
        
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Discover comprehensive answers to your questions about our advanced crop protection solutions, quality standards, and support services.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden h-[600px] order-2 lg:order-1">
            <img
              src="/src/assets/about-woman-portrait.jpg"
              alt="Agricultural professional"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 order-1 lg:order-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-none bg-card rounded-xl overflow-hidden shadow-sm data-[state=open]:bg-lime-accent/20 transition-colors duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left w-full">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-lime-accent/30 transition-colors">
                        <faq.icon className="w-5 h-5 text-primary group-data-[state=open]:text-foreground" />
                      </div>
                      <span className="font-semibold text-base md:text-lg flex-1 pr-4">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <div className="pl-14 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
