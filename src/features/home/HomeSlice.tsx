import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../../app/store";
import { fetchGames } from "../../services/gamesService";
import { GamesResults } from "./../../types/gameTypes";
import { addSubtractMonths, formatDate } from "../../utils/dateUtil";
import { GAMES_URL_API } from "../../constants/api";

type HomeTypes = {
  popularGames: GamesResults;
  popularGamesStatus: string;
  popularGamesError: boolean;
  averageRateGames: GamesResults;
  averageRateGamesStatus: string;
  averageRateGamesError: boolean;
  recentlyReleaseGames: GamesResults;
  recentlyReleaseGamesStatus: string;
  recentlyReleaseGamesError: boolean;
  anticipatedGames: GamesResults;
  anticipatedGamesStatus: string;
  anticipatedGamesError: boolean;
};

const initialState: HomeTypes = {
  popularGames: { count: 0, next: "", results: [] },
  popularGamesStatus: "idle",
  popularGamesError: false,
  averageRateGames: { count: 0, next: "", results: [] },
  averageRateGamesStatus: "idle",
  averageRateGamesError: false,
  recentlyReleaseGames: { count: 0, next: "", results: [] },
  recentlyReleaseGamesStatus: "idle",
  recentlyReleaseGamesError: false,
  anticipatedGames: { count: 0, next: "", results: [] },
  anticipatedGamesStatus: "idle",
  anticipatedGamesError: false,
};

export const getHomePopularGamesAsync = createAsyncThunk<GamesResults>(
  "home/getHomePopularGames",
  async () => {
    const currentDate = formatDate(new Date());
    const rangeDate = addSubtractMonths(new Date(), -6);
    const dates = `${rangeDate},${currentDate}`;
    const url = `${GAMES_URL_API}&dates=${dates}&ordering=-added&page_size=9`;
    const response = await fetchGames(url);
    return response;
  }
);

export const getHomeRecentlyReleaseGamesAsync = createAsyncThunk<GamesResults>(
  "home/getRecentlyReleaseGames",
  async () => {
    const currentDate = formatDate(new Date());
    const rangeDate = addSubtractMonths(new Date(), -1);
    const dates = `${rangeDate},${currentDate}`;
    const url = `${GAMES_URL_API}&dates=${dates}&ordering=-added&page_size=9`;
    const response = await fetchGames(url);
    return response;
  }
);

export const getHomeAnticipatedGamesAsync = createAsyncThunk<GamesResults>(
  "home/getAnticipatedGames",
  async () => {
    const currentDate = formatDate(new Date());
    const rangeDate = addSubtractMonths(new Date(), 6);
    const dates = `${currentDate},${rangeDate}`;
    const url = `${GAMES_URL_API}&dates=${dates}&ordering=-added&page_size=9`;
    const response = await fetchGames(url);
    return response;
  }
);

export const getHomeAverageRateGamesAsync = createAsyncThunk<GamesResults>(
  "home/getAverageRateGames",
  async () => {
    const currentDate = formatDate(new Date());
    const rangeDate = addSubtractMonths(new Date(), -6);
    const dates = `${rangeDate},${currentDate}`;
    const url = `${GAMES_URL_API}&dates=${dates}&ordering=-metacritic&page_size=9`;
    const response = await fetchGames(url);
    return response;
  }
);

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomePopularGamesAsync.pending, (state) => {
        state.popularGamesStatus = "loading";
      })
      .addCase(getHomePopularGamesAsync.fulfilled, (state, action) => {
        state.popularGamesStatus = "success";
        state.popularGames = action.payload;
      })
      .addCase(getHomePopularGamesAsync.rejected, (state) => {
        state.popularGamesStatus = "failed";
        state.popularGamesError = true;
      })
      .addCase(getHomeRecentlyReleaseGamesAsync.pending, (state) => {
        state.recentlyReleaseGamesStatus = "loading";
      })
      .addCase(getHomeRecentlyReleaseGamesAsync.fulfilled, (state, action) => {
        state.recentlyReleaseGamesStatus = "success";
        state.recentlyReleaseGames = action.payload;
      })
      .addCase(getHomeRecentlyReleaseGamesAsync.rejected, (state) => {
        state.recentlyReleaseGamesStatus = "failed";
        state.recentlyReleaseGamesError = true;
      })
      .addCase(getHomeAnticipatedGamesAsync.pending, (state) => {
        state.anticipatedGamesStatus = "loading";
      })
      .addCase(getHomeAnticipatedGamesAsync.fulfilled, (state, action) => {
        state.anticipatedGamesStatus = "success";
        state.anticipatedGames = action.payload;
      })
      .addCase(getHomeAnticipatedGamesAsync.rejected, (state) => {
        state.anticipatedGamesStatus = "failed";
        state.anticipatedGamesError = true;
      })
      .addCase(getHomeAverageRateGamesAsync.pending, (state) => {
        state.averageRateGamesStatus = "loading";
      })
      .addCase(getHomeAverageRateGamesAsync.fulfilled, (state, action) => {
        state.averageRateGamesStatus = "success";
        state.averageRateGames = action.payload;
      })
      .addCase(getHomeAverageRateGamesAsync.rejected, (state) => {
        state.averageRateGamesStatus = "failed";
        state.averageRateGamesError = true;
      });
  },
});

export const popularGamesAsync = (state: RootState) => state.home.popularGames;
export const recentlyReleaseGamesAsync = (state: RootState) =>
  state.home.recentlyReleaseGames;
export const anticipatedGamesAsync = (state: RootState) =>
  state.home.anticipatedGames;
export const averageRateGamesAsync = (state: RootState) =>
  state.home.averageRateGames;

export default homeSlice.reducer;
