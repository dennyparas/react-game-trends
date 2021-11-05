import { FC } from "react";
import { useGetHomeAverageRateGames } from "./../../hooks/useGetHomeAverageRateGames";
import HorizontalCard from "../../components/HorizontalCard";
import HorizontalCardListSkeletonLoader from "../../components/HorizontalCardListSkeletonLoader";

const HomeAverageRateGamesSection: FC = () => {
  const {
    averageRateGamesData,
    isAverageRateGamesLoading,
    isAverageRateGamesError,
  } = useGetHomeAverageRateGames();

  const { results } = averageRateGamesData;
  return (
    <>
      <h1 className="text-xl mb-2 mt-4">Top Rated Games (Past 6 months)</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {isAverageRateGamesLoading && <HorizontalCardListSkeletonLoader />}
        {!isAverageRateGamesLoading &&
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
      {isAverageRateGamesError && (
        <h1> Error loading Games. Please try again later.</h1>
      )}
    </>
  );
};

export default HomeAverageRateGamesSection;
