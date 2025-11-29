import { Phone, MapPin, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
            <a href="tel:18002740555" className="flex items-center gap-2 hover:text-lime-accent transition-colors group">
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>1800 2740 555</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-lime-accent transition-colors group">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline">F-18, Industrial Area, Sikandrabad, Buland Sahar (UP) - 203205</span>
              <span className="lg:hidden">Location</span>
            </a>
            <a href="mailto:rolex.newbiotech@gmail.com" className="flex items-center gap-2 hover:text-lime-accent transition-colors group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>rolex.newbiotech@gmail.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1">
            <span className="mr-2 text-primary-foreground/80 hidden md:inline">We Are Social:</span>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-lime-accent hover:text-foreground rounded transition-all duration-300 group"
            >
              <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-lime-accent hover:text-foreground rounded transition-all duration-300 group"
            >
              <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-lime-accent hover:text-foreground rounded transition-all duration-300 group"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-lime-accent hover:text-foreground rounded transition-all duration-300 group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
