import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.scss";
import RootRouter from "./Components/RootRouter";
import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router-dom";
import History from "./Components/History";

ReactDOM.render(
  <React.StrictMode>
    <Router history={History}>
      <RootRouter />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
