// copy around you:
//after doing all componet of discover page
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// we have to import some component from the component folder
import { Error, Loader, SongCard } from "../components";
//3- import hook:
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  //1- active song state:
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  //4- get songs by country query:
  const { data, isFetching, error } = useGetTopChartsQuery();

  // 5- based on the info we get from the query we will set the loading state to false
  if (isFetching) {
    <Loader title="Loading Top Charts 😀" />;
  }
  if (error) {
    <Error title="Error while fetching  😥" />;
  }
  //2- to fetch the song we have to know where we are:

  // 6- implementation:
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts
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
export default TopCharts;
