import { Mic } from "lucide-react";
const SearchBox = () => {
  return (
    <div className="bg-[#8fb8e8]/50 backdrop-blur-md w-full lg:h-10 2xl:h-12 rounded-full flex justify-between items-center p-2 gap-3">
      <div className="lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 rounded-full bg-[rgba(255,255,255,0.25)] flex justify-center items-center">
        <Mic className="lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-mainWhite" />
      </div>
      <input
        type="text"
        placeholder="Search anime..."
        className="w-full px-2 bg-transparent text-mainWhite lg:text-sm 2xl:text-base placeholder:text-mainWhite 2xl:placeholder:text-base lg:placeholder:text-sm
 focus:outline-none text-lg"
      />
      <button className="bg-[rgba(255,255,255,0.25)] p-2 lg:h-6 2xl:h-8 lg:w-20 2xl:w-24 rounded-full flex justify-center items-center text-mainWhite lg:text-sm 2xl:text-base">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
