import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { AppContextWrapper } from "./Context/Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextWrapper>
);
