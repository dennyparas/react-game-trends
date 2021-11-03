import React, { FC } from "react";
import { NavLink } from "react-router-dom";

type ProfileProps = {
  id: number;
  name: string;
  type: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: {
    id: number;
    slug: string;
    name: string;
  }[];
};

const InfoCard: FC<ProfileProps> = ({
  id,
  name,
  type,
  slug,
  games_count,
  games,
  image_background,
}) => {
  return (
    <div className="flex-1 mt-24 bg-white relative shadow-md rounded-2xl  w-full p-4">
      <div className="flex justify-center">
        <img
          src={image_background}
          alt={name}
          className="rounded-full object-cover  mx-auto absolute -top-20 w-32 h-32 shadow-md border-2 border-white"
        />
      </div>

      <div className="mt-16">
        <NavLink to={`/games?${type}=${id}`}>
          <h1 className="font-bold text-center text-xl text-gray-900 hover:text-indigo-800">
            {name}
          </h1>
        </NavLink>
        <p className="text-center text-sm text-gray-400 font-medium">
          {games_count} games
        </p>

        <div className="w-full">
          <h3 className="text-center font-bold text-gray-600 text-sm text-left py-3">
            Popular Games
          </h3>
          {games.map((game) => (
            <div
              key={game.id}
              className="text-center border-t border-gray-200 py-2"
            >
              <NavLink to={`/game/${game.slug}`}>
                <span className="text-sm text-gray-500 hover:text-green-800">
                  {game.name}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
