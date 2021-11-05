import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./../../app/store";
import { GamesResults, Game } from "./../../types/gameTypes";
import { fetchGames } from "../../services/gamesService";

type GamesType = {
  gamesList: Game[];
  gamesCount: number;
  gamesNextUrl: string;
  gamesStatus: string;
  gamesError: boolean;
};

const initialState: GamesType = {
  gamesList: [],
  gamesCount: 0,
  gamesNextUrl: "",
  gamesStatus: "idle",
  gamesError: false,
};

export const getGamesListAsync = createAsyncThunk<GamesResults, string>(
  "games/getGamesList",
  async (url) => {
    const response = await fetchGames(url);
    return response;
  }
);

const GamesSlice = createSlice({
  name: "gamesSlice",
  initialState,
  reducers: {
    clearGamesList: (state) => {
      state.gamesList = [];
      state.gamesStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGamesListAsync.pending, (state) => {
        state.gamesStatus = "loading";
        state.gamesError = false;
      })
      .addCase(getGamesListAsync.fulfilled, (state, action) => {
        state.gamesStatus = "success";
        state.gamesList = state.gamesList.concat(action.payload.results);
        state.gamesNextUrl = action.payload.next;
        state.gamesCount = action.payload.count;
      })
      .addCase(getGamesListAsync.rejected, (state) => {
        state.gamesStatus = "failed";
        state.gamesError = true;
      });
  },
});

export const { clearGamesList } = GamesSlice.actions;

export const gamesListAsync = (state: RootState) => state.games.gamesList;

export default GamesSlice.reducer;
