import { FC } from "react";

const VerticalCardSkeletonLoader: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-3 flex-1 w-full ">
      <div className="flex-grow animate-pulse">
        <div className="flex h-full w-full lg:mb-0 mb-3">
          <div className="w-full h-40 bg-gray-400  rounded-xl"></div>
        </div>
        <div className="flex w-full  flex-col  ">
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

const VerticalCardListSkeletonLoader: FC = () => {
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => (
        <VerticalCardSkeletonLoader key={i} />
      ))}
    </>
  );
};

export default VerticalCardListSkeletonLoader;
