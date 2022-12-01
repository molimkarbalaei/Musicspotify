//after doing all componet of discover page
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// we have to import some component from the component folder
import { Error, Loader, SongCard } from "../components";
//3- import hook:
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  //1- loading state:
  const [loading, setLoading] = useState(true);
  //1- active song state:
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  //4- get songs by country query:
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  // 5- based on the info we get from the query we will set the loading state to false
  if (isFetching && loading) {
    <Loader title="Loading soongs around you 😀" />;
  }
  if (error && country) {
    <Error title="Error while fetching songs around you 😥" />;
  }
  //2- to fetch the song we have to know where we are:
  //** we call it when ever country change */
  console.log(country);
  useEffect(() => {
    // todo: fetch the api from : geo.ipify.org
    // at_wBpuYc21esWmLR4go7RwkTg718L4G
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_wBpuYc21esWmLR4go7RwkTg718L4G`
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  // 6- implementation:
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You <span className="font-black">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* map the data: */}
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};
export default AroundYou;
