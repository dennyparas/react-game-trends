export type Developer = {
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

export type DevelopersResults = {
  count: number;
  next: string;
  results: Developer[];
};
