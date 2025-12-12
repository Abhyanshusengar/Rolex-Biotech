import React from "react";
import { Check, Leaf } from "lucide-react";

// All images now come from public/assets folder
const gardeningImg = "/assets/about-gardening.jpg";
const manGardeningImg = "/assets/about-man-gardening.jpg";
const womanPortraitImg = "/assets/about-woman-portrait.jpg";
const profilePic = "/assets/profile.jpeg";

const services = [
  "Certified Bio-Fertilizers",
  "Micro-Nutrient Solutions",
];

const AboutStats = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image Grid with Stats */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up">

            {/* Top Left - Large Image */}
            <div className="col-span-1 row-span-2">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={gardeningImg}
                  alt="Agricultural field"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Top Right - Stat Card */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-sm text-center opacity-90">Years Experience</div>
            </div>

            {/* Middle Right */}
            <div className="row-span-2">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={manGardeningImg}
                  alt="Expert farmer at work"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom Left */}
            <div className="row-span-2">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={womanPortraitImg}
                  alt="Research team member"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom Right Stats */}
            <div className="space-y-4">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold mb-1">200+</div>
                <div className="text-xs text-center opacity-90">Product Range</div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold mb-1">10K+</div>
                <div className="text-xs text-center opacity-90">Happy Farmers</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="inline-flex items-center space-x-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/70 font-medium tracking-wider uppercase">
                Turning Ideas Into Realities
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Delivering Nature Right To Your Door
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Rolex New Biotech is committed to a highly productive and progressive vision of making farmers prosperous.
              We introduce our Company Rolex New Biotech, as a professionally managed micro nutrients & bio fertilizer
              company. We follow strict quality management systems and emerged as one of the leading manufacturers,
              exporters, and suppliers of Plant Growth Regulators, Bio Pesticides, and Organic Zyme Granules. Our aim is
              to provide our customers the best products and technical services at economical prices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Founder Section */}
            <div className="flex items-center space-x-5 pt-6 border-t border-border">

              {/* Founder Image */}
              <div className="relative shrink-0">
                <img
                  src={profilePic}
                  alt="Mr. Bhupendra Kumar Singh"
                  className="w-16 h-16 rounded-full object-cover border-2 border-background shadow-md hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1 border-2 border-background">
                  <Check className="w-3 h-3" />
                </div>
              </div>

              {/* Founder Name */}
              <div>
                <h4 className="font-bold text-foreground text-lg leading-none mb-1">
                   DR. BHUPENDRA KUMAR SINGH
                </h4>
                <span className="text-sm text-primary font-medium tracking-wide">
                  FOUNDER & CHAIRMAN
                </span>
              </div>

              {/* Signature */}
              <div className="hidden sm:block ml-auto opacity-40 text-muted-foreground">
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <path d="M5,30 Q25,5 50,30 T95,20" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
