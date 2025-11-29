import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

// Importing Images from src/assets/categorieshome
import fertilizerImg from "@/assets/categorieshome/fertilizer.png";
import fungicideImg from "@/assets/categorieshome/fungicide.png";
import herbicideImg from "@/assets/categorieshome/herbicide.png";
import insecticideImg from "@/assets/categorieshome/insecticide.png";
import pgrImg from "@/assets/categorieshome/pgr.png";
import spreaderImg from "@/assets/categorieshome/spreader.png";

const categories = [
  {
    title: "Fertilizers",
    items: "12 Items",
    image: fertilizerImg,
  },
  {
    title: "FUNGICIDE",
    items: "23 Items",
    image: fungicideImg,
  },
  {
    title: "HERBICIDE",
    items: "28 Items",
    image: herbicideImg,
  },
  {
    title: "INSECTICIDE",
    items: "58 Items",
    image: insecticideImg,
  },
  {
    title: "PGR",
    items: "6 Items",
    image: pgrImg,
  },
  {
    title: "SPREADER & ANTIBIOTECH",
    items: "4 Items",
    image: spreaderImg,
  },
];

const CategoriesNew = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground/70 font-medium tracking-wider uppercase">Explore Our Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Crop Protection
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/products"
              className="group flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Changes made here:
                  1. Added 'p-4' to the container div to give the image some breathing room from the border.
                  2. Changed 'object-cover' to 'object-contain' in the img tag so the whole image is visible.
              */}
              <div className="relative mb-4 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-border group-hover:border-primary transition-all duration-500 shadow-md group-hover:shadow-xl bg-white p-4 flex items-center justify-center">
                
                <img 
                  src={category.image} 
                  alt={category.title}
                  // Changed object-cover to object-contain
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Optional Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 uppercase">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">({category.items})</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesNew;