import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// Image loaded from public/assets
const heroImage = "/assets/hero-woman-garden.png";

const HeroNew = () => {
  return (
    <section className="relative overflow-hidden">
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
        {/* Darker overlay on mobile so text stays readable even with less height */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Decorative grass at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-gradient-to-t from-[#7fb539]/30 to-transparent z-[5]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* ⬇️ shorter min-height + less padding on mobile so more of bg is visible */}
          <div className="min-h-[55vh] md:min-h-[75vh] flex items-center justify-center md:justify-start py-14 md:py-24">
            <div className="max-w-3xl animate-fade-in-up text-center md:text-left">
              <h1 className="font-heading-custom text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-2xl">
                CULTIVATING
                <br />
                <span className="text-lime-accent italic">PROSPERITY</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-lg text-white/95 mb-5 md:mb-7 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-lg font-sans">
                Rolex New Biotech delivers high-quality micronutrients and
                bio-fertilizers to empower farmer prosperity. We manufacture
                trusted PGRs, bio-pesticides, organic inputs, and advanced
                agro-chemicals. Reliable quality, expert support, and
                progressive innovation—made for today&apos;s agriculture.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-lime-accent hover:bg-lime-accent/90 text-foreground font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base shadow-2xl group relative overflow-hidden transition-transform active:scale-95"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
