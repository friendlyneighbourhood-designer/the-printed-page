import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/books/CategoryCard";
import { categories, books } from "@/data/books";

const Categories = () => {
  const getCategoryBookCount = (slug: string) => {
    return books.filter(book => book.category === slug).length;
  };

  return (
    <Layout>
      <section className="container-wide py-12">
        <h1 className="section-heading">All Categories</h1>
        <p className="section-subheading">Browse our complete collection by subject</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
    </Layout>
  );
};

export default Categories;
