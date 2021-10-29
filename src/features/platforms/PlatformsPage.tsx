import { FC, useState } from "react";
import ProfileCardListSkeletonLoader from "../../components/ProfileCardListSkeletonLoader";
import ProfileCard from "../../components/ProfileCard";
import { PLATFORMS_URL_API } from "./../../constants/api";
import { useGetPlatformsList } from "./../../hooks/useGetPlatformsList";

const PlatformsPage: FC = () => {
  const [url, setURL] = useState(PLATFORMS_URL_API);
  const {
    platformsCount,
    platformsListData,
    platformsNextUrl,
    isPlatformsError,
    isPlatformsListLoading,
  } = useGetPlatformsList(url);
  return (
    <div className="container mt-5  mx-auto px-5 xl:px-0">
      <h1 className="text-2xl mb-2 mt-4">
        Platforms {platformsCount > 0 && `(${platformsCount})`}
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {platformsListData.map((platform) => (
          <ProfileCard
            key={platform.id}
            id={platform.id}
            type="platform"
            name={platform.name}
            slug={platform.slug}
            games_count={platform.games_count}
            games={platform.games}
            image_background={platform.image_background}
          />
        ))}
        {isPlatformsListLoading && <ProfileCardListSkeletonLoader />}
      </div>
      {platformsNextUrl && (
        <button
          onClick={() => {
            setURL(platformsNextUrl);
          }}
          className="block w-48 bg-indigo-800 mx-auto mt-5 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-indigo-100 rounded-full hover:shadow-2xl hover:bg-indigo-900"
        >
          {isPlatformsListLoading ? "Loading..." : "Load More"}
        </button>
      )}

      {isPlatformsError && (
        <h1 className="text-xl mb-2 mt-4 text-center">
          Error loading platforms. Please try again later.
        </h1>
      )}
    </div>
  );
};

export default PlatformsPage;
