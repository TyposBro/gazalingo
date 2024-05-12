import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import store from "./context/";

import GlobalStyles from "styles/";

import { Nav } from "components/";
import { SwiperComponent } from "exp/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <GlobalStyles />
      <SwiperComponent />
      <Nav />
    </StyledEngineProvider>
  </Provider>
);
