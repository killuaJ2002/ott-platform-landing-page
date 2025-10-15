import { Mic } from "lucide-react";
const SearchBox = () => {
  return (
    <div className="bg-[#8fb8e8]/50 backdrop-blur-md w-full h-8 lg:h-10 2xl:h-12 rounded-full flex justify-between items-center p-1 lg:p-2 gap-2 lg:gap-3">
      <div className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 rounded-full bg-[rgba(255,255,255,0.25)] flex justify-center items-center">
        <Mic className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-mainWhite" />
      </div>
      <input
        type="text"
        placeholder="Search anime..."
        className="w-full px-1 lg:px-2 bg-transparent text-mainWhite text-xs lg:text-sm 2xl:text-base placeholder:text-mainWhite placeholder:text-xs 2xl:placeholder:text-base lg:placeholder:text-sm
 focus:outline-none"
      />
      <button className="bg-[rgba(255,255,255,0.25)] p-2 h-5 w-14 lg:h-6 2xl:h-8 lg:w-20 2xl:w-24 rounded-full flex justify-center items-center text-mainWhite text-xs lg:text-sm 2xl:text-base font-light lg:font-normal">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
