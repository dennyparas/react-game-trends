export type Genre = {
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

export type GenresResults = {
  count: number;
  next: string;
  results: Genre[];
};
