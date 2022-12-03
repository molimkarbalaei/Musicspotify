// after sidebar:
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// for swipe through artists we need:
import { Swiper, SwiperSlide } from "swiper/react";
// for swiper to work we need:
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

// for play and pause we need:
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
// custom hook for getting data from api:
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

// todo: create the TopChartCard component:(later)
const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="w-full flex flex-row hover:bg-[#4c426e] items-center py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-white mr-3"> {i + 1}. </h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.images?.coverart}
        alt={song?.title}
      />
      {/* linke the music and artists */}
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-md font-semibold text-white ">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1 ">{song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  // todo: initial some states:
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  // for scroll of the page:
  const divRef = useRef(null);
  // if we want that useref works: we add useEffect:
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
  const handlePlayClick = (song, i) => {
    // we use dispatch to call the action:
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // now we put our states in jsx:
  //  If you pass a ref object to React with <div ref={myRef} />
  // React will set its .current property to the corresponding DOM node whenever that node changes.

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[400px] flex flex-col"
    >
      <div className="w-full flex flex-col">
        {/* //todo: Top Charts: */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-white font-bold text-2xl">Top Charts </h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See More</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {/* we need to map through the topPlays: */}
          {topPlays?.map((song, i) => (
            <TopChartCard
              song={song}
              i={i}
              key={song.key}
              //** add player" */
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>
      {/* //todo: Top artists: */}
      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-white font-bold text-2xl">Top Artist</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See More</p>
          </Link>
        </div>
        {/* // swiper: */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {/* // we need to map through the topPlays: */}
          {/* {topPlays?.slice(0, 5).map((artist) => ( */}
          {topPlays?.map((artist, i) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img
                  src={artist?.images.background}
                  alt="Name"
                  className="w-full rounded-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
