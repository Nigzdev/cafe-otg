import { Link } from 'react-router-dom';
import { Gamepad2, Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-xl tracking-wider">
                <span className="text-foreground">OTG</span>
                <span className="text-primary"> CAFÉ</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your ultimate gaming destination. Premium setups, chill vibes, and endless gaming sessions await.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Pricing
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:+919711442512"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 97114 42512
              </a>
              <a
                href="https://instagram.com/cafeotg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @cafeotg
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Shop G7a, Onyx Plaza, Rajendra Nagar, Sector 3, Vasundhara, Ghaziabad 201012</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Cafe Off The Grid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
