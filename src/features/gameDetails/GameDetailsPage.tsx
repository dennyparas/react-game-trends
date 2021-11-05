import { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import GameDetailsSkeletonLoader from "../../components/GameDetailsSkeletonLoader";
import { GAME_DETAILS_URL_API, APP_KEY } from "../../constants/api";
import { useGetGameDetails } from "../../hooks/useGetGameDetails";

const GameDetailsPage: FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const gameDetailsUrl = `${GAME_DETAILS_URL_API}${slug}?key=${APP_KEY}`;
  const gameScreenshotsUrl = `${GAME_DETAILS_URL_API}${slug}/screenshots?key=${APP_KEY}`;
  const {
    gameDetailsData,
    isGameDetailsError,
    isGameDetailsLoading,
    gameScreenshotsData,
    isGameScreenshotsLoading,
  } = useGetGameDetails(gameDetailsUrl, gameScreenshotsUrl);
  return (
    <>
      {isGameDetailsLoading && <GameDetailsSkeletonLoader />}
      {!isGameDetailsLoading && (
        <>
          <div
            className="flex flex-wrap bg-cover bg-center bg-center bg-no-repeat  w-full h-auto  mb-3"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${gameDetailsData.background_image_additional})`,
            }}
          >
            <div className="container flex lg:flex-row flex-col w-full px-5 mx-auto my-5">
              <div className="lg:flex-none flex">
                {gameDetailsData.background_image && (
                  <img
                    src={gameDetailsData.background_image}
                    alt={gameDetailsData.name}
                    className="inline-block h-60 w-60 object-cover mx-auto lg:mx-0 rounded-xl lg:-mb-24"
                  />
                )}
              </div>
              <div className="flex-grow flex h-auto lg:h-44 flex-wrap content-end lg:ml-3 ">
                <h1 className="text-white block w-full text-xl lg:text-3xl mb-2 mt-2 lg:mt-0 text-center lg:text-left mx-3 lg:mx-0">
                  {gameDetailsData.name}
                </h1>
                <p className="text-white block w-full text-md lg:text-xl mb-2 mt-2 lg:mt-0 text-center lg:text-left">
                  {gameDetailsData &&
                    gameDetailsData.developers?.map((dev) => (
                      <span key={dev.id}>{dev.name} </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-wrap lg:flex-row flex-col w-full px-5  mx-auto my-5">
            <p className="lg:text-lg text-md text-gray-400  lg:mt-12 ">
              Descriptions:
            </p>
            <p className="block w-full mb-2 lg:px-0 px-3  lg:text-lg text-md">
              {gameDetailsData.description_raw ? (
                <span> {gameDetailsData.description_raw} </span>
              ) : (
                <span>N/A</span>
              )}
            </p>
            <div className="flex flex-col lg:flex-row w-full lg:px-0 px-3 mt-3">
              <div className="flex-auto lg:w-4/6">
                <p className="lg:text-lg text-md text-gray-400  ">
                  Release Date:
                </p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.released ? (
                    <span>{gameDetailsData.released}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p className="lg:text-lg text-md text-gray-400  ">Genres: </p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.genres &&
                    gameDetailsData.genres.slice(0, 3).map((genre, index) => (
                      <NavLink key={genre.id} to={`/games?genre=${genre.id}`}>
                        <span>{(index ? ", " : "") + genre.name}</span>
                      </NavLink>
                    ))}
                </p>
                <p className="lg:text-lg text-md text-gray-400  ">Platforms</p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.platforms ? (
                    gameDetailsData.platforms.map((platform, index) => (
                      <NavLink
                        key={platform.platform.id}
                        to={`/games?platforms=${platform.platform.id}`}
                      >
                        <span>
                          {(index ? ", " : "") + platform.platform.name}
                        </span>
                      </NavLink>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p className="lg:text-lg text-md text-gray-400">
                  Related Tags:{" "}
                </p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.tags ? (
                    gameDetailsData.tags.map((tag, index) => (
                      <NavLink key={tag.id} to={`/games?tags=${tag.id}`}>
                        <span>{(index ? ", " : "") + tag.name}</span>
                      </NavLink>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
              </div>
              <div className="flex-auto lg:w-2/6">
                <p className="lg:text-lg text-md text-gray-400  ">Metascore:</p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.metacritic ? (
                    <span>{gameDetailsData.metacritic}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>

                <p className="lg:text-lg text-md text-gray-400  ">Website:</p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.website ? (
                    <a href={gameDetailsData.website}>
                      {gameDetailsData.website}
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p className="lg:text-lg text-md text-gray-400  ">Developers</p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.developers ? (
                    gameDetailsData.developers.map((dev, index) => (
                      <NavLink key={dev.id} to={`/games?developers=${dev.id}`}>
                        <span>{(index ? ", " : "") + dev.name}</span>
                      </NavLink>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p className="lg:text-lg text-md text-gray-400  ">
                  Publishers:
                </p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.publishers &&
                  gameDetailsData.publishers.length > 0 ? (
                    gameDetailsData.publishers.map((pub, index) => (
                      <NavLink key={pub.id} to={`/games?publishers=${pub.id}`}>
                        <span>{(index ? ", " : "") + pub.name}</span>
                      </NavLink>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p className="lg:text-lg text-md text-gray-400  ">Stores: </p>
                <p className="lg:text-lg text-md text-gray-600 mb-1">
                  {gameDetailsData.stores ? (
                    gameDetailsData.stores.map((store, index) => (
                      <NavLink
                        key={store.id}
                        to={`/games?stores=${store.store.id}`}
                      >
                        <span>{(index ? ", " : "") + store.store.name}</span>
                      </NavLink>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="flex container flex-col w-full mt-3 mx-auto px-3">
            <h1 className="text-xl mb-2 mt-4">Screenshots:</h1>
            <div className="flex px-3 flex-row flex-wrap w-full lg:px-0">
              {gameScreenshotsData &&
                !isGameScreenshotsLoading &&
                gameScreenshotsData
                  .slice(0, 6)
                  .map((image) => (
                    <img
                      key={image.id}
                      src={image.image}
                      alt={`screenshot-${image.id}`}
                      className="flex w-full lg:w-2/6 h-60 object-cover px-1 my-1 rounded-xl"
                    />
                  ))}
            </div>
          </div>

          {isGameDetailsError && (
            <h1 className="text-xl mb-2 mt-4 text-center">
              Error loading game details. Please try again later.
            </h1>
          )}
        </>
      )}
    </>
  );
};

export default GameDetailsPage;
