import { FC, useEffect } from "react";
import VerticalCardListSkeletonLoader from "../../components/VerticalCardListSkeletonLoader";
import { useGetGamesList } from "./../../hooks/useGetGamesList";
import { GAMES_URL_API } from "./../../constants/api";
import VerticalCard from "../../components/VerticalCard";
import GamesSidebar from "./GamesSidebar";
import { useLocation } from "react-router-dom";

const GamesPage: FC = () => {
  const queryParams = useLocation().search;

  const searchTermQuery = new URLSearchParams(queryParams).get("search") || "";

  const orderQuery = new URLSearchParams(queryParams).get("ordering") || "";

  const parentPlatformsQuery =
    new URLSearchParams(queryParams).get("parent_platforms") || "";

  const platformsQuery =
    new URLSearchParams(queryParams).get("platforms") || "";

  const genreQuery = new URLSearchParams(queryParams).get("genres") || "";

  const releaseYearQuery =
    new URLSearchParams(queryParams).get("release_year") || "";

  const tagsQuery = new URLSearchParams(queryParams).get("tags") || "";

  const developersQuery =
    new URLSearchParams(queryParams).get("developers") || "";

  const publishersQuery =
    new URLSearchParams(queryParams).get("publishers") || "";

  const storesQuery = new URLSearchParams(queryParams).get("stores") || "";

  const {
    getGamesList,
    loadMoreGames,
    gamesListCount,
    gamesListNextUrl,
    isGamesListError,
    isGamesListLoading,
    gamesListData,
  } = useGetGamesList();

  const ordering = (order: string): string => {
    if (order === "popularity") {
      return "-added";
    }
    if (order === "rating") {
      return "-metacritic";
    }
    return order;
  };

  useEffect(() => {
    const searchTermParam =
      searchTermQuery !== "" ? `&search=${searchTermQuery}` : "";

    const orderParam =
      orderQuery !== "" ? `&ordering=${ordering(orderQuery)}` : "";

    const parentPlatformsParam =
      parentPlatformsQuery !== ""
        ? `&parent_platforms=${parentPlatformsQuery}`
        : "";

    const platformsParam =
      platformsQuery !== "" ? `&platforms=${platformsQuery}` : "";

    const genreParam = genreQuery !== "" ? `&genres=${genreQuery}` : "";

    const releaseYearParam =
      releaseYearQuery !== ""
        ? `&dates=${releaseYearQuery}-01-01,${releaseYearQuery}-12-31`
        : "";

    const tagsParam = tagsQuery !== "" ? `&tags=${tagsQuery}` : "";

    const developersParam =
      developersQuery !== "" ? `&developers=${developersQuery}` : "";

    const publishersParam =
      publishersQuery !== "" ? `&publishers=${publishersQuery}` : "";

    const storesParam = storesQuery !== "" ? `&stores=${storesQuery}` : "";

    getGamesList(
      `${GAMES_URL_API}${searchTermParam}${orderParam}${parentPlatformsParam}${platformsParam}${genreParam}${releaseYearParam}${tagsParam}${developersParam}${publishersParam}${storesParam}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchTermQuery,
    orderQuery,
    platformsQuery,
    parentPlatformsQuery,
    genreQuery,
    releaseYearQuery,
    tagsQuery,
    developersQuery,
    publishersQuery,
    storesQuery,
  ]);

  return (
    <div className="container mt-5 mx-auto px-5 xl:px-0">
      <div className="flex flex-row flex-wrap">
        <GamesSidebar
          searchTermQuery={searchTermQuery}
          orderQuery={orderQuery}
          platformsQuery={platformsQuery}
          parentPlatformsQuery={parentPlatformsQuery}
          genreQuery={genreQuery}
          releaseYearQuery={releaseYearQuery}
          tagsQuery={tagsQuery}
          developersQuery={developersQuery}
          publishersQuery={publishersQuery}
          storesQuery={storesQuery}
        />
        <div className="flex-grow w-full lg:w-4/5">
          {gamesListCount === 0 && (
            <h1 className="text-xl mb-2 mt-4">No Games found.</h1>
          )}
          {gamesListCount > 0 && !isGamesListLoading && (
            <h1 className="text-xl mb-2 mt-4">Games ({gamesListCount})</h1>
          )}
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-3 md:mx-0">
            {gamesListData.map((game) => (
              <VerticalCard
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
            {isGamesListLoading && <VerticalCardListSkeletonLoader />}
          </div>
          {gamesListNextUrl && (
            <button
              onClick={() => {
                loadMoreGames(gamesListNextUrl);
              }}
              className="block w-48 bg-indigo-800 mx-auto mt-5 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-indigo-100 rounded-full hover:shadow-2xl hover:bg-indigo-900"
            >
              {isGamesListLoading ? "Loading..." : "Load More"}
            </button>
          )}
          {isGamesListError && (
            <h1> Error loading Games. Please try again later.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
