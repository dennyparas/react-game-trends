export type ScreenshotsResults = {
  count: number;
  next: string;
  previous: string;
  results: Screenshots[];
};

export type Screenshots = {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
};

export type TrailersResults = {
  count: number;
  next: string;
  previous: string;
  results: Trailers[];
};

export type Trailers = {
  id: number;
  name: string;
  preview: string;
  data: {
    "480": string;
    max: string;
  };
};

export type GameDetails = {
  id: number;
  slug: string;
  name: string;
  description: string;
  description_raw: string;
  metacritic: number;
  released: string;
  background_image: string;
  background_image_additional?: string;
  website: string;
  playtime?: number;
  metacritic_url?: string;
  parent_platforms?: ParentPlatforms[];
  platforms?: Platforms[];
  stores?: Stores[];
  developers?: Developers[];
  genres: Genres[];
  tags: Tags[];
  publishers?: Publishers[];
};

type ParentPlatforms = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

type Platforms = {
  platform: {
    id: number;
    name: string;
    slug: string;
    image: string;
    year_end: string;
    year_start: string;
    games_count: number;
    image_background: string;
  };
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  };
};

type Stores = {
  id: number;
  url: string;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
};

type Developers = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

type Genres = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

type Publishers = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

type Tags = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};
