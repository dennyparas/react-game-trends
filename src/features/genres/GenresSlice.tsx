import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGenres } from "../../services/gamesService";
import { Genre, GenresResults } from "../../types/genreTypes";
import { RootState } from "./../../app/store";

type GenresTypes = {
  genresList: Genre[];
  genresCount: number;
  genresNextUrl: string;
  genresStatus: string;
  genresError: boolean;
};

const initialState: GenresTypes = {
  genresList: [],
  genresNextUrl: "",
  genresCount: 0,
  genresStatus: "idle",
  genresError: false,
};

export const getGenresListAsync = createAsyncThunk<GenresResults, string>(
  "genres/getGenresListAsync",
  async (url) => {
    const response = await fetchGenres(url);
    return response;
  }
);

export const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenresListAsync.pending, (state) => {
        state.genresStatus = "loading";
      })
      .addCase(getGenresListAsync.fulfilled, (state, action) => {
        state.genresStatus = "success";
        state.genresList = state.genresList.concat(action.payload.results);
        state.genresNextUrl = action.payload.next;
        state.genresCount = action.payload.count;
      })
      .addCase(getGenresListAsync.rejected, (state) => {
        state.genresStatus = "failed";
        state.genresError = true;
      });
  },
});

export const genresListAsync = (state: RootState) => state.genres.genresList;

export default genresSlice.reducer;
