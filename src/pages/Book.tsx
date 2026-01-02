import { useParams, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getBookById, getCategoryBySlug } from "@/data/books";

const Book = () => {
  const { id } = useParams<{ id: string }>();
  const book = getBookById(id || "");

  if (!book) {
    return (
      <Layout>
        <div className="container-wide py-16 text-center">
          <h1 className="section-heading">Book not found</h1>
          <Link to="/categories" className="btn-primary inline-block mt-4">
            Browse Books
          </Link>
        </div>
      </Layout>
    );
  }

  const category = getCategoryBySlug(book.category);

  return (
    <Layout>
      <section className="container-wide py-12">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/categories" className="hover:text-foreground">Categories</Link>
          <span className="mx-2">/</span>
          {category && (
            <>
              <Link to={`/category/${category.slug}`} className="hover:text-foreground">
                {category.name}
              </Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-foreground">{book.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex justify-center lg:justify-start">
            <img src={book.coverImage} alt={book.title} className="w-full max-w-sm shadow-xl" />
          </div>

          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{book.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">by {book.author}</p>
            <p className="text-3xl font-serif font-semibold mb-8">${book.price.toFixed(2)}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{book.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
              <a
                href={`https://wa.me/1234567890?text=I'd like to order: ${book.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Order via WhatsApp
              </a>
            </div>

            <div className="border-t border-border pt-8">
              <h2 className="font-serif text-xl font-semibold mb-4">Details</h2>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Publisher</dt>
                  <dd className="font-medium">{book.publisher}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">ISBN</dt>
                  <dd className="font-medium">{book.isbn}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Pages</dt>
                  <dd className="font-medium">{book.pages}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Publication Date</dt>
                  <dd className="font-medium">{book.publicationDate}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
