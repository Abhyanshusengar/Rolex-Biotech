import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import organicImg from "@/assets/category-organic.jpg";
import chemicalImg from "@/assets/category-chemical.jpg";
import liquidImg from "@/assets/category-liquid.jpg";

const categories = [
  {
    title: "Organic Fertilizers",
    description: "Natural and eco-friendly solutions for sustainable farming",
    items: "25+ Products",
    image: organicImg,
  },
  {
    title: "Chemical Fertilizers",
    description: "High-performance nutrients for maximum crop yield",
    items: "30+ Products",
    image: chemicalImg,
  },
  {
    title: "Liquid Solutions",
    description: "Fast-absorbing liquid formulas for quick results",
    items: "15+ Products",
    image: liquidImg,
  },
];

const Categories = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Explore Our Range</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fertilizer Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive selection of fertilizers tailored to your specific agricultural
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none hover-lift animate-fade-in-up"
              style={{ boxShadow: "var(--shadow-card)", animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-lime-accent text-foreground px-4 py-1.5 rounded-full text-sm font-medium shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {category.items}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Link to="/products">
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group/btn"
                  >
                    View Products
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
