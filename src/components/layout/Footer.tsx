import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border-subtle bg-content mt-8">
      <div className="container-narrow py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Brand Description */}
          <div>
            <p className="mb-2">Aldine Press</p>
            <p className="text-muted-foreground leading-relaxed">
              Academic and general interest books. Selected titles from leading publishers.
            </p>
          </div>
          
          {/* Information Links */}
          <div>
            <p className="section-label mb-2">Information</p>
            <ul className="space-y-1 text-muted-foreground">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <p className="section-label mb-2">Contact</p>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="https://wa.me/1234567890">WhatsApp</a></li>
              <li><a href="mailto:orders@aldinepress.com">orders@aldinepress.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-subtle mt-4 pt-3">
          <p className="text-xs text-muted-foreground">
            © 2026 Aldine Press
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
