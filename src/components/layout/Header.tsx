import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border-subtle bg-content">
      <div className="container-narrow py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight text-foreground hover:opacity-100">
          Aldine Press
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link to="/" className="uppercase-label text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/categories" className="uppercase-label text-muted-foreground hover:text-foreground">
            Categories
          </Link>
          <Link to="/publishers" className="uppercase-label text-muted-foreground hover:text-foreground">
            Publishers
          </Link>
          <Link to="/contact" className="uppercase-label text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
