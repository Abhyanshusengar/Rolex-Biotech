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
    name: "Ferrous Sulphate",
    image: "/assets/top selling/img1.jpg",
  },
  {
    id: 2,
    name: "Pretila EW",
    image: "/assets/top selling/img2.jpeg",
  },
  {
    id: 3,
    name: "Dhoom",
    image: "/assets/top selling/img3.jpg",
  },
  {
    id: 4,
    name: "Whitekill",
    image: "/assets/top selling/img4.jpg",
  },
  {
    id: 5,
    name: "Black Commando",
    image: "/assets/top selling/img.jpg",
  },
];

const ProductShowcase = () => {
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
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
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
