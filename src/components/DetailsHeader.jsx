// we use it for both artist detail and song detail:
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, songData, artistData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return (
    <div className="relative w-full flex flex-col ">
      {/* for that black triangule */}
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className=" absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artist.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart
          }
          alt="art"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        {/* //todo: for the info:
         */}

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {/* link the artist */}
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          {/* genrers: */}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
