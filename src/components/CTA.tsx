import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Boost Your Harvest?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied farmers who have transformed their yields with our premium
            fertilizers. Get started today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-lime-accent hover:bg-lime-accent/90 text-foreground w-full group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Request a Quote
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full group transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                Call Us Now
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-lime-accent rounded-full" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-lime-accent rounded-full" />
              <span>Expert Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-lime-accent rounded-full" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
