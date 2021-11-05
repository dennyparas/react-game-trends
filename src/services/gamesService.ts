import axios from "axios";
import { GamesResults } from "../types/gameTypes";
import { PlatformsResults } from "../types/platformTypes";
import { GenresResults } from "../types/genreTypes";
import { TagsResults } from "../types/tagTypes";
import { DevelopersResults } from "../types/developerTypes";
import { PublishersResults } from "../types/publisherTypes";
import { StoresResults } from "../types/storeTypes";
import { GameDetails, ScreenshotsResults } from "../types/gameDetailsTypes";

export const fetchGames = async (url: string): Promise<GamesResults> => {
  try {
    const response = await axios.get<GamesResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPlatforms = async (
  url: string
): Promise<PlatformsResults> => {
  try {
    const response = await axios.get<PlatformsResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGenres = async (url: string): Promise<GenresResults> => {
  try {
    const response = await axios.get<GenresResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTags = async (url: string): Promise<TagsResults> => {
  try {
    const response = await axios.get<TagsResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDevelopers = async (
  url: string
): Promise<DevelopersResults> => {
  try {
    const response = await axios.get<DevelopersResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPublishers = async (
  url: string
): Promise<PublishersResults> => {
  try {
    const response = await axios.get<PublishersResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStores = async (url: string): Promise<StoresResults> => {
  try {
    const response = await axios.get<StoresResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGameDetails = async (url: string): Promise<GameDetails> => {
  try {
    const response = await axios.get<GameDetails>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGameScreenshots = async (
  url: string
): Promise<ScreenshotsResults> => {
  try {
    const response = await axios.get<ScreenshotsResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
