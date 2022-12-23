import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./state/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
