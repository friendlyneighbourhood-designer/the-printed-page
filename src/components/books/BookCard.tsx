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
    <Link to={`/book/${id}`} className="block">
      <div className="aspect-[2/3] bg-muted mb-1 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-xs leading-tight mb-0.5">{title}</p>
      <p className="text-xs text-muted-foreground">{author}</p>
      <p className="text-xs text-muted-foreground">${price.toFixed(2)}</p>
    </Link>
  );
};

export default BookCard;
