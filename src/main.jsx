import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { HashRouter } from "react-router-dom";
import { AppContextProviver } from "./context/appContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AppContextProviver>
        <App />
      </AppContextProviver>
    </HashRouter>
  </React.StrictMode>
);
