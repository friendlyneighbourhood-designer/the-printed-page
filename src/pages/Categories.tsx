import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/books/CategoryCard";
import { categories, books } from "@/data/books";

const Categories = () => {
  const getCategoryBookCount = (slug: string) => {
    return books.filter(book => book.category === slug).length;
  };

  return (
    <Layout>
      <section className="container-narrow py-6">
        <h1 className="catalogue-title mb-2">Categories</h1>
        <p className="text-sm text-muted-foreground max-w-lg mb-6">
          Browse by subject. Selected titles from leading publishers.
        </p>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-4">
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
