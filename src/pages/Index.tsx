import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/books/CategoryCard";
import { categories, books } from "@/data/books";

const Index = () => {
  const getCategoryBookCount = (slug: string) => {
    return books.filter(book => book.category === slug).length;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-narrow py-16 md:py-24 border-b border-border-subtle">
        <p className="uppercase-label text-muted-foreground mb-4">Est. 2024</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 max-w-4xl">
          Books for the <em className="font-normal">serious</em> reader
        </h1>
        <p className="body-text text-muted-foreground max-w-xl mb-8 text-base md:text-lg">
          A curated catalogue of academic and general interest books. Philosophy, history, 
          literature, science — carefully selected editions from leading publishers.
        </p>
        <Link 
          to="/categories" 
          className="inline-block border border-foreground text-foreground px-6 py-3 text-sm font-sans tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          Browse the Catalogue
        </Link>
      </section>

      {/* Categories Grid */}
      <section className="container-narrow py-12">
        <h2 className="uppercase-label text-muted-foreground mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-8">
          {categories.map(category => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              name={category.name}
              bookCount={getCategoryBookCount(category.slug)}
              coverImage={category.coverImage}
            />
          ))}
        </div>
      </section>

      {/* Recent Additions */}
      <section className="container-narrow py-12 border-t border-border-subtle">
        <h2 className="uppercase-label text-muted-foreground mb-6">Recent Additions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
          {books.slice(0, 6).map(book => (
            <a key={book.id} href={`/book/${book.id}`} className="block group">
              <div className="aspect-[2/3] bg-muted mb-2 overflow-hidden">
                <img 
                  src={book.coverImage} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-sm font-bold leading-tight mb-1 group-hover:text-link">
                {book.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-1">{book.author}</p>
              <p className="text-xs text-muted-foreground">${book.price.toFixed(2)}</p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
