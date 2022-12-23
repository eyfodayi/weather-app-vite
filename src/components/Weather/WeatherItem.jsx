import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const WeatherItem = ({ weather, main, name }) => {
  return (
    <Card className="shadow-sm ">
      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <img
            style={{ backgroundSize: "cover" }}
            src={`http://openweathermap.org/img/wn/${weather?.[0].icon}@4x.png`}
          />

          <Card.Title>
            <h2>{main.temp.toFixed(0)} &#176;</h2>
            <span>{weather[0].main}</span>
          </Card.Title>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h1>{name}</h1>
          <Link to="/Details" state={name}>
            <Button variant="primary">Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherItem;
