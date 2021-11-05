import { FC } from "react";
import { useGetHomeAnticipatedGames } from "./../../hooks/useGetHomeAnticipatedGames";
import HorizontalCard from "../../components/HorizontalCard";
import HorizontalCardListSkeletonLoader from "../../components/HorizontalCardListSkeletonLoader";

const HomeAnticipatedGamesSection: FC = () => {
  const {
    anticipatedGamesData,
    isAnticipatedGamesLoading,
    isAnticipatedGamesError,
  } = useGetHomeAnticipatedGames();

  const { results } = anticipatedGamesData;
  return (
    <>
      <h1 className="text-xl mb-2 mt-4">Anticipated Upcoming Games</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-3 md:mx-0">
        {isAnticipatedGamesLoading && <HorizontalCardListSkeletonLoader />}
        {!isAnticipatedGamesLoading &&
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
      {isAnticipatedGamesError && (
        <h1> Error loading Games. Please try again later.</h1>
      )}
    </>
  );
};

export default HomeAnticipatedGamesSection;
