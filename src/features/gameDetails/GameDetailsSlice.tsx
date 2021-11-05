import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  fetchGameDetails,
  fetchGameScreenshots,
} from "../../services/gamesService";
import {
  GameDetails,
  Screenshots,
  ScreenshotsResults,
} from "../../types/gameDetailsTypes";

type GameDetailsType = {
  gameDetails: GameDetails;
  gameDetailsError: boolean;
  gameDetailsStatus: string;
  gameScreenshots: Screenshots[];
  gameScreenshotsError: boolean;
  gameScreenshotsStatus: string;
};

const initialState: GameDetailsType = {
  gameDetails: {
    id: 0,
    slug: "",
    name: "",
    description: "",
    description_raw: "",
    metacritic: 0,
    metacritic_url: "",
    released: "",
    background_image: "",
    background_image_additional: "",
    website: "",
    playtime: 0,
    parent_platforms: [],
    platforms: [],
    stores: [],
    genres: [],
    tags: [],
    developers: [],
    publishers: [],
  },
  gameDetailsError: false,
  gameDetailsStatus: "idle",
  gameScreenshots: [],
  gameScreenshotsError: false,
  gameScreenshotsStatus: "idle",
};

export const getGameDetailsAsync = createAsyncThunk<GameDetails, string>(
  "gameDetails/getGameDetails",
  async (url) => {
    const response = await fetchGameDetails(url);
    return response;
  }
);

export const getGameScreenshotsAsync = createAsyncThunk<
  ScreenshotsResults,
  string
>("gameDetails/getGameScreenshots", async (url) => {
  const response = await fetchGameScreenshots(url);
  return response;
});

const GameDetailsSlice = createSlice({
  name: "gameDetailsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGameDetailsAsync.pending, (state) => {
        state.gameDetails = initialState.gameDetails;
        state.gameDetailsStatus = "loading";
      })
      .addCase(getGameDetailsAsync.fulfilled, (state, action) => {
        state.gameDetailsStatus = "success";
        state.gameDetails = action.payload;
      })
      .addCase(getGameDetailsAsync.rejected, (state) => {
        state.gameDetailsStatus = "failed";
        state.gameDetailsError = true;
      })
      .addCase(getGameScreenshotsAsync.pending, (state) => {
        state.gameScreenshots = initialState.gameScreenshots;
        state.gameScreenshotsStatus = "loading";
      })
      .addCase(getGameScreenshotsAsync.fulfilled, (state, action) => {
        state.gameScreenshotsStatus = "success";
        state.gameScreenshots = action.payload.results;
      })
      .addCase(getGameScreenshotsAsync.rejected, (state) => {
        state.gameScreenshotsStatus = "failed";
        state.gameScreenshotsError = true;
      });
  },
});

export const gameDetailsAsync = (state: RootState) =>
  state.gameDetails.gameDetails;

export const gameScreenshotsAsync = (state: RootState) =>
  state.gameDetails.gameScreenshots;

export default GameDetailsSlice.reducer;
