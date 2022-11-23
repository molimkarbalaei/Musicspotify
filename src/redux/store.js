// simple set up funstion:
import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
//bring in the reducer: shazamCoreApi.reducer
import { shazamCoreApi } from "./services/shazamCore";

export const store = configureStore({
  reducer: {
    // in every reduxttoolkit we can see:
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  // add the middleware:
  // to ask request to the api: and get the data back:(response)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

// focus on new functionality-> implement to add in redux store
// to fetch our songs: we create new folder:

// const loggingMiddleware = function(store) {
//   // Called when calling applyMiddleware so
//   // our middleware can have access to the store

//   return function(next) {
//     // next is the following action to be run
//     // after this middleware

//     return function(action) {
//       // finally, this is where our logic lives for
//       // our middleware.
//     }
//   }
// }
