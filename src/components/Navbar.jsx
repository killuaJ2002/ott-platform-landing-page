import { ListFilter } from "lucide-react";
import SearchBox from "./SearchBox";
const Navbar = () => {
  return (
    <div className="bg-transparent flex flex-col justify-between lg:gap-6 2xl:gap-7">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-mainWhite lg:text-3xl 2xl:text-4xl">
            Good Morning, Kalpa
          </h2>
          <p className="text-mainWhite font-light">
            25+ new ongoing anime for you
          </p>
        </div>
        <div className="lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full backdrop-blur-md bg-white/20 flex justify-center items-center">
          <ListFilter className="text-mainWhite lg:h-5 2xl:h-6" />
        </div>
      </div>
      <div className="flex justify-between">
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
