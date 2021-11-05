import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  recentlyReleaseGamesAsync,
  getHomeRecentlyReleaseGamesAsync,
} from "./../features/home/HomeSlice";

export function useGetHomeRecentlyReleaseGames() {
  const dispatch = useAppDispatch();
  const recentlyReleaseGamesData = useAppSelector(recentlyReleaseGamesAsync);
  const recentlyReleaseGamesStatus = useAppSelector(
    (state) => state.home.recentlyReleaseGamesStatus
  );
  const recentlyReleaseGamesError = useAppSelector(
    (state) => state.home.recentlyReleaseGamesError
  );

  useEffect(() => {
    if (recentlyReleaseGamesData.results.length === 0) {
      dispatch(getHomeRecentlyReleaseGamesAsync());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isRecentlyReleaseGamesLoading =
    recentlyReleaseGamesStatus === "loading";

  const isRecentlyReleaseGamesError =
    recentlyReleaseGamesError === true &&
    recentlyReleaseGamesStatus === "failed";

  return {
    recentlyReleaseGamesData,
    isRecentlyReleaseGamesLoading,
    isRecentlyReleaseGamesError,
  };
}
