import { FC } from "react";
import PopularCardListSkeletonLoader from "../../components/PopularCardListSkeletonLoader";
import PopularCard from "./../../components/PopularCard";
import { useGetHomePopularGames } from "./../../hooks/useGetHomePopularGames";

const HomePopularGamesSection: FC = () => {
  const { popularGamesData, isPopularGamesLoading, isPopularGamesError } =
    useGetHomePopularGames();

  const { results } = popularGamesData;
  return (
    <>
      <h1 className="text-xl mb-2">Trending Games (Past 6 Months)</h1>
      <div className="flex flex-nowrap overflow-x-scroll space-x-3 mx-3 md:mx-0">
        {isPopularGamesLoading && <PopularCardListSkeletonLoader />}
        {results.length > 0 &&
          results.map((game) => (
            <PopularCard
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
      {isPopularGamesError && (
        <h1> Error loading Games. Please try again later.</h1>
      )}
    </>
  );
};

export default HomePopularGamesSection;
