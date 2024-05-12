import { createSlice } from "@reduxjs/toolkit";
import { challenge, console, profile, notification, gift } from "assets/icons";
import { flushSync } from "react-dom";

const data = [
  {
    id: 0,
    icon: gift,
    path: "quest",
    alt: "quest",
  },
  {
    id: 1,
    icon: challenge,
    path: "rank",
    alt: "challenge",
  },
  {
    id: 2,
    icon: console,
    path: "",
    alt: "console",
  },
  {
    id: 3,
    icon: profile,
    path: "profile",
    alt: "profile",
  },
  {
    id: 4,
    icon: notification,
    path: "notification",
    alt: "notification",
  },
];

export const routerSlice = createSlice({
  name: "router",
  initialState: {
    routes: data,
    current: data[2],
  },
  reducers: {
    setRoute(state, { payload }) {
      const { id } = payload;
      state.current = state.routes[id];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRoute } = routerSlice.actions;

export default routerSlice.reducer;
