import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { Game } from "../types/gameTypes";

const HorizontalCard: FC<Game> = memo(
  ({
    name,
    metacritic,
    released,
    background_image,
    genres,
    platforms,
    slug,
  }) => {
    return (
      <div className="bg-white shadow-md  rounded-2xl p-3 flex-1 ">
        <div className="flex-none lg:flex ">
          <div className="flex-auto h-full w-full lg:h-40 lg:w-36   lg:mb-0 mb-3 relative">
            {metacritic && (
              <div className="absolute  z-0 bg-black text-white left-2 top-2 h-8 w-8 flex items-center justify-center rounded-full">
                <div className="text-xs h-6 w-6 border-green-300 border-2  flex items-center justify-center rounded-full">
                  {metacritic}
                </div>
              </div>
            )}
            <img
              src={background_image}
              alt={name}
              className="w-full h-40  object-cover  rounded-xl"
            />
          </div>
          <div className="flex w-10/12 flex-col lg:ml-3 ">
            <NavLink to={`/game/${slug}`}>
              <h5 className=" font-bold text-md tracking-tight mb-3  ">
                {name}
              </h5>
            </NavLink>
            <div className="flex flex-row justify-between ">
              {released && (
                <>
                  <div className="flex flex-col flex-grow-0 mr-4">
                    <p className="text-xs text-gray-400 ">Release</p>
                    <p className="text-sm text-gray-600 mb-1">{released}</p>
                  </div>
                </>
              )}
              <div className="flex flex-col flex-grow">
                <p className="text-xs text-gray-400 ">Genres</p>
                <p className="text-sm text-gray-600 mb-1">
                  {genres.slice(0, 3).map((genre, index) => (
                    <NavLink key={genre.id} to={`/games?genre=${genre.id}`}>
                      <span>{(index ? ", " : "") + genre.name}</span>
                    </NavLink>
                  ))}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 ">Platforms</p>
            <p className="text-sm text-gray-600 mb-1">
              {platforms.map((platform, index) => (
                <NavLink
                  key={platform.platform.id}
                  to={`/games?platforms=${platform.platform.id}`}
                >
                  <span>{(index ? ", " : "") + platform.platform.name}</span>
                </NavLink>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default HorizontalCard;
