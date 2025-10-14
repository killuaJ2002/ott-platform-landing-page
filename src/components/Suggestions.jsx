import { useState, useRef, useEffect } from "react";
import SuggestionCard from "./SuggestionCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import mha from "../assets/images/mha.png";
import opm from "../assets/images/opm.jpg";
import gachiakuta from "../assets/images/gachiakuta.jpg";
import spyXfamily from "../assets/images/spyxfamily.jpeg";
import drStone from "../assets/images/drStone.jpg";
import yourName from "../assets/images/kimiNoNawa.png";
const Suggestions = () => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollContainerRef = useRef(null);

  const checkScrollPosition = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;

    setIsAtStart(scrollLeft <= 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const handleLeftClick = () => {
    scrollContainerRef.current.scrollBy({
      left: -500, // move left
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    scrollContainerRef.current.scrollBy({
      left: 500, // move right
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();
    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const suggestedAnime = [
    {
      title: "Your Name",
      image: yourName,
    },
    {
      title: "My Hero Academia",
      image: mha,
    },
    {
      title: "One Punch Man",
      image: opm,
    },
    {
      title: "Gachiakuta",
      image: gachiakuta,
    },
    {
      title: "SpyxFamily",
      image: spyXfamily,
    },
    {
      title: "Dr Stone",
      image: drStone,
    },
  ];

  return (
    <div className="flex-1 bg-trasparent flex flex-col gap-4">
      <h2 className="text-mainWhite text-2xl">Suggested for you</h2>
      <div className="w-full h-full bg-transparent relative">
        <div
          className="flex gap-6 overflow-x-hidden scroll-smooth w-full h-full"
          ref={scrollContainerRef}
        >
          {suggestedAnime.map((anime) => (
            <SuggestionCard
              key={anime.title}
              title={anime.title}
              image={anime.image}
            />
          ))}
        </div>
        {!isAtStart && (
          <button
            onClick={() => handleLeftClick()}
            className="absolute left-0 top-0 text-mainWhite h-full"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
        )}
        {!isAtEnd && (
          <button
            onClick={() => handleRightClick()}
            className="absolute right-0 top-0 text-mainWhite h-full"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
