// copy top charts:
// we have to import some component from the component folder
import { ArtistCard, Loader, Error } from "../components";
// import hook:
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  // get songs by country query:
  const { data, isFetching, error } = useGetTopChartsQuery();

  // based on the info we get from the query we will set the loading state to false
  if (isFetching) {
    <Loader title="Loading Top Charts 😀" />;
  }
  if (error) {
    <Error title="Error while fetching  😥" />;
  }

  // implementation:
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* map the data: */}
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
