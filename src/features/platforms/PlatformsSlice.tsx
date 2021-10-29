import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPlatforms } from "../../services/gamesService";
import { Platform, PlatformsResults } from "../../types/platformTypes";
import { RootState } from "./../../app/store";

type PlatformsTypes = {
  platformsList: Platform[];
  platformsCount: number;
  platformsNextUrl: string;
  platformsStatus: string;
  platformsError: boolean;
};

const initialState: PlatformsTypes = {
  platformsList: [],
  platformsNextUrl: "",
  platformsCount: 0,
  platformsStatus: "idle",
  platformsError: false,
};

export const getPlatformsListAsync = createAsyncThunk<PlatformsResults, string>(
  "platforms/getPlatformsListAsync",
  async (url) => {
    const response = await fetchPlatforms(url);
    return response;
  }
);

export const platformsSlice = createSlice({
  name: "platformsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlatformsListAsync.pending, (state) => {
        state.platformsStatus = "loading";
      })
      .addCase(getPlatformsListAsync.fulfilled, (state, action) => {
        state.platformsStatus = "success";
        state.platformsList = state.platformsList.concat(
          action.payload.results
        );
        state.platformsNextUrl = action.payload.next;
        state.platformsCount = action.payload.count;
      })
      .addCase(getPlatformsListAsync.rejected, (state) => {
        state.platformsStatus = "failed";
        state.platformsError = true;
      });
  },
});

export const platformsListAsync = (state: RootState) =>
  state.platforms.platformsList;

export default platformsSlice.reducer;
