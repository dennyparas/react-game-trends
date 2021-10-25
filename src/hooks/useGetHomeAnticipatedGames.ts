import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  anticipatedGamesAsync,
  getHomeAnticipatedGamesAsync,
} from "./../features/home/HomeSlice";

export function useGetHomeAnticipatedGames() {
  const dispatch = useAppDispatch();
  const anticipatedGamesData = useAppSelector(anticipatedGamesAsync);
  const anticipatedGamesStatus = useAppSelector(
    (state) => state.home.anticipatedGamesStatus
  );
  const anticipatedGamesError = useAppSelector(
    (state) => state.home.anticipatedGamesError
  );

  useEffect(() => {
    if (anticipatedGamesData.results.length === 0) {
      dispatch(getHomeAnticipatedGamesAsync());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAnticipatedGamesLoading = anticipatedGamesStatus === "loading";

  const isAnticipatedGamesError =
    anticipatedGamesError === true && anticipatedGamesStatus === "failed";

  return {
    anticipatedGamesData,
    isAnticipatedGamesLoading,
    isAnticipatedGamesError,
  };
}
