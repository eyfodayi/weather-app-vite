import axios from "axios";
import api from "../constants";
import { dataStatus, weatherTypes } from "./actionTypes";

const cityNames = [
  "Baku",
  "London",
  "Paris",
  "New York City",
  "Tokyo",
  "Dubai",
  "Barcelona",
  "Rome",
  "Madrid",
];

export const getWeathersData = () => (dispatch) => {
  try {
    dispatch({
      type: dataStatus.IS_LOADING,
    });
    cityNames.map(async (cityName) => {
      const { data } = await axios.get(
        `${api}&units=metric&temp=celc&q=${cityName}`
      );
      dispatch({
        type: weatherTypes.ADD_CITIES_WEATHER,
        payload: data,
      });
    });
  } catch (error) {
    dispatch({
      type: dataStatus.IS_ERROR,
      payload: error.message || "Something is wrong!",
    });
  }
};

export const getWeatherData = (cityName) => async (dispatch) => {
  try {
    dispatch({
      type: dataStatus.IS_LOADING,
    });

    const { data } = await axios.get(
      `${api}&units=metric&temp=celc&q=${cityName}`
    );

    dispatch({
      type: weatherTypes.ADD_CITY_WEATHER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: dataStatus.IS_ERROR,
      payload: error.message || "Something is wrong!",
    });
  }
};
