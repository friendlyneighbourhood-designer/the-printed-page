import Layout from "@/components/layout/Layout";
import { books } from "@/data/books";

const Publishers = () => {
  const publisherCounts = books.reduce((acc, book) => {
    acc[book.publisher] = (acc[book.publisher] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const publishers = Object.entries(publisherCounts)
    .sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <Layout>
      <section className="container-narrow py-6">
        <h1 className="catalogue-title mb-2">Publishers</h1>
        <p className="text-sm text-muted-foreground max-w-lg mb-4">
          Publishers represented in our catalogue.
        </p>
        
        <div className="border-t border-border-subtle pt-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
            {publishers.map(([publisher, count]) => (
              <li key={publisher} className="flex justify-between border-b border-border-subtle py-1.5">
                <span>{publisher}</span>
                <span className="text-xs text-muted-foreground">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Publishers;
