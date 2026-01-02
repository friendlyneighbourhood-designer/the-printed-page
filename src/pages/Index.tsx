import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { categories, books, getStaffPicks, getComingSoon } from "@/data/books";

const Index = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const comingSoonBooks = getComingSoon();
  const staffPicks = getStaffPicks();
  const featuredBook = books[3]; // War and Peace as featured

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % comingSoonBooks.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + comingSoonBooks.length) % comingSoonBooks.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container-wide py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The Heights of Modern Literature
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Discover our curated collection of timeless classics and contemporary masterpieces. 
                From philosophy to fiction, find your next great read.
              </p>
              <Link to="/categories" className="btn-primary inline-block">
                Discover More
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link to={`/book/${featuredBook.id}`} className="group">
                <div className="relative">
                  <img
                    src={featuredBook.coverImage}
                    alt={featuredBook.title}
                    className="w-72 h-auto shadow-2xl transition-transform group-hover:scale-105"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-navy text-navy-foreground px-4 py-2 text-sm font-medium">
                    Featured
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="container-wide py-16">
        <h2 className="section-heading">Browse by Category</h2>
        <p className="section-subheading">Explore our carefully curated collections</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden mb-3">
                <img
                  src={category.coverImage}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold group-hover:text-navy transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Additions */}
      <section className="bg-secondary py-16">
        <div className="container-wide">
          <h2 className="section-heading">Recent Additions</h2>
          <p className="section-subheading">The latest arrivals to our collection</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {books.slice(0, 6).map((book) => (
              <Link key={book.id} to={`/book/${book.id}`} className="group">
                <div className="aspect-[2/3] overflow-hidden mb-3">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-semibold text-sm leading-tight mb-1 group-hover:text-navy transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{book.author}</p>
                <p className="text-sm font-medium">${book.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Picks */}
      <section className="container-wide py-16">
        <h2 className="section-heading">Staff Picks</h2>
        <p className="section-subheading">Hand-selected recommendations from our team</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {staffPicks.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`} className="group">
              <div className="aspect-[2/3] overflow-hidden mb-3 relative">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-navy text-navy-foreground px-2 py-1 text-xs font-medium uppercase tracking-wide">
                  Staff Pick
                </div>
              </div>
              <h3 className="font-serif font-semibold leading-tight mb-1 group-hover:text-navy transition-colors">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">{book.author}</p>
              <p className="text-sm font-medium">${book.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon Carousel */}
      <section className="bg-secondary py-16">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-heading">Coming Soon</h2>
              <p className="text-muted-foreground text-lg">Pre-order upcoming releases</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 border border-border hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border border-border hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comingSoonBooks.map((book, index) => (
              <div
                key={book.id}
                className={`flex gap-6 items-start ${
                  index === carouselIndex ? "block" : "hidden md:flex"
                }`}
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-32 h-48 object-cover flex-shrink-0"
                />
                <div>
                  <span className="text-xs uppercase tracking-wide text-navy font-medium mb-2 block">
                    Coming Soon
                  </span>
                  <h3 className="font-serif text-xl font-semibold mb-2">{book.title}</h3>
                  <p className="text-muted-foreground mb-2">{book.author}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {book.description}
                  </p>
                  <p className="font-medium">${book.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container-wide py-16">
        <div className="bg-navy text-navy-foreground p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-navy-foreground/80 mb-8 max-w-xl mx-auto">
            Join the BookPyramid community for new releases and curated reading lists.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-foreground bg-background outline-none"
            />
            <button
              type="submit"
              className="bg-navy-foreground text-navy px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-navy-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
