import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border-subtle bg-content mt-16">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Description */}
          <div>
            <h3 className="font-serif font-bold text-base mb-3">Aldine Press</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A curated catalogue of academic and general interest books. We work directly with publishers 
              to bring you thoughtfully selected titles across philosophy, history, literature, and the sciences.
            </p>
          </div>
          
          {/* Information Links */}
          <div>
            <h4 className="uppercase-label text-foreground mb-3">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-foreground">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="uppercase-label text-foreground mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="block">Order via WhatsApp</span>
                <a href="https://wa.me/1234567890" className="text-link">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="block mt-3">Email</span>
                <a href="mailto:orders@aldinepress.com" className="text-link">
                  orders@aldinepress.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-subtle mt-10 pt-6">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Aldine Press. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
