import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="glass-card mt-20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <img src={logo} alt="The Grayhound Group" className="h-12 mb-4" />
            <p className="text-muted-foreground text-sm">
              Developing Athletes — Mind, Body & Behavior
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/team" className="text-muted-foreground hover:text-accent transition-colors">
                Our Team
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-accent transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:9802240484"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">(980) 224-0484</span>
              </a>
              <a
                href="mailto:thegrayhoundgroupinfo@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">thegrayhoundgroupinfo@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  13016 Eastfield Rd. Suite B200-281<br />
                  Huntersville, NC 28078
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full glass-card hover:bg-accent transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full glass-card hover:bg-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full glass-card hover:bg-accent transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Grayhound Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
