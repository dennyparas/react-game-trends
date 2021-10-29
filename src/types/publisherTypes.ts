export type Publisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: {
    id: number;
    slug: string;
    name: string;
  }[];
};

export type PublishersResults = {
  count: number;
  next: string;
  results: Publisher[];
};
