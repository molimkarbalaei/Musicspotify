//after adding songcards
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle className="text-gray-300" size={35} onClick={handlePause} />
  ) : (
    <FaPlayCircle onClick={handlePlay} size={35} className="text-gray-300" />
  );
// if we want that those handle work we have to go to the songcard
export default PlayPause;
