import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartItemCount = 0;

  const navLinks = [
    { to: "/categories", label: "Books" },
    { to: "/authors", label: "Authors" },
    { to: "/categories", label: "Categories" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container-wide py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground">
              BOOKPYRAMID
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center bg-secondary rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm outline-none w-48 placeholder:text-muted-foreground"
              />
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-secondary rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-navy text-navy-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            {/* Mobile Search */}
            <div className="flex items-center bg-secondary rounded-full px-4 py-2 mb-4">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
              />
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wide py-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
