import { FC } from "react";

const PopularCardSkeletonLoader: FC = () => {
  return (
    <div className="relative flex flex-wrap flex-none content-end bg-cover bg-center bg-center bg-no-repeat shadow-md border border-gray-200 rounded-xl w-72 h-96 bg-gray-400  mb-3 animate-pulse"></div>
  );
};

const PopularCardListSkeletonLoader: FC = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <PopularCardSkeletonLoader key={i} />
      ))}
    </>
  );
};

export default PopularCardListSkeletonLoader;
