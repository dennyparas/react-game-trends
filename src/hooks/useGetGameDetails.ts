import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  gameDetailsAsync,
  getGameDetailsAsync,
  gameScreenshotsAsync,
  getGameScreenshotsAsync,
} from "./../features/gameDetails/GameDetailsSlice";

export function useGetGameDetails(
  gameDetailsUrl: string,
  gameScreenshotsUrl: string
) {
  const dispatch = useAppDispatch();
  const gameDetailsData = useAppSelector(gameDetailsAsync);
  const gameDetailsStatus = useAppSelector(
    (state) => state.gameDetails.gameDetailsStatus
  );
  const gameDetailsError = useAppSelector(
    (state) => state.gameDetails.gameDetailsError
  );

  const gameScreenshotsData = useAppSelector(gameScreenshotsAsync);
  const gameScreenshotsStatus = useAppSelector(
    (state) => state.gameDetails.gameScreenshotsStatus
  );
  const gameScreenshotsError = useAppSelector(
    (state) => state.gameDetails.gameScreenshotsError
  );

  useEffect(() => {
    if (gameDetailsUrl) {
      dispatch(getGameDetailsAsync(gameDetailsUrl));
      dispatch(getGameScreenshotsAsync(gameScreenshotsUrl));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameDetailsUrl]);

  const isGameDetailsLoading = gameDetailsStatus === "loading";

  const isGameDetailsError =
    gameDetailsError === true && gameDetailsStatus === "failed";

  const isGameScreenshotsLoading = gameScreenshotsStatus === "loading";

  const isGameScreenshotsError =
    gameScreenshotsError === true && gameScreenshotsStatus === "failed";

  return {
    gameDetailsData,
    isGameDetailsLoading,
    isGameDetailsError,
    gameScreenshotsData,
    isGameScreenshotsLoading,
    isGameScreenshotsError,
  };
}
