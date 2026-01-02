import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BookCard from "@/components/books/BookCard";
import { getCategoryBySlug, getBooksByCategory } from "@/data/books";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const categoryBooks = slug ? getBooksByCategory(slug) : [];

  if (!category) {
    return (
      <Layout>
        <section className="container-narrow py-6">
          <h1 className="catalogue-title mb-2">Category not found</h1>
          <p className="text-sm text-muted-foreground">
            <Link to="/categories">Return to categories</Link>
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container-narrow py-6">
        {/* Breadcrumb */}
        <nav className="mb-3">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li><Link to="/categories">Categories</Link></li>
            <li>/</li>
            <li className="text-foreground">{category.name}</li>
          </ol>
        </nav>

        <h1 className="catalogue-title mb-2">{category.name}</h1>
        <p className="text-sm text-muted-foreground max-w-lg mb-4">
          {category.description}
        </p>
        
        <div className="border-t border-border-subtle pt-4">
          <p className="section-label mb-3">
            {categoryBooks.length} {categoryBooks.length === 1 ? 'title' : 'titles'}
          </p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-4">
            {categoryBooks.map(book => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                coverImage={book.coverImage}
              />
            ))}
          </div>
          
          {categoryBooks.length === 0 && (
            <p className="text-sm text-muted-foreground">No books in this category yet.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Category;
