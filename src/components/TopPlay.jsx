// after sidebar:
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// for swipe through artists we need:
import { Swiper, SwiperSlide } from "swiper/react";
// ! for swiper to work we need:
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

// for play and pause we need:
import Playpause from "./Playpause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
// custom hook for getting data from api:
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopPlay = () => {
  // todo: initial some states:
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  // for scroll of the page:
  const divRef = useRef(null);
  // *** if we want that useref works: we add useEffect:
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
    // we remove the independency so it will run always:
  });

  // todo: for top songs: 'data' is 50 most popular songs:
  const topPlays = data?.slice(0, 5);

  // todo: play or pause functionallity: bring from songCard:
  const handlePauseClick = () => {
    // we use dispatch to call the action:
    dispatch(playPause(false));
  };
  // create the handlePlayClick function:
  const handlePlayClick = () => {
    // we use dispatch to call the action:
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // now we put our states in jsx:
  // !  If you pass a ref object to React with <div ref={myRef} />
  // !React will set its .current property to the corresponding DOM node whenever that node changes.

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-full flex flex-col"
    >
      asdfg
    </div>
  );
};

export default TopPlay;
