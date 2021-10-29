import { useEffect } from "react";
import { TAGS_URL_API } from "./../constants/api";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { tagsListAsync, getTagsListAsync } from "./../features/tags/TagsSlice";

export function useGetTagsList(url: string) {
  const dispatch = useAppDispatch();
  const tagsListData = useAppSelector(tagsListAsync);
  const tagsStatus = useAppSelector((state) => state.tags.tagsStatus);
  const tagsError = useAppSelector((state) => state.tags.tagsError);

  const tagsNextUrl = useAppSelector((state) => state.tags.tagsNextUrl);

  const tagsCount = useAppSelector((state) => state.tags.tagsCount);

  useEffect(() => {
    if (url === TAGS_URL_API && tagsCount > 0) {
      return;
    } else {
      dispatch(getTagsListAsync(url));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const isTagsListLoading = tagsStatus === "loading";

  const isTagsError = tagsError === true && tagsStatus === "failed";

  return {
    tagsCount,
    tagsListData,
    tagsNextUrl,
    isTagsListLoading,
    isTagsError,
  };
}
