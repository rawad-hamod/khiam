import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.js";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store/store";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

let theme = createTheme();
theme = responsiveFontSizes(theme);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
