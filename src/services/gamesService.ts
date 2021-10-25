import axios from "axios";
import { GamesResults } from "../types/gameTypes";
import { formatDate, addSubtractMonths } from "./../utils/dateUtil";

export const rootUrl = "https://api.rawg.io/api/";
const APP_KEY = process.env.REACT_APP_GAME_APP_KEY;

export const fetchGames = async (url: string): Promise<GamesResults> => {
  try {
    const response = await axios.get<GamesResults>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPopularGames = async (): Promise<GamesResults> => {
  try {
    const currentDate = formatDate(new Date());
    const rangeDate = addSubtractMonths(new Date(), -1);
    const dates = `${rangeDate},${currentDate}`;
    const response = await axios.get<GamesResults>(
      `${rootUrl}games?dates=${dates}&ordering=-added&key=${APP_KEY}&page_size=10`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAverageRateGames = async () => {
  try {
    const dates = `${formatDate(new Date())}, ${addSubtractMonths(
      new Date(),
      -1
    )}`;
    const response = await axios.get(
      `${rootUrl}games?dates=${dates}&ordering=-rating&key=${APP_KEY}&page_size=10`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getRecentlyReleaseGames = async () => {
  try {
    const dates = `${formatDate(new Date())}, ${addSubtractMonths(
      new Date(),
      -1
    )}`;
    const response = await axios.get(
      `${rootUrl}games?dates=${dates}&ordering=released&key=${APP_KEY}&page_size=10`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAnticipatedGames = async () => {
  try {
    const dates = `${formatDate(new Date())}, ${addSubtractMonths(
      new Date(),
      2
    )}`;
    const response = await axios.get(
      `${rootUrl}games?dates=${dates}&ordering=released&key=${APP_KEY}&page_size=10`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// const currentDate = formatDate(new Date());
// const rangeDate = addSubtractMonths(new Date(), -1);
// const dates = `${rangeDate}, ${currentDate}`;

// const currentAnticipatedDate = formatDate(new Date());
// const rangeAnticipatedDate = addSubtractMonths(new Date(), 1);
// const anticipatedDates = `${rangeAnticipatedDate}, ${currentAnticipatedDate}`;

// export const getHomeGames = async () => {
//   try {
//     const popularGames = axios.get(
//       `${rootUrl}games?dates=${dates}&ordering=-added&key=${APP_KEY}&page_size=10`
//     );

//     const averageRateGames = axios.get(
//       `${rootUrl}games?dates=${dates}&ordering=-rating&key=${APP_KEY}&page_size=10`
//     );

//     const recentlyReleaseGames = axios.get(
//       `${rootUrl}games?dates=${dates}&ordering=released&key=${APP_KEY}&page_size=10`
//     );

//     const anticipatedGames = axios.get(
//       `${rootUrl}games?dates=${anticipatedDates}&ordering=-added&key=${APP_KEY}&page_size=10`
//     );

//     await axios.all([
//       popularGames,
//       averageRateGames,
//       recentlyReleaseGames,
//       anticipatedGames,
//     ]);

//     await axios.spread((...responses) => {
//       return responses;
//     });
//   } catch (error) {
//     throw error;
//   }
// };
