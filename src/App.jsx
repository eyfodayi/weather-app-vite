import React, { useEffect, useState } from "react";
import { getWeathersData } from "./state/actions/weatherAction";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./components/Search";
const App = () => {
  const [searchVal, setSearchVal] = useState("");
  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeathersData());
  }, []);
  return (
    <div className="App">
      <Container
        className="d-flex flex-column mx-auto"
        style={{ minHeight: "100vh" }}
      >
        <Search handleChange={handleChange} val={searchVal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
