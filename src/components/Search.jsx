import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Search = ({ handleChange, val }) => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };
  return (
    <Row className="p-4" style={{ width: "100%" }}>
      <Col>
        <InputGroup className="mb-3  mx-auto gap-4">
          <span
            onClick={() => {
              navigate("/");
              refreshPage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ width: "42px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </span>

          <div className=" d-flex align-items-center mx-auto gap-4">
            <Form.Control
              style={{ minWidth: "200px" }}
              placeholder="Search City"
              aria-label="Search City"
              onChange={(e) => handleChange(e)}
            />
            {val ? (
              <Link to="/Details" state={val}>
                <Button
                  onClick={() => {
                    navigate("/Details");
                    refreshPage();
                  }}
                  disabled={!val}
                >
                  Search
                </Button>
              </Link>
            ) : (
              <Button disabled={!val}>Search</Button>
            )}
          </div>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Search;
