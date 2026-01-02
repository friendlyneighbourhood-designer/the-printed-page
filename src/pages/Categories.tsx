import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/books/CategoryCard";
import { categories, books } from "@/data/books";

const Categories = () => {
  const getCategoryBookCount = (slug: string) => {
    return books.filter(book => book.category === slug).length;
  };

  return (
    <Layout>
      <section className="container-narrow py-12">
        <h1 className="editorial-headline mb-4">Categories</h1>
        <p className="body-text text-muted-foreground max-w-2xl mb-10">
          Browse our catalogue by subject. Each category contains carefully selected titles 
          from leading academic and trade publishers.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
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
