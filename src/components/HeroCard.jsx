import { Play, Star } from "lucide-react";
const HeroCard = ({ image, title, genre }) => {
  return (
    <div className="relative rounded-2xl w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="anime-banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 z-10 grid p-6">
        <div className="flex flex-col">
          <h1 className="text-mainWhite text-6xl font-semibold">{title}</h1>
          <p className="text-mainWhite text-sm font-light">
            {genre.join(" • ")}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="text-mainWhite bg-orange-500 h-10 p-2 rounded-md flex justify-between items-center">
            <Play className="h-5" />
            <p>Start Watching</p>
          </button>
          <button className="text-orange-500 border border-orange-500 rounded-md h-10 w-10 flex justify-center items-center">
            <Star />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
