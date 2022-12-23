import React from "react";

import { Col, Row, Table } from "react-bootstrap";
import SpinnerItem from "../Spinner";

const WeatherDetails = ({ weather, name, main, wind, isLoading, isError }) => {
  if (isLoading) return <SpinnerItem />;
  if (isError) return <h3 className="vertical-center ">Something is wrong!</h3>;
  return (
    <div style={{ width: "75vw", minHeight: "100vh" }}>
      <Row>
        <Col className="d-flex align-items-center">
          <img
            src={`http://openweathermap.org/img/wn/${weather?.[0].icon}@4x.png`}
            alt=""
          />
        </Col>
        <Col>
          <div className="d-flex gap-4 align-items-end justify-content-center mb-4">
            <h1>{name}</h1>
            <h2>{main?.temp.toFixed(0)} &#176;</h2>
            <h3>{weather?.[0].main}</h3>
          </div>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Feels Like</th>
                <td>{main?.feels_like.toFixed(0)}&#176;</td>
              </tr>
              <tr>
                <th>Humidity</th>
                <td>{main?.humidity}%</td>
              </tr>
              <tr>
                <th>Winds</th>
                <td>{wind?.speed.toFixed(0)} MPH</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default WeatherDetails;
