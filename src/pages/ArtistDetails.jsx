// it is quite similar to the song details page
//after doing the top chart and top artists, we will do the song details page
// **useParam: it gives us an acces to song id:
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

// hook up the redux:
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  // base on path="/songs/:songid"
  const { id: artistId } = useParams();
  // pull the data from the state:
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // use the query:
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  //! add loading and error handler:(related songs)
  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      {/* // todo: add related songs: */}
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        activeSong={activeSong}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default ArtistDetails;
