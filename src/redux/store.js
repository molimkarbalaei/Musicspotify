// simple set up funstion:
import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

// focus on new functionality-> implement to add in redux store
// to fetch our songs: we create new folder:
