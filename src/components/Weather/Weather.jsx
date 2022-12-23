import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SpinnerItem from "../Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherItem from "./WeatherItem";
const Weather = () => {
  const { data, isLoading, isError } = useSelector((state) => state.weathers);

  if (isLoading) return <SpinnerItem />;
  if (isError) return <h3 className="vertical-center ">Something is wrong!</h3>;
  console.log(data, isLoading, isError);
  return (
    <div>
      <Row md={2} xl={2} xxl={3}>
        {data?.map((item) => (
          <Col key={item.id} className="mb-2">
            <WeatherItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Weather;
