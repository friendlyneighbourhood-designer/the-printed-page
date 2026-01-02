import Layout from "@/components/layout/Layout";
import { books } from "@/data/books";

const Publishers = () => {
  // Get unique publishers and count their books
  const publisherCounts = books.reduce((acc, book) => {
    acc[book.publisher] = (acc[book.publisher] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const publishers = Object.entries(publisherCounts)
    .sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <Layout>
      <section className="container-narrow py-12">
        <h1 className="editorial-headline mb-4">Publishers</h1>
        <p className="body-text text-muted-foreground max-w-2xl mb-10">
          We partner with leading academic and trade publishers to bring you quality editions 
          of essential texts. Below is a list of publishers represented in our catalogue.
        </p>
        
        <div className="border-t border-border-subtle pt-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {publishers.map(([publisher, count]) => (
              <li key={publisher} className="flex justify-between items-baseline border-b border-border-subtle pb-3">
                <span className="font-serif">{publisher}</span>
                <span className="text-xs text-muted-foreground">{count} {count === 1 ? 'title' : 'titles'}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Publishers;
