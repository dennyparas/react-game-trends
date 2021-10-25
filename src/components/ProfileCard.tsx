import React, { FC } from "react";

const ProfileCard: FC = () => {
  return (
    <div className="flex-1 mt-24 bg-white relative shadow-md rounded-2xl  w-full p-4">
      <div className="flex justify-center">
        <img
          src="https://media.rawg.io/media/games/018/01857c5ff9579c48fa8bd76b4d83a946.jpg"
          alt=""
          className="rounded-full object-scale-down lg:object-cover  mx-auto absolute -top-20 w-32 h-32 shadow-md border-2 border-white"
        />
      </div>

      <div className="mt-16">
        <h1 className="font-bold text-center text-xl text-gray-900">
          PlayStation 5
        </h1>
        <p className="text-center text-sm text-gray-400 font-medium">
          377 Games
        </p>
        <p>
          <span></span>
        </p>

        <div className="w-full">
          <h3 className="text-center font-bold text-gray-600 text-sm text-left py-3">
            Popular Games
          </h3>
          <div className="text-center border-t border-gray-200 py-2">
            <span className="text-sm text-gray-500">Grand Theft Auto V</span>
          </div>
          <div className="text-center border-gray-200 py-2">
            <span className="text-sm text-gray-500">
              The Witcher 3: Wild Hunt
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
