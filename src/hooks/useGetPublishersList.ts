import { useEffect } from "react";
import { PUBLISHERS_URL_API } from "./../constants/api";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  publishersListAsync,
  getPublishersListAsync,
} from "./../features/publishers/PublishersSlice";

export function useGetPublishersList(url: string) {
  const dispatch = useAppDispatch();
  const publishersListData = useAppSelector(publishersListAsync);
  const publishersStatus = useAppSelector(
    (state) => state.publishers.publishersStatus
  );
  const publishersError = useAppSelector(
    (state) => state.publishers.publishersError
  );

  const publishersNextUrl = useAppSelector(
    (state) => state.publishers.publishersNextUrl
  );

  const publishersCount = useAppSelector(
    (state) => state.publishers.publishersCount
  );

  useEffect(() => {
    if (url === PUBLISHERS_URL_API && publishersCount > 0) {
      return;
    } else {
      dispatch(getPublishersListAsync(url));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const isPublishersListLoading = publishersStatus === "loading";

  const isPublishersError =
    publishersError === true && publishersStatus === "failed";

  return {
    publishersCount,
    publishersListData,
    publishersNextUrl,
    isPublishersListLoading,
    isPublishersError,
  };
}
