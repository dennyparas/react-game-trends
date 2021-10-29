import { useEffect } from "react";
import { GENRES_URL_API } from "./../constants/api";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  genresListAsync,
  getGenresListAsync,
} from "./../features/genres/GenresSlice";

export function useGetGenresList(url: string) {
  const dispatch = useAppDispatch();
  const genresListData = useAppSelector(genresListAsync);
  const genresStatus = useAppSelector((state) => state.genres.genresStatus);
  const genresError = useAppSelector((state) => state.genres.genresError);

  const genresNextUrl = useAppSelector((state) => state.genres.genresNextUrl);

  const genresCount = useAppSelector((state) => state.genres.genresCount);

  useEffect(() => {
    if (url === GENRES_URL_API && genresCount > 0) {
      return;
    } else {
      dispatch(getGenresListAsync(url));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const isGenresListLoading = genresStatus === "loading";

  const isGenresError = genresError === true && genresStatus === "failed";

  return {
    genresCount,
    genresListData,
    genresNextUrl,
    isGenresListLoading,
    isGenresError,
  };
}
