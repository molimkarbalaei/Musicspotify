//  we write it once and use it 50 times.
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//player functionality:
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

// we pass index and key as props:

const SongCard = ({ i, song }) => {
  //hardcoded the active song:
  const activeSong = "Test";
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
          <PlayPause />
        </div>
        <img alt="song_img" src={song.images?.coverart} />
      </div>
      {/* Add title and subtitle: */}
    </div>
  );
};

export default SongCard;
