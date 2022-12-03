// lastly we are focusing on the search bar:
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  //initall useNavigate hook: (later we added this)
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  // search term mire be search.jsx ezafe mikonim:

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    // add search bar:
    <form
      onClick={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        Are you Searching a song❓
      </label>
      <div className="flex flex-row justify-start items-center ">
        {/* insert a search icon */}
        <FiSearch className="w-5 h-5 ml-4" />
        {/* add a search input field */}
        <input
          name="search-field"
          placeholder="Search"
          autoComplete="off"
          id="search-field"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" flex-1 bg-transparent border-none outline-none placeholder-bg-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};
export default Searchbar;
