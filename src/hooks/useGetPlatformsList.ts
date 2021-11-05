import { useEffect } from "react";
import { PLATFORMS_URL_API } from "./../constants/api";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  platformsListAsync,
  getPlatformsListAsync,
} from "./../features/platforms/PlatformsSlice";

export function useGetPlatformsList(url: string) {
  const dispatch = useAppDispatch();
  const platformsListData = useAppSelector(platformsListAsync);
  const platformsStatus = useAppSelector(
    (state) => state.platforms.platformsStatus
  );
  const platformsError = useAppSelector(
    (state) => state.platforms.platformsError
  );

  const platformsNextUrl = useAppSelector(
    (state) => state.platforms.platformsNextUrl
  );

  const platformsCount = useAppSelector(
    (state) => state.platforms.platformsCount
  );

  useEffect(() => {
    if (url === PLATFORMS_URL_API && platformsCount > 0) {
      return;
    } else {
      dispatch(getPlatformsListAsync(url));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const isPlatformsListLoading = platformsStatus === "loading";

  const isPlatformsError =
    platformsError === true && platformsStatus === "failed";

  return {
    platformsCount,
    platformsListData,
    platformsNextUrl,
    isPlatformsListLoading,
    isPlatformsError,
  };
}
