import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchStores } from "../../services/gamesService";
import { Store, StoresResults } from "../../types/storeTypes";
import { RootState } from "./../../app/store";

type StoresTypes = {
  storesList: Store[];
  storesCount: number;
  storesNextUrl: string;
  storesStatus: string;
  storesError: boolean;
};

const initialState: StoresTypes = {
  storesList: [],
  storesNextUrl: "",
  storesCount: 0,
  storesStatus: "idle",
  storesError: false,
};

export const getStoresListAsync = createAsyncThunk<StoresResults, string>(
  "stores/getStoresListAsync",
  async (url) => {
    const response = await fetchStores(`${url}&page_size=30`);
    return response;
  }
);

export const storesSlice = createSlice({
  name: "storesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStoresListAsync.pending, (state) => {
        state.storesStatus = "loading";
      })
      .addCase(getStoresListAsync.fulfilled, (state, action) => {
        state.storesStatus = "success";
        state.storesList = state.storesList.concat(action.payload.results);
        state.storesNextUrl = action.payload.next;
        state.storesCount = action.payload.count;
      })
      .addCase(getStoresListAsync.rejected, (state) => {
        state.storesStatus = "failed";
        state.storesError = true;
      });
  },
});

export const storesListAsync = (state: RootState) => state.stores.storesList;

export default storesSlice.reducer;
