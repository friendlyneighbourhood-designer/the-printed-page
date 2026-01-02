import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border-subtle bg-content">
      <div className="container-narrow py-3 flex items-center justify-between">
        <Link to="/" className="text-base tracking-tight no-underline">
          Aldine Press
        </Link>
        
        <nav className="flex items-center gap-5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <Link to="/categories" className="hover:text-foreground">Categories</Link>
          <Link to="/publishers" className="hover:text-foreground">Publishers</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
