import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { books } from "@/data/books";

const Publishers = () => {
  const publishers = [...new Set(books.map(book => book.publisher))];
  
  const getPublisherBookCount = (publisher: string) => {
    return books.filter(book => book.publisher === publisher).length;
  };

  return (
    <Layout>
      <section className="container-wide py-12">
        <h1 className="section-heading">Our Publishers</h1>
        <p className="section-subheading">We work with leading academic and literary publishers</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {publishers.map(publisher => (
            <div key={publisher} className="p-6 border border-border hover:border-navy transition-colors">
              <h3 className="font-serif text-lg font-semibold mb-2">{publisher}</h3>
              <p className="text-sm text-muted-foreground">{getPublisherBookCount(publisher)} titles available</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Looking for a specific title or publisher?</p>
          <Link to="/contact" className="btn-primary inline-block">Contact Us</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Publishers;
