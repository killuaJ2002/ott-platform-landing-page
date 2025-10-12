import { ListFilter } from "lucide-react";
import SearchBox from "./SearchBox";
const Navbar = () => {
  return (
    <div className="bg-transparent flex flex-col justify-between gap-7">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-mainWhite text-4xl">Good Morning, Kalpa</h2>
          <p className="text-mainWhite font-light">
            25+ new ongoing anime for you
          </p>
        </div>
        <div className="h-10 w-10 rounded-full backdrop-blur-md bg-white/20 flex justify-center items-center">
          <ListFilter className="text-mainWhite" />
        </div>
      </div>
      <div className="flex justify-between">
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
