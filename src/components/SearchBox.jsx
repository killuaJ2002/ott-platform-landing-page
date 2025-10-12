import { Mic } from "lucide-react";
const SearchBox = () => {
  return (
    <div className="bg-[#8fb8e8]/50 backdrop-blur-md w-full h-12 rounded-full flex justify-between items-center p-2 gap-3">
      <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.25)] flex justify-center items-center">
        <Mic className="w-4 h-4 text-mainWhite" />
      </div>
      <input
        type="text"
        placeholder="Search anime..."
        className="w-full px-2 bg-transparent text-mainWhite placeholder:text-mainWhite focus:outline-none text-lg"
      />
      <button className="bg-[rgba(255,255,255,0.25)] p-2 h-8 w-24 rounded-full flex justify-center items-center text-mainWhite">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
