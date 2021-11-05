import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  averageRateGamesAsync,
  getHomeAverageRateGamesAsync,
} from "./../features/home/HomeSlice";

export function useGetHomeAverageRateGames() {
  const dispatch = useAppDispatch();
  const averageRateGamesData = useAppSelector(averageRateGamesAsync);
  const averageRateGamesStatus = useAppSelector(
    (state) => state.home.averageRateGamesStatus
  );
  const averageRateGamesError = useAppSelector(
    (state) => state.home.averageRateGamesError
  );

  useEffect(() => {
    if (averageRateGamesData.results.length === 0) {
      dispatch(getHomeAverageRateGamesAsync());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAverageRateGamesLoading = averageRateGamesStatus === "loading";

  const isAverageRateGamesError =
    averageRateGamesError === true && averageRateGamesStatus === "failed";

  return {
    averageRateGamesData,
    isAverageRateGamesLoading,
    isAverageRateGamesError,
  };
}
