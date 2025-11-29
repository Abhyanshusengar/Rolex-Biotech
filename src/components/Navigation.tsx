import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

// logo now in public/assets
const logoPath = "/assets/rolex-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 left-0 right-0 z-40 bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-md shadow-lg border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoPath}
              alt="Rolex new biotech" 
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="text-xl font-bold text-primary-foreground group-hover:text-lime-accent transition-colors duration-300 hidden lg:block">
              Rolex New Biotech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-primary-foreground hover:text-lime-accent transition-all duration-300 relative group ${isActive('/') ? 'text-lime-accent font-semibold' : ''}`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-lime-accent transform origin-left transition-transform duration-300 ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link 
              to="/products" 
              className={`text-primary-foreground hover:text-lime-accent transition-all duration-300 relative group ${isActive('/products') ? 'text-lime-accent font-semibold' : ''}`}
            >
              Products
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-lime-accent transform origin-left transition-transform duration-300 ${isActive('/products') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link 
              to="/about" 
              className={`text-primary-foreground hover:text-lime-accent transition-all duration-300 relative group ${isActive('/about') ? 'text-lime-accent font-semibold' : ''}`}
            >
              About
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-lime-accent transform origin-left transition-transform duration-300 ${isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link 
              to="/contact" 
              className={`text-primary-foreground hover:text-lime-accent transition-all duration-300 relative group ${isActive('/contact') ? 'text-lime-accent font-semibold' : ''}`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-lime-accent transform origin-left transition-transform duration-300 ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex text-primary-foreground hover:text-lime-accent hover:bg-primary-foreground/10">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Desktop CTA */}
            <Link to="/contact">
              <Button className="hidden md:flex bg-lime-accent hover:bg-lime-accent/90 text-primary group relative overflow-hidden shadow-lg">
                <span className="relative z-10 font-semibold">Get A Quote</span>
                <div className="absolute inset-0 bg-primary-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground hover:text-lime-accent hover:bg-primary-foreground/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-primary-foreground hover:text-lime-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-primary-foreground hover:text-lime-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-primary-foreground hover:text-lime-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-primary-foreground hover:text-lime-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-lime-accent hover:bg-lime-accent/90 text-primary group relative overflow-hidden">
                  <span className="relative z-10 font-semibold">Get A Quote</span>
                  <div className="absolute inset-0 bg-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
