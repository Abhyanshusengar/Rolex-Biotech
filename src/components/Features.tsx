import { Leaf, Shield, Zap, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Leaf,
    title: "100% Organic Options",
    description: "Eco-friendly fertilizers that nurture your soil and protect the environment.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Zap,
    title: "Fast-Acting Formula",
    description: "See visible results within days with our scientifically proven formulations.",
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every product is tested and certified to meet the highest industry standards.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Award,
    title: "Expert Support",
    description: "Get guidance from our agricultural experts for optimal crop nutrition.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white border border-primary/20 px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="text-sm text-primary font-bold tracking-wide uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Fertilizer Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover what makes our products the preferred choice for farmers and gardeners
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                // UPDATED CLASSES FOR VISIBILITY:
                // 1. border-2: Makes the line thicker (2px instead of 1px)
                // 2. border-gray-300: Makes the line darker/more visible
                // 3. shadow-md: Adds a clearer shadow to separate it from background
                className="group relative bg-white border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top Animated Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-lime-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-black/5`}
                  >
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;