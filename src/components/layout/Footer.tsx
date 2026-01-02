import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground mt-16">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Us */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">About Us</h3>
            <p className="text-navy-foreground/80 leading-relaxed">
              BookPyramid is your destination for premium literature and timeless classics. 
              We curate the finest books from around the world, bringing you closer to the 
              heights of literary excellence.
            </p>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Helpful Links</h3>
            <ul className="space-y-2 text-navy-foreground/80">
              <li>
                <Link to="/shipping" className="hover:text-navy-foreground transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-navy-foreground transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-navy-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-navy-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-navy-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-navy-foreground/80 mb-4">
              Stay connected for the latest releases and literary inspiration.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-foreground/10 rounded-full hover:bg-navy-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-foreground/10 rounded-full hover:bg-navy-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-foreground/10 rounded-full hover:bg-navy-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-foreground/10 rounded-full hover:bg-navy-foreground/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-foreground/20 mt-10 pt-6 text-center">
          <p className="text-navy-foreground/60 text-sm">
            © 2025 BookPyramid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
