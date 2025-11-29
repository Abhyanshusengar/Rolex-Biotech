import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/assets/rolex-logo.png"   // 👈 PUBLIC PATH, NO IMPORT
                alt="Rolex new biotech"
                className="h-16 w-auto"
              />
              <span className="text-xl font-bold text-background">
                Rolex new biotech
              </span>
            </Link>

            <p className="text-background/70 text-sm mb-3">
              Manufacturing, Trading & Importer - Pesticides, Insecticides, Fungicides,
              Herbicides, Micro Nutrient Fertilizers, Household Insects, Public Health
              Insects etc. & Consignee Agents
            </p>

            <p className="text-background/70 text-sm mb-1">
              AN ISO 9001:2015 CERTIFIED COMPANY
            </p>

            <p className="text-lime-accent font-semibold text-base italic">
              "किसान बढ़ेगा तो देश बढ़ेगा"
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  to="/products"
                  className="hover:text-lime-accent transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  Organic Fertilizers
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-lime-accent transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  Chemical Fertilizers
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-lime-accent transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  Liquid Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-lime-accent transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  Soil Conditioners
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  to="/about"
                  className="hover:text-lime-accent transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-lime-accent transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-lime-accent transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-lime-accent transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-lime-accent hover:text-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-lime-accent hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-lime-accent hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-background/70">
              <strong>Email:</strong> rolex.newbiotech@gmail.com <br />
              <strong>Toll Free:</strong> 1800 2740 555
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 Rolex new biotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
