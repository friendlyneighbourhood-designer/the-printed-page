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
        <section className="container-narrow py-12">
          <h1 className="editorial-headline mb-4">Book not found</h1>
          <p className="text-muted-foreground">
            <Link to="/" className="text-link">Return to catalogue</Link>
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
      <section className="container-narrow py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li>/</li>
            {category && (
              <>
                <li>
                  <Link to={`/category/${category.slug}`} className="hover:text-foreground">
                    {category.name}
                  </Link>
                </li>
                <li>/</li>
              </>
            )}
            <li className="text-foreground truncate max-w-[200px]">{book.title}</li>
          </ol>
        </nav>

        {/* Book Details - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cover Image */}
          <div className="md:col-span-1">
            <div className="aspect-[2/3] bg-muted overflow-hidden sticky top-8">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book Information */}
          <div className="md:col-span-2">
            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-2">
              {book.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{book.author}</p>
            
            <p className="text-xl mb-8">${book.price.toFixed(2)}</p>

            {/* Order Button */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground text-background px-6 py-3 text-sm font-sans font-medium tracking-wide mb-10 hover:opacity-80 transition-opacity"
            >
              Order via WhatsApp
            </a>

            {/* Description */}
            <div className="border-t border-border-subtle pt-8 mb-8">
              <h2 className="uppercase-label text-foreground mb-4">Description</h2>
              <p className="body-text text-muted-foreground leading-relaxed">
                {book.description}
              </p>
            </div>

            {/* Book Details */}
            <div className="border-t border-border-subtle pt-8">
              <h2 className="uppercase-label text-foreground mb-4">Details</h2>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Publisher</dt>
                  <dd className="text-foreground">{book.publisher}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Publication Date</dt>
                  <dd className="text-foreground">{book.publicationDate}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Pages</dt>
                  <dd className="text-foreground">{book.pages}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">ISBN</dt>
                  <dd className="text-foreground">{book.isbn}</dd>
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
