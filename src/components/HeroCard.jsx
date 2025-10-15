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
      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 z-10 lg:p-4 2xl:p-6 flex flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="text-mainWhite lg:text-5xl 2xl:text-6xl font-semibold">
            {title}
          </h1>
          <p className="text-mainWhite text-xs font-light">
            {genre.join(" • ")}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="text-mainWhite bg-orange-500 lg:h-9 2xl:h-10 p-2 rounded-md flex justify-between items-center">
            <Play className="lg:h-4 2xl:h-5" />
            <p className="lg:text-sm 2xl:text-base">Start Watching</p>
          </button>
          <button className="text-orange-500 border border-orange-500 rounded-md lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 flex justify-center items-center">
            <Star />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
