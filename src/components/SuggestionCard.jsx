import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SuggestionCard = ({ title, image }) => {
  return (
    <div className="min-w-40 2xl:min-w-48 h-full rounded-md bg-white/20 flex flex-col p-2 gap-2">
      <div className="max-h-[45%] w-full rounded bg-cover bg-center bg-black overflow-hidden">
        <LazyLoadImage
          src={image}
          alt="suggestion-card-image"
          effect="blur" // other options: "opacity", "black-and-white"
          placeholderSrc="/tiny-blur.jpg" // optional low-res preview
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div>
        <h3 className="text-sm lg:text-base text-mainWhite">{title}</h3>
        <p className="text-xs lg:text-sm font-light text-white/70">Sub | Dub</p>
      </div>
    </div>
  );
};

export default SuggestionCard;
