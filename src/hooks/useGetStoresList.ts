import { useEffect } from "react";
import { STORES_URL_API } from "./../constants/api";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  storesListAsync,
  getStoresListAsync,
} from "./../features/stores/StoresSlice";

export function useGetStoresList(url: string) {
  const dispatch = useAppDispatch();
  const storesListData = useAppSelector(storesListAsync);
  const storesStatus = useAppSelector((state) => state.stores.storesStatus);
  const storesError = useAppSelector((state) => state.stores.storesError);

  const storesNextUrl = useAppSelector((state) => state.stores.storesNextUrl);

  const storesCount = useAppSelector((state) => state.stores.storesCount);

  useEffect(() => {
    if (url === STORES_URL_API && storesCount > 0) {
      return;
    } else {
      dispatch(getStoresListAsync(url));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const isStoresListLoading = storesStatus === "loading";

  const isStoresError = storesError === true && storesStatus === "failed";

  return {
    storesCount,
    storesListData,
    storesNextUrl,
    isStoresListLoading,
    isStoresError,
  };
}
