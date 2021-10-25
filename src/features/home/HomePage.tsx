import { FC } from "react";
import HomeAnticipatedGamesSection from "./HomeAnticipatedGamesSection";
import HomeAverageRateGamesSection from "./HomeAverageRateGamesSection";
import HomePopularGamesSection from "./HomePopularGamesSection";
import HomeRecentlyReleaseGamesSection from "./HomeRecentlyReleaseGamesSection";

const HomePage: FC = () => {
  return (
    <div className="container mt-5 mb-10 mx-auto px-5 xl:px-0">
      <HomePopularGamesSection />
      <HomeRecentlyReleaseGamesSection />
      <HomeAverageRateGamesSection />
      <HomeAnticipatedGamesSection />
    </div>
  );
};

export default HomePage;
