import { FC, useState } from "react";
import ProfileCardListSkeletonLoader from "../../components/ProfileCardListSkeletonLoader";
import ProfileCard from "../../components/ProfileCard";
import { STORES_URL_API } from "./../../constants/api";
import { useGetStoresList } from "./../../hooks/useGetStoresList";

const StoresPage: FC = () => {
  const [url, setURL] = useState(STORES_URL_API);
  const {
    storesCount,
    storesListData,
    storesNextUrl,
    isStoresError,
    isStoresListLoading,
  } = useGetStoresList(url);
  return (
    <div className="container mt-5  mx-auto px-5 xl:px-0">
      <h1 className="text-2xl mb-2 mt-4">
        Stores {storesCount > 0 && `(${storesCount})`}
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {storesListData.map((store) => (
          <ProfileCard
            key={store.id}
            id={store.id}
            name={store.name}
            type="store"
            slug={store.slug}
            games_count={store.games_count}
            games={store.games}
            image_background={store.image_background}
          />
        ))}
        {isStoresListLoading && <ProfileCardListSkeletonLoader />}
      </div>
      {storesNextUrl && (
        <button
          onClick={() => {
            setURL(storesNextUrl);
          }}
          className="block w-48 bg-indigo-800 mx-auto mt-5 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-indigo-100 rounded-full hover:shadow-2xl hover:bg-indigo-900"
        >
          {isStoresListLoading ? "Loading..." : "Load More"}
        </button>
      )}

      {isStoresError && (
        <h1 className="text-xl mb-2 mt-4 text-center">
          Error loading stores. Please try again later.
        </h1>
      )}
    </div>
  );
};

export default StoresPage;
