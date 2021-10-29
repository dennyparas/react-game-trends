import { FC, useState } from "react";
import ProfileCardListSkeletonLoader from "../../components/ProfileCardListSkeletonLoader";
import ProfileCard from "../../components/ProfileCard";
import { GENRES_URL_API } from "./../../constants/api";
import { useGetGenresList } from "./../../hooks/useGetGenresList";

const GenresPage: FC = () => {
  const [url, setURL] = useState(GENRES_URL_API);
  const {
    genresCount,
    genresListData,
    genresNextUrl,
    isGenresError,
    isGenresListLoading,
  } = useGetGenresList(url);
  return (
    <div className="container mt-5  mx-auto px-5 xl:px-0">
      <h1 className="text-2xl mb-2 mt-4">
        Genres {genresCount > 0 && `(${genresCount})`}
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {genresListData.map((genre) => (
          <ProfileCard
            key={genre.id}
            id={genre.id}
            name={genre.name}
            type="genre"
            slug={genre.slug}
            games_count={genre.games_count}
            games={genre.games}
            image_background={genre.image_background}
          />
        ))}
        {isGenresListLoading && <ProfileCardListSkeletonLoader />}
      </div>
      {genresNextUrl && (
        <button
          onClick={() => {
            setURL(genresNextUrl);
          }}
          className="block w-48 bg-indigo-800 mx-auto mt-5 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-indigo-100 rounded-full hover:shadow-2xl hover:bg-indigo-900"
        >
          {isGenresListLoading ? "Loading..." : "Load More"}
        </button>
      )}

      {isGenresError && (
        <h1 className="text-xl mb-2 mt-4 text-center">
          Error loading genres. Please try again later.
        </h1>
      )}
    </div>
  );
};

export default GenresPage;
