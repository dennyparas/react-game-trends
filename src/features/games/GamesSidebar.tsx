import { FC, useEffect, useState } from "react";
import { setArrayOfYears } from "../../utils/dateUtil";
import { useHistory } from "react-router-dom";

type GamesSidebarProps = {
  searchTermQuery: string;
  orderQuery: string;
  parentPlatformsQuery: string;
  platformsQuery: string;
  genreQuery: string;
  releaseYearQuery: string;
  tagsQuery: string;
  developersQuery: string;
  publishersQuery: string;
  storesQuery: string;
};

const GamesSidebar: FC<GamesSidebarProps> = ({
  searchTermQuery,
  orderQuery,
  parentPlatformsQuery,
  platformsQuery,
  genreQuery,
  releaseYearQuery,
  tagsQuery,
  developersQuery,
  publishersQuery,
  storesQuery,
}) => {
  let history = useHistory();

  const arrayOfYears = setArrayOfYears();
  const [releaseYear, setReleaseYear] = useState(releaseYearQuery || "");
  const [parentPlatform, setParentPlatform] = useState(
    parentPlatformsQuery || ""
  );
  const [genre, setGenre] = useState(genreQuery || "");
  const [searchTerm, setSearchTerm] = useState(searchTermQuery || "");
  const [order, setOrder] = useState(orderQuery || "");
  const platform = platformsQuery || "";
  const tag = tagsQuery || "";
  const developer = developersQuery || "";
  const publisher = publishersQuery || "";
  const store = storesQuery || "";

  const setGamesQuery = () => {
    const searchTermQuery = searchTerm !== "" ? `&search=${searchTerm}` : "";

    const orderQuery = order !== "" ? `ordering=${order}` : "";

    const platformQuery = platform !== "" ? `&platforms=${platform}` : "";

    const genreQuery = genre !== "" ? `&genres=${genre}` : "";

    const releaseYearQuery =
      releaseYear !== "" ? `&release_year=${releaseYear}` : "";

    const parentPlatformsQuery =
      parentPlatform !== "" ? `&parent_platforms=${parentPlatform}` : "";

    const tagsQuery = tag !== "" ? `&tags=${tag}` : "";

    const developersQuery = developer !== "" ? `&developers=${developer}` : "";

    const publishersQuery = publisher !== "" ? `&publishers=${publisher}` : "";

    const storesQuery = store !== "" ? `&stores=${store}` : "";

    history.push(
      `/games?${orderQuery}${platformQuery}${genreQuery}${releaseYearQuery}${searchTermQuery}${parentPlatformsQuery}${tagsQuery}${developersQuery}${publishersQuery}${storesQuery}`
    );
  };

  useEffect(() => {
    setGamesQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    order,
    platform,
    parentPlatform,
    genre,
    releaseYear,
    tag,
    developer,
    publisher,
    store,
  ]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setGamesQuery();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);
  return (
    <div className="flex sm:w-3/5 lg:w-1/5 w-full flex-col lg:pr-4 mx-auto">
      <div className="bg-white shadow-md rounded-2xl  px-3 py-3 w-full">
        <div className="mt-3">
          <input
            value={searchTerm}
            type="text"
            placeholder="Search Game"
            className="px-2 py-2 placeholder-gray-400 text-gray-600 rounded text-sm border border-gray-400 outline-none focus:outline-none w-full mb-3"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="text-gray-700 text-lg">Filters</div>
        <div className="flex mb-1 w-full">
          <label className="block text-left w-full">
            <span className="text-gray-400 text-xs">Order by:</span>
            <select
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="px-2 py-2 placeholder-gray-400 text-gray-600 rounded text-sm border border-gray-400 outline-none focus:outline-none w-full"
            >
              <option value="">Any</option>
              <option value="popularity">Popularity</option>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
              <option value="released">Released Date</option>
            </select>
          </label>
        </div>
        <div className="flex mb-1 w-full">
          <label className="block text-left w-full">
            <span className="text-gray-400 text-xs">Release Date:</span>
            <select
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
              className="px-2 py-2 placeholder-gray-400 text-gray-600 rounded text-sm border border-gray-400 outline-none focus:outline-none w-full"
            >
              <option value="">Any</option>
              {arrayOfYears.map((rYear) => (
                <option key={rYear} value={rYear}>
                  {rYear}
                </option>
              ))}
            </select>
          </label>
        </div>
        {platformsQuery === "" && storesQuery === "" && (
          <div className="flex mb-1 w-full">
            <label className="block text-left w-full">
              <span className="text-gray-400 text-xs">Platforms:</span>
              <select
                value={parentPlatform}
                onChange={(e) => setParentPlatform(e.target.value)}
                className="px-2 py-2 placeholder-gray-400 text-gray-600 rounded text-sm border border-gray-400 outline-none focus:outline-none w-full"
              >
                <option value="">All</option>
                <option value="1">PC</option>
                <option value="2">PlayStation</option>
                <option value="3">Xbox</option>
                <option value="4">IOS</option>
                <option value="8">Android</option>
                <option value="5">Apple Macintosh</option>
                <option value="6">Linux</option>
                <option value="7">Nintendo</option>
                <option value="9">Atari</option>
                <option value="10">Commodore / Amiga</option>
                <option value="11">Sega</option>
                <option value="12">3DO</option>
                <option value="13">Neo Geo</option>
                <option value="14">Web</option>
              </select>
            </label>
          </div>
        )}
        <div className="flex mb-3 w-full">
          <label className="block text-left w-full">
            <span className="text-gray-400 text-xs">Genres:</span>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="px-2 py-2 placeholder-gray-400 text-gray-600 rounded text-sm border border-gray-400 outline-none focus:outline-none w-full"
            >
              <option value="">All</option>
              <option value="4">Action</option>
              <option value="51">Indie</option>
              <option value="3">Adventure</option>
              <option value="5">RPG</option>
              <option value="10">Strategy</option>
              <option value="2">Shooter</option>
              <option value="40">Casuak</option>
              <option value="14">Simulation</option>
              <option value="7">Puzzle</option>
              <option value="11">Arcade</option>
              <option value="83">Platformer</option>
              <option value="1">Racing</option>
              <option value="59">Massively Multiplayer</option>
              <option value="15">Sports</option>
              <option value="6">Fighting</option>
              <option value="19">Family</option>
              <option value="28">Board Games</option>
              <option value="34">Educational</option>
              <option value="17">Card</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GamesSidebar;
