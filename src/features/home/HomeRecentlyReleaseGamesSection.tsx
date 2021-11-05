import { FC } from "react";
import { useGetHomeRecentlyReleaseGames } from "./../../hooks/useGetHomeRecentlyReleaseGames";
import HorizontalCard from "../../components/HorizontalCard";
import HorizontalCardListSkeletonLoader from "../../components/HorizontalCardListSkeletonLoader";

const RecentlyReleaseGamesSection: FC = () => {
  const {
    recentlyReleaseGamesData,
    isRecentlyReleaseGamesLoading,
    isRecentlyReleaseGamesError,
  } = useGetHomeRecentlyReleaseGames();

  const { results } = recentlyReleaseGamesData;
  return (
    <>
      <h1 className="text-xl mb-2 mt-4">
        Recently Released Games (Last 30 Days)
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {isRecentlyReleaseGamesLoading && <HorizontalCardListSkeletonLoader />}
        {!isRecentlyReleaseGamesLoading &&
          results.length > 0 &&
          results.map((game) => (
            <HorizontalCard
              key={game.id}
              metacritic={game.metacritic}
              name={game.name}
              released={game.released}
              slug={game.slug}
              background_image={game.background_image}
              genres={game.genres}
              platforms={game.platforms}
              id={game.id}
            />
          ))}
      </div>
      {isRecentlyReleaseGamesError && (
        <h1> Error loading Games. Please try again later.</h1>
      )}
    </>
  );
};

export default RecentlyReleaseGamesSection;
