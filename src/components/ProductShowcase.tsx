import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

// Just store the URL strings – they point to files in public/assets
const products = [
  {
    id: 1,
    name: "BLACK GOLD",
    image: "/assets/top selling/Black Gold.jpeg",
  },
  {
    id: 2,
    name: "RAMBAAN",
    image: "/assets/top selling/Rambaan.png",
  },
  {
    id: 3,
    name: "ANKUSH 505",
    image: "/assets/top selling/ankush.png",
  },
  {
    id: 4,
    name: "RDX",
    image: "/assets/top selling/RDX.PNG",
  },
  {
    id: 5,
    name: "RDX-ULTRA",
    image: "/assets/top selling/rdx-ultra.PNG",
  },
  {
    id: 6,
    name: "FUARA",
    image: "/assets/top selling/Fuara.png",
  },
  {
    id: 7,
    name: "ROOT 2 FRUIT",
    image: "/assets/top selling/ROOT2FRUIT.png",
  },
  {
    id: 8,
    name: "GANNA SPECIAL",
    image: "/assets/top selling/SUGAR CANE SPECIAL.jpeg",
  },
  {
    id: 9,
    name: "SUPER HIT",
    image: "/assets/top selling/SUPERHIT.jpeg",
  },

  {
    id: 10,
    name: "DHOOM",
    image: "/assets/top selling/Dhoom.jpeg",
  },
  {
    id: 11,
    name: "ACTION PLUS",
    image: "/assets/top selling/Action Plus.png",
  },
];

const ProductShowcase = () => {
  // State to hold the carousel API instance
  const [api, setApi] = React.useState(null);
  // Ref to track if the mouse is hovering over the carousel
  const isPaused = React.useRef(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Set up an interval to scroll to the next slide every 1.5 seconds (Faster)
    const intervalId = setInterval(() => {
      // Only scroll if the user is not hovering
      if (!isPaused.current) {
        api.scrollNext();
      }
    }, 1000);

    // Cleanup the interval when the component unmounts or api changes
    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-20 relative overflow-hidden bg-[hsl(145,30%,25%)]">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-lime-accent mb-3">
            <Leaf className="w-4 h-4" />
            <span className="uppercase tracking-wide">High Performance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Top Selling Products
          </h2>
        </div>

        <Carousel
          setApi={setApi} // Bind the API to our state
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          // Pause auto-scroll on hover
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          <CarouselContent className="-ml-6">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-6 md:basis-1/3 lg:basis-1/4"
              >
                <Link to="/products" className="group block">
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                      <div className="aspect-square mb-6 flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white hover:bg-lime-accent hover:text-primary border-2" />
          <CarouselNext className="right-4 bg-white hover:bg-lime-accent hover:text-primary border-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductShowcase;