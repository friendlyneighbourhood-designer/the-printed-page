import { Link } from "react-router-dom";

interface CategoryCardProps {
  slug: string;
  name: string;
  bookCount: number;
  coverImage: string;
}

const CategoryCard = ({ slug, name, bookCount, coverImage }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`} className="block">
      <div className="aspect-[3/4] bg-muted mb-1 overflow-hidden">
        <img 
          src={coverImage} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-xs leading-tight">{name}</p>
      <p className="text-xs text-muted-foreground">{bookCount} titles</p>
    </Link>
  );
};

export default CategoryCard;
