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
    <Link to={`/book/${id}`} className="group">
      <div className="aspect-[2/3] overflow-hidden mb-3">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif font-semibold text-sm leading-tight mb-1 group-hover:text-navy transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-1">{author}</p>
      <p className="text-sm font-medium">${price.toFixed(2)}</p>
    </Link>
  );
};

export default BookCard;
