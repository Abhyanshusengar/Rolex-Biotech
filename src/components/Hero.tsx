import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Leaf, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Agricultural field"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "var(--gradient-hero)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-lime-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-lime-accent/30">
            <Sparkles className="w-4 h-4 text-lime-accent" />
            <span className="text-sm text-white font-medium">Premium Quality Fertilizers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nurture Your
            <br />
            <span className="text-lime-accent">Garden's Growth</span>
          </h1>

          <p className="text-xl text-white/90 mb-4 max-w-2xl">
            Transform your agricultural dreams into reality with our scientifically formulated
            fertilizers. Boost crop yield, improve soil health, and cultivate success.
          </p>
          
          <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-2xl">
            <p className="text-2xl font-semibold text-lime-accent italic text-center">
              "किसान बढ़ेगा तो देश बढ़ेगा"
            </p>
            <p className="text-base text-white/90 text-center mt-2">
              When farmers grow, the nation grows
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/products">
              <Button size="lg" className="bg-lime-accent hover:bg-lime-accent/90 text-foreground w-full group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Leaf className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                  Explore Products
                </span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full group"
              >
                <TrendingUp className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-[-2px]" />
                View Results
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Happy Farmers</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/80">Products</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
