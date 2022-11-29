// import the play bar
import SongBar from "./SongBar";
const RelatedSongs = ({
  data,
  activeSong,
  isPlaying,
  handlePlayClick,
  handlePauseClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs</h1>
    <div className="flex flex-col mt-6 w-full  ">
      {/* map the data: */}
      {data?.map((song, i) => (
        <SongBar
          // song.key because later by choosing the artist we have related songs for it

          key={`${artistId}-${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          activeSong={activeSong}
          isPlaying={isPlaying}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;

//  if we know more about the singer so we can have more related songs:
// artist details of that specific song:
// we go to shazam core and add one or api end point.
