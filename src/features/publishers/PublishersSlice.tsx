import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPublishers } from "../../services/gamesService";
import { Publisher, PublishersResults } from "../../types/publisherTypes";
import { RootState } from "./../../app/store";

type PublishersTypes = {
  publishersList: Publisher[];
  publishersCount: number;
  publishersNextUrl: string;
  publishersStatus: string;
  publishersError: boolean;
};

const initialState: PublishersTypes = {
  publishersList: [],
  publishersNextUrl: "",
  publishersCount: 0,
  publishersStatus: "idle",
  publishersError: false,
};

export const getPublishersListAsync = createAsyncThunk<
  PublishersResults,
  string
>("publishers/getPublishersListAsync", async (url) => {
  const response = await fetchPublishers(`${url}&page_size=30`);
  return response;
});

export const publishersSlice = createSlice({
  name: "publishersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPublishersListAsync.pending, (state) => {
        state.publishersStatus = "loading";
      })
      .addCase(getPublishersListAsync.fulfilled, (state, action) => {
        state.publishersStatus = "success";
        state.publishersList = state.publishersList.concat(
          action.payload.results
        );
        state.publishersNextUrl = action.payload.next;
        state.publishersCount = action.payload.count;
      })
      .addCase(getPublishersListAsync.rejected, (state) => {
        state.publishersStatus = "failed";
        state.publishersError = true;
      });
  },
});

export const publishersListAsync = (state: RootState) =>
  state.publishers.publishersList;

export default publishersSlice.reducer;
