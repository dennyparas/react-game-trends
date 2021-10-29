import { FC } from "react";

const ProfileCardSkeletonLoader: FC = () => {
  return (
    <div className="flex-1 mt-24 bg-white relative shadow-md rounded-2xl  w-full p-4 animate-pulse">
      <div className="flex justify-center">
        <div className="rounded-full bg-gray-400 object-cover -top-20  mx-auto absolute w-32 h-32"></div>
      </div>

      <div className="mt-16">
        <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded mx-auto"></div>
        <div className="w-4/6 h-3 bg-gray-400 mb-3 rounded mx-auto"></div>

        <div className="w-full">
          <div className="w-4/6 h-3 bg-gray-400 mb-3 rounded mx-auto my-5"></div>
          <div className="text-center border-t border-gray-200 py-2">
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded mx-auto border-t border-gray-200"></div>
          </div>
          <div className="text-center border-t border-gray-200 py-2">
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded mx-auto border-t border-gray-200"></div>
          </div>
          <div className="text-center border-t border-gray-200 py-2">
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded mx-auto border-t border-gray-200"></div>
          </div>
          <div className="text-center border-t border-gray-200 py-2">
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded mx-auto border-t border-gray-200"></div>
          </div>
          <div className="text-center border-t border-gray-200 py-2">
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded mx-auto border-t border-gray-200"></div>
          </div>
          <div className="text-center border-t border-gray-200 py-2">
            <div className="w-5/6 h-3 bg-gray-400 mb-3 rounded mx-auto border-t border-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCardListSkeletonLoader: FC = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <ProfileCardSkeletonLoader key={i} />
      ))}
    </>
  );
};

export default ProfileCardListSkeletonLoader;
