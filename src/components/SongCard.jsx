//  we write it once and use it 50 times.
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//player functionality:
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

// we pass index and key as props:

const SongCard = ({ i, song, isPlaying, activeSong, data }) => {
  // create the handlePlayPause function:
  const handlePauseClick = () => {};
  // create the handlePlayClick function:
  const handlePlayClick = () => {};

  // which song is currently active: => go to  discover page

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ">
      <div className="relative w-full h-56 group ">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            // if the song is playing is the song is showing:
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          {/* play or pause the song: */}
          {/* we have to pass some props to work the player: */}
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} />
      </div>
      {/* Add title and subtitle: */}
      <div className="flex flex-col mt-4">
        <p className="text-lg text-white font-semibold truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm text-gray-300 truncate mt-1">
          <Link
            to={
              song.artist
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
