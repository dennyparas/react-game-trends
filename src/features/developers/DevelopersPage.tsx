import { FC, useState } from "react";
import ProfileCardListSkeletonLoader from "../../components/ProfileCardListSkeletonLoader";
import ProfileCard from "../../components/ProfileCard";
import { DEVELOPERS_URL_API } from "./../../constants/api";
import { useGetDevelopersList } from "./../../hooks/useGetDevelopersList";

const DevelopersPage: FC = () => {
  const [url, setURL] = useState(DEVELOPERS_URL_API);
  const {
    developersCount,
    developersListData,
    developersNextUrl,
    isDevelopersError,
    isDevelopersListLoading,
  } = useGetDevelopersList(url);
  return (
    <div className="container mt-5  mx-auto px-5 xl:px-0">
      <h1 className="text-2xl mb-2 mt-4">
        Developers {developersCount > 0 && `(${developersCount})`}
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {developersListData.map((developer) => (
          <ProfileCard
            key={developer.id}
            id={developer.id}
            name={developer.name}
            type="developer"
            slug={developer.slug}
            games_count={developer.games_count}
            games={developer.games}
            image_background={developer.image_background}
          />
        ))}
        {isDevelopersListLoading && <ProfileCardListSkeletonLoader />}
      </div>
      {developersNextUrl && (
        <button
          onClick={() => {
            setURL(developersNextUrl);
          }}
          className="block w-48 bg-indigo-800 mx-auto mt-5 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-indigo-100 rounded-full hover:shadow-2xl hover:bg-indigo-900"
        >
          {isDevelopersListLoading ? "Loading..." : "Load More"}
        </button>
      )}

      {isDevelopersError && (
        <h1 className="text-xl mb-2 mt-4 text-center">
          Error loading developers. Please try again later.
        </h1>
      )}
    </div>
  );
};

export default DevelopersPage;
