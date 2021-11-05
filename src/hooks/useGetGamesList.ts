import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  gamesListAsync,
  getGamesListAsync,
  clearGamesList,
} from "./../features/games/GamesSlice";

export function useGetGamesList() {
  const dispatch = useAppDispatch();
  const gamesListData = useAppSelector(gamesListAsync);
  const gamesListStatus = useAppSelector((state) => state.games.gamesStatus);
  const gamesListError = useAppSelector((state) => state.games.gamesError);
  const gamesListCount = useAppSelector((state) => state.games.gamesCount);
  const gamesListNextUrl = useAppSelector((state) => state.games.gamesNextUrl);

  const getGamesList = (url: string) => {
    dispatch(clearGamesList());
    dispatch(getGamesListAsync(url));
  };

  const loadMoreGames = (url: string) => {
    dispatch(getGamesListAsync(url));
  };

  const isGamesListLoading = gamesListStatus === "loading";

  const isGamesListError =
    gamesListError === true && gamesListStatus === "failed";

  return {
    loadMoreGames,
    getGamesList,
    gamesListData,
    gamesListCount,
    gamesListNextUrl,
    isGamesListLoading,
    isGamesListError,
  };
}
