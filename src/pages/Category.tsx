import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BookCard from "@/components/books/BookCard";
import { getBooksByCategory, getCategoryBySlug } from "@/data/books";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const categoryBooks = getBooksByCategory(slug || "");

  if (!category) {
    return (
      <Layout>
        <div className="container-wide py-16 text-center">
          <h1 className="section-heading">Category not found</h1>
          <Link to="/categories" className="btn-primary inline-block mt-4">
            Browse Categories
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container-wide py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/categories" className="hover:text-foreground">Categories</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{category.name}</span>
        </nav>

        <h1 className="section-heading">{category.name}</h1>
        <p className="section-subheading max-w-2xl">{category.description}</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
          <p className="text-muted-foreground text-center py-12">
            No books in this category yet.
          </p>
        )}
      </section>
    </Layout>
  );
};

export default Category;
