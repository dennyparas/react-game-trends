import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "../../services/gamesService";
import { Tag, TagsResults } from "../../types/tagTypes";
import { RootState } from "./../../app/store";

type TagsTypes = {
  tagsList: Tag[];
  tagsCount: number;
  tagsNextUrl: string;
  tagsStatus: string;
  tagsError: boolean;
};

const initialState: TagsTypes = {
  tagsList: [],
  tagsNextUrl: "",
  tagsCount: 0,
  tagsStatus: "idle",
  tagsError: false,
};

export const getTagsListAsync = createAsyncThunk<TagsResults, string>(
  "tags/getTagsListAsync",
  async (url) => {
    const response = await fetchTags(`${url}&page_size=30`);
    return response;
  }
);

export const tagsSlice = createSlice({
  name: "tagsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTagsListAsync.pending, (state) => {
        state.tagsStatus = "loading";
      })
      .addCase(getTagsListAsync.fulfilled, (state, action) => {
        state.tagsStatus = "success";
        state.tagsList = state.tagsList.concat(action.payload.results);
        state.tagsNextUrl = action.payload.next;
        state.tagsCount = action.payload.count;
      })
      .addCase(getTagsListAsync.rejected, (state) => {
        state.tagsStatus = "failed";
        state.tagsError = true;
      });
  },
});

export const tagsListAsync = (state: RootState) => state.tags.tagsList;

export default tagsSlice.reducer;
