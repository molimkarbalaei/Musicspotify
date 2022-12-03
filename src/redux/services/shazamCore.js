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
    // add based on genre:
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),

    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    //  if we know more about the singer so we can have more related songs:
    // artist details of that specific song:
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
    // get artist details:
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    // get song based on the country:
    getSongsByCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    // get song based on search:
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});
// export as a hook
export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
