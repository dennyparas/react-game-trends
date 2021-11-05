import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  popularGamesAsync,
  getHomePopularGamesAsync,
} from "./../features/home/HomeSlice";

export function useGetHomePopularGames() {
  const dispatch = useAppDispatch();
  const popularGamesData = useAppSelector(popularGamesAsync);
  const popularGamesStatus = useAppSelector(
    (state) => state.home.popularGamesStatus
  );
  const popularGamesError = useAppSelector(
    (state) => state.home.popularGamesError
  );

  useEffect(() => {
    if (popularGamesData.results.length === 0) {
      dispatch(getHomePopularGamesAsync());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isPopularGamesLoading = popularGamesStatus === "loading";

  const isPopularGamesError =
    popularGamesError === true && popularGamesStatus === "failed";

  return { popularGamesData, isPopularGamesLoading, isPopularGamesError };
}
