export type University = {
  id: number;
  name: string;
  city: string;
  rating: number;
  reviews: number;
  image: string;
  tag: string;
};

export const universities: University[] = [
  {
    id: 1,
    name: "Kazakh National University",
    city: "Almaty",
    rating: 4.8,
    reviews: 2400,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=500&q=60",
    tag: "Top 10",
  },
  {
    id: 2,
    name: "L.N. Gumilyov Eurasian National University",
    city: "Astana",
    rating: 4.7,
    reviews: 1900,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=60",
    tag: "Top 20",
  },
  {
    id: 3,
    name: "Satbayev University",
    city: "Almaty",
    rating: 4.6,
    reviews: 1500,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=60",
    tag: "Tech Leader",
  },
  {
    id: 4,
    name: "Asfendiyarov Kazakh National Medical University",
    city: "Almaty",
    rating: 4.9,
    reviews: 3100,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=500&q=60",
    tag: "Medical",
  },
  {
    id: 5,
    name: "Nazarbayev University",
    city: "Astana",
    rating: 4.9,
    reviews: 3500,
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=500&q=60",
    tag: "Research",
  },
  {
    id: 6,
    name: "KIMEP University",
    city: "Almaty",
    rating: 4.5,
    reviews: 1200,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=60",
    tag: "Business",
  },
  {
    id: 7,
    name: "Al-Farabi Kazakh National University",
    city: "Almaty",
    rating: 4.8,
    reviews: 2800,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=500&q=60",
    tag: "Top 10",
  },
  {
    id: 8,
    name: "Suleyman Demirel University",
    city: "Kaskelen",
    rating: 4.4,
    reviews: 900,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=60",
    tag: "IT Focus",
  },
];
