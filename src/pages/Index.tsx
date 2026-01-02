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
      {/* Editorial Hero */}
      <section className="container-narrow py-8 border-b border-border-subtle">
        <h1 className="catalogue-title mb-3">
          A catalogue of essential reading
        </h1>
        <p className="body-text text-muted-foreground max-w-lg mb-4">
          Academic and general interest books. Philosophy, history, literature, science — 
          selected editions from leading publishers.
        </p>
        <Link to="/categories" className="text-sm">
          View all categories →
        </Link>
      </section>

      {/* Categories Grid */}
      <section className="container-narrow py-6">
        <p className="section-label mb-4">Browse by Category</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-5">
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
      <section className="container-narrow py-6 border-t border-border-subtle">
        <p className="section-label mb-4">Recent Additions</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-5">
          {books.slice(0, 6).map(book => (
            <Link key={book.id} to={`/book/${book.id}`} className="block">
              <div className="aspect-[2/3] bg-muted mb-1.5 overflow-hidden">
                <img 
                  src={book.coverImage} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs leading-tight mb-0.5">{book.title}</h3>
              <p className="text-xs text-muted-foreground">{book.author}</p>
              <p className="text-xs text-muted-foreground">${book.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
