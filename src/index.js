import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
  //</React.StrictMode>
);
