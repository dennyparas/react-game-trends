import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDevelopers } from "../../services/gamesService";
import { Developer, DevelopersResults } from "../../types/developerTypes";
import { RootState } from "./../../app/store";

type DevelopersTypes = {
  developersList: Developer[];
  developersCount: number;
  developersNextUrl: string;
  developersStatus: string;
  developersError: boolean;
};

const initialState: DevelopersTypes = {
  developersList: [],
  developersNextUrl: "",
  developersCount: 0,
  developersStatus: "idle",
  developersError: false,
};

export const getDevelopersListAsync = createAsyncThunk<
  DevelopersResults,
  string
>("developers/getDevelopersListAsync", async (url) => {
  const response = await fetchDevelopers(`${url}&page_size=30`);
  return response;
});

export const developersSlice = createSlice({
  name: "developersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDevelopersListAsync.pending, (state) => {
        state.developersStatus = "loading";
      })
      .addCase(getDevelopersListAsync.fulfilled, (state, action) => {
        state.developersStatus = "success";
        state.developersList = state.developersList.concat(
          action.payload.results
        );
        state.developersNextUrl = action.payload.next;
        state.developersCount = action.payload.count;
      })
      .addCase(getDevelopersListAsync.rejected, (state) => {
        state.developersStatus = "failed";
        state.developersError = true;
      });
  },
});

export const developersListAsync = (state: RootState) =>
  state.developers.developersList;

export default developersSlice.reducer;
