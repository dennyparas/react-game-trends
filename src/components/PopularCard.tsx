import React, { FC } from "react";
import { Game } from "../types/gameTypes";

const PopularCard: FC<Game> = ({
  name,
  metacritic,
  released,
  background_image,
  genres,
  platforms,
}) => {
  console.log("rerendering");
  return (
    <div
      className="relative flex flex-wrap flex-none content-end bg-cover bg-center bg-center bg-no-repeat shadow-md border border-gray-200 rounded-xl w-72 h-96  mb-3"
      style={{
        backgroundImage: `url(${background_image})`,
      }}
    >
      {metacritic && (
        <div className="absolute  z-0 bg-black text-white right-3 top-3 h-8 w-8 flex items-center justify-center rounded-full">
          <div className="text-xs h-6 w-6 border-green-300 border-2  flex items-center justify-center rounded-full">
            {metacritic}
          </div>
        </div>
      )}
      <div className="px-4 py-3 bg-gradient-to-t from-black via-gray-900 to-transparent rounded-xl w-full">
        <a href="index.html">
          <h5 className="text-white font-bold text-md tracking-tight  ">
            {name}
          </h5>
        </a>
        <p className="text-xs text-gray-500 ">Release</p>
        <p className="text-xs text-gray-300 mb-1">{released}</p>

        <p className="text-xs text-gray-500 ">Genres: </p>
        <p className="text-xs text-gray-300">
          {genres.slice(0, 3).map((genre, index) => (
            <span key={genre.id}>{(index ? ", " : "") + genre.name} </span>
          ))}
        </p>

        <p className="text-xs text-gray-500 ">Platforms</p>
        <p className="text-xs text-gray-300">
          {platforms.map((platform, index) => (
            <span key={platform.platform.id}>
              {(index ? ", " : "") + platform.platform.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PopularCard;
