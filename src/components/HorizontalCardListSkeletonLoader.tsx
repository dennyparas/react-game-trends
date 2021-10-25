import { FC } from "react";

const HorizontalCardSkeletonLoader: FC = () => {
  return (
    <div className="bg-white shadow-md  rounded-2xl p-3 flex-1 ">
      <div className="flex-none lg:flex animate-pulse">
        <div className="flex-auto h-full w-full lg:h-40 lg:w-36   lg:mb-0 mb-3 relative">
          <div className="w-full h-40 bg-gray-400  rounded-xl"></div>
        </div>
        <div className="flex w-full lg:w-9/12 flex-col lg:ml-3 ">
          <div className="w-3/6 h-3 bg-gray-400 rounded mb-5 mt-2"></div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col flex-grow">
              <div className="w-1/2 h-3 bg-gray-400 mb-3 rounded"></div>
              <div className="w-2/3 h-3 bg-gray-400 mb-5 rounded"></div>
            </div>
          </div>
          <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
          <div className="w-full h-3 bg-gray-400 mb-3 rounded"></div>
          <div className="w-3/6 h-3 bg-gray-400 mb-3 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const HorizontalCardListSkeletonLoader: FC = () => {
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => (
        <HorizontalCardSkeletonLoader key={i} />
      ))}
    </>
  );
};

export default HorizontalCardListSkeletonLoader;
