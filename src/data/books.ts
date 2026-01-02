export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  category: string;
  publisher: string;
  isbn: string;
  pages: number;
  publicationDate: string;
  description: string;
  isStaffPick?: boolean;
  isComingSoon?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
}

export const categories: Category[] = [
  {
    slug: "philosophy",
    name: "Philosophy",
    description: "Works on ethics, metaphysics, epistemology, and the history of philosophical thought.",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
  },
  {
    slug: "history",
    name: "History",
    description: "Historical scholarship spanning ancient civilizations to the modern era.",
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
  },
  {
    slug: "literature",
    name: "Literature",
    description: "Fiction, poetry, and literary criticism from around the world.",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
  },
  {
    slug: "science",
    name: "Science",
    description: "Popular science writing and academic texts on physics, biology, and mathematics.",
    coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=600&fit=crop"
  },
  {
    slug: "art",
    name: "Art & Architecture",
    description: "Art history, criticism, and beautifully illustrated monographs.",
    coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=600&fit=crop"
  },
  {
    slug: "politics",
    name: "Politics & Society",
    description: "Political theory, sociology, and contemporary social analysis.",
    coverImage: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=600&fit=crop"
  },
  {
    slug: "classics",
    name: "Classics",
    description: "Greek and Latin texts in translation, with scholarly introductions.",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop"
  },
  {
    slug: "biography",
    name: "Biography",
    description: "Lives of writers, artists, scientists, and historical figures.",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop"
  }
];

export const books: Book[] = [
  {
    id: "1",
    title: "Meditations on First Philosophy",
    author: "René Descartes",
    price: 14.95,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    category: "philosophy",
    publisher: "Cambridge University Press",
    isbn: "978-0521558181",
    pages: 128,
    publicationDate: "1996",
    description: "Descartes' Meditations on First Philosophy continues to be a standard text at most university philosophy departments. It is a key text in Western philosophy as it introduces many of the ideas that are still debated by philosophers today, including the mind-body problem, the notion of the self, and the problem of skepticism.",
    isStaffPick: true
  },
  {
    id: "2",
    title: "The Republic",
    author: "Plato",
    price: 12.50,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    category: "philosophy",
    publisher: "Oxford University Press",
    isbn: "978-0199535767",
    pages: 416,
    publicationDate: "2008",
    description: "Plato's Republic is one of the most important and widely read books in the history of philosophy. It presents Socrates' vision of the ideal state and the philosopher-king who rules it with wisdom and justice."
  },
  {
    id: "3",
    title: "The Decline and Fall of the Roman Empire",
    author: "Edward Gibbon",
    price: 24.95,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    category: "history",
    publisher: "Penguin Classics",
    isbn: "978-0140437645",
    pages: 1232,
    publicationDate: "2001",
    description: "Edward Gibbon's masterpiece of historical analysis traces the decline of the Roman Empire from the height of the Antonine age to the fall of Constantinople in 1453.",
    isStaffPick: true
  },
  {
    id: "4",
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: 18.00,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    category: "literature",
    publisher: "Vintage Classics",
    isbn: "978-1400079988",
    pages: 1296,
    publicationDate: "2008",
    description: "Tolstoy's epic tale of five aristocratic families during the Napoleonic Wars is considered one of the greatest novels ever written.",
    isStaffPick: true
  },
  {
    id: "5",
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    price: 15.95,
    coverImage: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&h=600&fit=crop",
    category: "science",
    publisher: "University of Chicago Press",
    isbn: "978-0226458120",
    pages: 264,
    publicationDate: "2012",
    description: "Thomas Kuhn's influential work challenged the prevailing view of science as a steady, cumulative acquisition of knowledge. His concept of 'paradigm shifts' has become essential vocabulary."
  },
  {
    id: "6",
    title: "The Lives of the Artists",
    author: "Giorgio Vasari",
    price: 22.50,
    coverImage: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400&h=600&fit=crop",
    category: "art",
    publisher: "Oxford University Press",
    isbn: "978-0199537198",
    pages: 624,
    publicationDate: "2008",
    description: "Vasari's biographies of Renaissance artists remain the primary source for understanding the lives and works of artists from Cimabue to Michelangelo."
  },
  {
    id: "7",
    title: "The Origins of Totalitarianism",
    author: "Hannah Arendt",
    price: 19.95,
    coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
    category: "politics",
    publisher: "Harcourt",
    isbn: "978-0156701532",
    pages: 576,
    publicationDate: "1994",
    description: "Hannah Arendt's analysis of the origins and mechanisms of totalitarian movements in the twentieth century remains essential reading."
  },
  {
    id: "8",
    title: "The Odyssey",
    author: "Homer",
    price: 13.95,
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    category: "classics",
    publisher: "Farrar, Straus and Giroux",
    isbn: "978-0374525743",
    pages: 592,
    publicationDate: "2018",
    description: "Emily Wilson's groundbreaking translation of Homer's Odyssey brings new life to this ancient epic.",
    isStaffPick: true
  },
  {
    id: "9",
    title: "The Life of Samuel Johnson",
    author: "James Boswell",
    price: 16.95,
    coverImage: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
    category: "biography",
    publisher: "Penguin Classics",
    isbn: "978-0140436624",
    pages: 1280,
    publicationDate: "2008",
    description: "Boswell's biography of Samuel Johnson is widely regarded as the greatest biography in the English language."
  },
  {
    id: "10",
    title: "Being and Time",
    author: "Martin Heidegger",
    price: 24.00,
    coverImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop",
    category: "philosophy",
    publisher: "Harper Perennial",
    isbn: "978-0061575594",
    pages: 512,
    publicationDate: "2008",
    description: "Heidegger's Being and Time is one of the most important philosophical works of the twentieth century.",
    isComingSoon: true
  },
  {
    id: "11",
    title: "A History of Western Philosophy",
    author: "Bertrand Russell",
    price: 22.00,
    coverImage: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=400&h=600&fit=crop",
    category: "philosophy",
    publisher: "Simon & Schuster",
    isbn: "978-0671201586",
    pages: 895,
    publicationDate: "1967",
    description: "Bertrand Russell's sweeping survey of Western philosophy from the pre-Socratics to the early twentieth century.",
    isComingSoon: true
  },
  {
    id: "12",
    title: "The Age of Revolution",
    author: "Eric Hobsbawm",
    price: 17.95,
    coverImage: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&h=600&fit=crop",
    category: "history",
    publisher: "Vintage",
    isbn: "978-0679772538",
    pages: 368,
    publicationDate: "1996",
    description: "The first volume of Hobsbawm's acclaimed trilogy covering the long nineteenth century."
  }
];

export const getBooksByCategory = (categorySlug: string): Book[] => {
  return books.filter(book => book.category === categorySlug);
};

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};

export const getStaffPicks = (): Book[] => {
  return books.filter(book => book.isStaffPick);
};

export const getComingSoon = (): Book[] => {
  return books.filter(book => book.isComingSoon);
};
