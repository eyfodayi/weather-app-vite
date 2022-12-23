import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getWeatherData } from "../state/actions/weatherAction";
import Search from "../components/Search";
import WeatherDetails from "../components/Weather/WeatherDetails";

const Details = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { details, isLoading, isError } = useSelector(
    (state) => state.weathers
  );
  console.log(state);
  useEffect(() => {
    dispatch(getWeatherData(state));
  }, []);

  return (
    <WeatherDetails isLoading={isLoading} isError={isError} {...details} />
  );
};

export default Details;
