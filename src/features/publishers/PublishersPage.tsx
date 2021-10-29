import { FC, useState } from "react";
import ProfileCardListSkeletonLoader from "../../components/ProfileCardListSkeletonLoader";
import ProfileCard from "../../components/ProfileCard";
import { PUBLISHERS_URL_API } from "./../../constants/api";
import { useGetPublishersList } from "./../../hooks/useGetPublishersList";

const PublishersPage: FC = () => {
  const [url, setURL] = useState(PUBLISHERS_URL_API);
  const {
    publishersCount,
    publishersListData,
    publishersNextUrl,
    isPublishersError,
    isPublishersListLoading,
  } = useGetPublishersList(url);
  return (
    <div className="container mt-5 mb-10 mx-auto px-5 xl:px-0">
      <h1 className="text-2xl mb-2 mt-4">
        Publishers {publishersCount > 0 && `(${publishersCount})`}
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {publishersListData.map((publisher) => (
          <ProfileCard
            key={publisher.id}
            id={publisher.id}
            name={publisher.name}
            type="publisher"
            slug={publisher.slug}
            games_count={publisher.games_count}
            games={publisher.games}
            image_background={publisher.image_background}
          />
        ))}
        {isPublishersListLoading && <ProfileCardListSkeletonLoader />}
      </div>
      {publishersNextUrl && (
        <button
          onClick={() => {
            setURL(publishersNextUrl);
          }}
          className="block w-48 bg-indigo-800 mx-auto mt-5 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-indigo-100 rounded-full hover:shadow-2xl hover:bg-indigo-900"
        >
          {isPublishersListLoading ? "Loading..." : "Load More"}
        </button>
      )}

      {isPublishersError && (
        <h1 className="text-xl mb-2 mt-4 text-center">
          Error loading publishers. Please try again later.
        </h1>
      )}
    </div>
  );
};

export default PublishersPage;
