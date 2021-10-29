import { useEffect } from "react";
import { DEVELOPERS_URL_API } from "./../constants/api";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  developersListAsync,
  getDevelopersListAsync,
} from "./../features/developers/DevelopersSlice";

export function useGetDevelopersList(url: string) {
  const dispatch = useAppDispatch();
  const developersListData = useAppSelector(developersListAsync);
  const developersStatus = useAppSelector(
    (state) => state.developers.developersStatus
  );
  const developersError = useAppSelector(
    (state) => state.developers.developersError
  );

  const developersNextUrl = useAppSelector(
    (state) => state.developers.developersNextUrl
  );

  const developersCount = useAppSelector(
    (state) => state.developers.developersCount
  );

  useEffect(() => {
    if (url === DEVELOPERS_URL_API && developersCount > 0) {
      return;
    } else {
      dispatch(getDevelopersListAsync(url));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const isDevelopersListLoading = developersStatus === "loading";

  const isDevelopersError =
    developersError === true && developersStatus === "failed";

  return {
    developersCount,
    developersListData,
    developersNextUrl,
    isDevelopersListLoading,
    isDevelopersError,
  };
}
