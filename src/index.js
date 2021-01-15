import React from "react";
import { render } from "react-dom";
import "./index.css";
import Contador from "./Contador";
import Titulos from "./Titulos";

render(
  <React.StrictMode>
    <Titulos />
  </React.StrictMode>,
  document.getElementById("root")
);
