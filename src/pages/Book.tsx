import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getBookById, getCategoryBySlug } from "@/data/books";

const Book = () => {
  const { id } = useParams<{ id: string }>();
  const book = id ? getBookById(id) : undefined;
  const category = book ? getCategoryBySlug(book.category) : undefined;

  if (!book) {
    return (
      <Layout>
        <section className="container-narrow py-8">
          <h1 className="catalogue-title mb-2">Book not found</h1>
          <p className="text-sm text-muted-foreground">
            <Link to="/">Return to catalogue</Link>
          </p>
        </section>
      </Layout>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order:\n\n${book.title} by ${book.author}\nISBN: ${book.isbn}\nPrice: $${book.price.toFixed(2)}`
  );
  const whatsappLink = `https://wa.me/1234567890?text=${whatsappMessage}`;

  return (
    <Layout>
      <section className="container-narrow py-6">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            {category && (
              <>
                <li><Link to={`/category/${category.slug}`}>{category.name}</Link></li>
                <li>/</li>
              </>
            )}
            <li className="text-foreground truncate max-w-[180px]">{book.title}</li>
          </ol>
        </nav>

        {/* Book Details - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
          {/* Cover Image */}
          <div>
            <div className="aspect-[2/3] bg-muted overflow-hidden">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book Information */}
          <div>
            <h1 className="text-xl md:text-2xl leading-tight mb-1">{book.title}</h1>
            <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
            <p className="text-sm text-muted-foreground mb-4">${book.price.toFixed(2)}</p>

            {/* Order Button */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-foreground text-foreground px-4 py-2 text-xs no-underline hover:bg-foreground hover:text-background mb-6"
            >
              Order via WhatsApp
            </a>

            {/* Description */}
            <div className="border-t border-border-subtle pt-4 mb-4">
              <p className="section-label mb-2">Description</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {book.description}
              </p>
            </div>

            {/* Book Details */}
            <div className="border-t border-border-subtle pt-4">
              <p className="section-label mb-2">Details</p>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Publisher</dt>
                  <dd>{book.publisher}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Date</dt>
                  <dd>{book.publicationDate}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Pages</dt>
                  <dd>{book.pages}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">ISBN</dt>
                  <dd>{book.isbn}</dd>
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
