import { useNavigate } from "react-router-dom";
// bring track props from topArtists.jsx
const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => {
        navigate(`/artists/${track?.artists[0].adamid}`);
      }}
    >
      <img
        alt="artist"
        src={track?.images?.coverart}
        className="w-full h-56 rounded-lg"
      />
      <div className="text-white font-semibold text-lg mt-2">
        {track?.subtitle}
      </div>
    </div>
  );
};

export default ArtistCard;
