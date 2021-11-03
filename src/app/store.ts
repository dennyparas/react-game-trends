import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homeReducer from "./../features/home/HomeSlice";
import platformsReducer from "./../features/platforms/PlatformsSlice";
import genresReducer from "./../features/genres/GenresSlice";
import tagsReducer from "./../features/tags/TagsSlice";
import developersReducer from "./../features/developers/DevelopersSlice";
import publishersReducer from "./../features/publishers/PublishersSlice";
import storesReducer from "./../features/stores/StoresSlice";
import gamesReducer from "./../features/games/GamesSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    platforms: platformsReducer,
    genres: genresReducer,
    tags: tagsReducer,
    developers: developersReducer,
    publishers: publishersReducer,
    stores: storesReducer,
    games: gamesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
