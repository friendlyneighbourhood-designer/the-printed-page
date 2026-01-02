import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
}

const BookCard = ({ id, title, author, price, coverImage }: BookCardProps) => {
  return (
    <Link to={`/book/${id}`} className="block group">
      <div className="aspect-[2/3] bg-muted mb-2 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-serif text-sm font-bold leading-tight mb-1 group-hover:text-link">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground mb-1">{author}</p>
      <p className="text-xs text-muted-foreground">${price.toFixed(2)}</p>
    </Link>
  );
};

export default BookCard;
