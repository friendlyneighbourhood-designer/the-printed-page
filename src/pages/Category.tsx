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
        <section className="container-narrow py-12">
          <h1 className="editorial-headline mb-4">Category not found</h1>
          <p className="text-muted-foreground">
            <Link to="/categories" className="text-link">Return to categories</Link>
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container-narrow py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li>/</li>
            <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
            <li>/</li>
            <li className="text-foreground">{category.name}</li>
          </ol>
        </nav>

        <h1 className="editorial-headline mb-4">{category.name}</h1>
        <p className="body-text text-muted-foreground max-w-2xl mb-10">
          {category.description}
        </p>
        
        <div className="border-t border-border-subtle pt-8">
          <p className="uppercase-label text-muted-foreground mb-6">
            {categoryBooks.length} {categoryBooks.length === 1 ? 'title' : 'titles'}
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
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
            <p className="text-muted-foreground">No books in this category yet.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Category;
