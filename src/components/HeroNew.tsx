import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// Image now loaded from public/assets
const heroImage = "/assets/hero-woman-garden.png";

const HeroNew = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
          .font-heading-custom {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional gardener with watering can in greenhouse"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-foreground/30 to-transparent" />
      </div>

      {/* Decorative grass at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#7fb539]/30 to-transparent z-5" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-heading-custom text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            CULTIVATING
            <br />
            <span className="text-lime-accent italic">PROSPERITY</span>
          </h1>

          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg font-sans">
            Rolex New Biotech delivers high-quality micronutrients and bio-fertilizers to empower farmer prosperity.
            We manufacture trusted PGRs, bio-pesticides, organic inputs, and advanced agro-chemicals.
            Reliable quality, expert support, and progressive innovation—made for today's agriculture.
          </p>

          <Link to="/contact">
            <Button
              size="lg"
              className="bg-lime-accent hover:bg-lime-accent/90 text-foreground font-bold px-8 py-6 text-lg shadow-2xl group relative overflow-hidden transition-transform active:scale-95"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
