import { FC, useState } from "react";
import ProfileCardListSkeletonLoader from "../../components/ProfileCardListSkeletonLoader";
import ProfileCard from "../../components/ProfileCard";
import { TAGS_URL_API } from "./../../constants/api";
import { useGetTagsList } from "./../../hooks/useGetTagsList";

const TagsPage: FC = () => {
  const [url, setURL] = useState(TAGS_URL_API);
  const {
    tagsCount,
    tagsListData,
    tagsNextUrl,
    isTagsError,
    isTagsListLoading,
  } = useGetTagsList(url);
  return (
    <div className="container mt-5  mx-auto px-5 xl:px-0">
      <h1 className="text-2xl mb-2 mt-4">
        Tags {tagsCount > 0 && `(${tagsCount})`}
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {tagsListData.map((tag) => (
          <ProfileCard
            key={tag.id}
            id={tag.id}
            name={tag.name}
            type="tag"
            slug={tag.slug}
            games_count={tag.games_count}
            games={tag.games}
            image_background={tag.image_background}
          />
        ))}
        {isTagsListLoading && <ProfileCardListSkeletonLoader />}
      </div>
      {tagsNextUrl && (
        <button
          onClick={() => {
            setURL(tagsNextUrl);
          }}
          className="block w-48 bg-indigo-800 mx-auto mt-5 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-indigo-100 rounded-full hover:shadow-2xl hover:bg-indigo-900"
        >
          {isTagsListLoading ? "Loading..." : "Load More"}
        </button>
      )}

      {isTagsError && (
        <h1 className="text-xl mb-2 mt-4 text-center">
          Error loading tags. Please try again later.
        </h1>
      )}
    </div>
  );
};

export default TagsPage;
