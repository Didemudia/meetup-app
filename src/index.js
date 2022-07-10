import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import {FavouriteContext} from './store/favourite-context';
import { FavouriteContextProvider } from "./store/favourite-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteContextProvider>
);
