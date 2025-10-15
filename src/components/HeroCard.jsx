import { Play, Star } from "lucide-react";
const HeroCard = ({ image, title, genre }) => {
  return (
    <div className="relative rounded w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="anime-banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 h-1/2 w-full z-10 p-2 lg:p-4 2xl:p-6 flex flex-col items-start justify-between">
        <div className="flex flex-col">
          <h1 className="text-mainWhite text-2xl lg:text-5xl 2xl:text-6xl lg:font-semibold">
            {title}
          </h1>
          <p className="text-mainWhite text-[8px] lg:text-xs font-light">
            {genre.join(" • ")}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="text-mainWhite bg-orange-500 h-6 lg:h-9 2xl:h-10 p-1 pl-0 lg:p-2 lg:pl-1 rounded lg:rounded-md flex justify-between items-center">
            <Play className="h-3 lg:h-4 2xl:h-5" />
            <p className="text-[10px] lg:text-sm 2xl:text-base font-light lg:font-normal">
              Start Watching
            </p>
          </button>
          <button className="text-orange-500 border border-orange-500 rounded lg:rounded-md h-6 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 flex justify-center items-center">
            <Star className="h-4 lg:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
