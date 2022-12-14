// first page and main page:
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
//3- after adding the API: (shazamCore)
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
// 5- which song is currently active:
import { useSelector, useDispatch } from "react-redux";
// lastly later we import :
import { selectGenreListId } from "../redux/features/playerSlice";
// add later for different genres:
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";

//! we use Distpach to modify the state of the store: IMPORTANT*****
//** distpach => distpach an action-> get that specific genre
//** selector -> fetch that modified state from the store

const Discover = () => {
  // 5- which song is currently active: we use this hooks:
  const dispatch = useDispatch();
  // To use specific data from the store, we use the useSelector hook: cake
  //cake => cake.vanila
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );

  // we can call it(useGetTopChartsQuery => api) like other hooks:
  // we get back 3 different things:
  // a- data: the data we get back from the api => result of api call
  // b- isFetching: boolean => if we are fetching data or not
  // c- error: if there is an error
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );
  //do it for all genres:
  //value is genre id
  // const genreTitle = "Pop";
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  // 4- for lodaidng:
  if (isFetching) {
    return <Loader title="Loading Songs..." />;
  }
  if (error) {
    return <Error title="Error" />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        {/* 1- for choosing: */}
        {/*  if we want this one works  we have to use distpach functionality*/}
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId || "pop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 "
        >
          {/* map from genres: */}
          {/* each option has key and value */}
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      {/* 2- wrapper for songs: display the songs:*/}
      {/* from  API   */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            // specific index:
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;

// we want to fetch data from shazam api:
