//after doing the top chart and top artists, we will do the song details page
// **useParam: it gives us an acces to song id:
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

// import some features:
import { setActiveSong, playPause } from "../redux/features/playerSlice";
// hook up the redux:
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  // base on path="/songs/:songid"
  const { songid } = useParams();
  // pull the data from the state:
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // use the query:
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        {/* // todo: lop the song data */}
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1"> {line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry no lyrics found for this song
            </p>
          )}
        </div>
      </div>
      {/* // todo: add related songs: */}
      <RelatedSongs />
    </div>
  );
};

export default SongDetails;
