import { FC } from "react";

const GameDetailsSkeletonLoader: FC = () => {
  return (
    <>
      <div className="flex animate-pulse flex-wrap bg-gray-500 bg-cover bg-center bg-center bg-no-repeat  w-full h-auto  mb-3">
        <div className="container flex lg:flex-row flex-col w-full px-5 mx-auto my-5">
          <div className="lg:flex-none flex">
            <div className="inline-block h-60 w-60  bg-gray-400 mx-auto lg:mx-0 rounded-xl lg:-mb-24"></div>
          </div>
          <div className="flex-grow flex h-auto lg:h-44 flex-wrap content-end lg:ml-3 ">
            <div className="w-5/6 h-3 bg-gray-400 mb-2 mt-2 lg:mt-0  rounded mx-3 lg:mx-0"></div>
            <div className="w-3/6 h-3 bg-gray-400 mb-2 mt-2 lg:mt-0  rounded mx-3 lg:mx-0"></div>
          </div>
        </div>
      </div>
      <div className="container animate-pulse flex flex-wrap lg:flex-row flex-col w-full px-5  mx-auto my-20">
        <div className="w-2/6 h-3 bg-gray-400 mb-3 rounded"></div>
        <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
        <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded"></div>
        <div className="w-4/6 h-3 bg-gray-400 mb-3 rounded"></div>
        <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
        <div className="flex animate-pulse flex-col lg:flex-row w-full lg:px-0 px-3 mt-3">
          <div className="flex-auto lg:w-4/6 pr-2">
            <div className="w-2/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-2/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>

            <div className="w-4/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-2/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-6/6 h-3 bg-gray-400 mb-3 rounded"></div>
          </div>
          <div className="flex-auto lg:w-2/6">
            <div className="w-2/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>

            <div className="w-2/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetailsSkeletonLoader;
