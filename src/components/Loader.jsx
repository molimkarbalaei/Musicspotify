//after adding isFetching and error we have to add loader and error components:
import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="w-full justify-center flex flex-col items-center">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
