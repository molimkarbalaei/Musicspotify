// main file for fetching data: api calls:
// from rapidaip:
// come from reduxtoolkit:
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "9c6b4385a5msh09fcfeb7b6f9b3ap130506jsn800dfd4e2238",
//     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//   },
// };

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// from shazam:
// after that we import 2 thing that we need from reduxtoolkit:
export const shazamCoreApi = createApi({
  // api needs a reducer path: name of api:
  reducerPath: "shazamCoreApi",
  // base query: to fetch data:
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "9c6b4385a5msh09fcfeb7b6f9b3ap130506jsn800dfd4e2238"
      );

      return headers;
    },
  }),
  //endpoints: to fetch data:
  endpoints: (builder) => ({
    // we build all of the end points of api that we want call:
    getTopCharts: builder.query({
      // query: to fetch data:
      query: () => "/charts/world",
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery } = shazamCoreApi;
