export type Store = {
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

export type StoresResults = {
  count: number;
  next: string;
  results: Store[];
};
