import { useState, useRef, useEffect } from "react";
import SuggestionCard from "./SuggestionCard";
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

  return (
    <div className="flex-1 bg-trasparent flex flex-col gap-4">
      <h2 className="text-mainWhite text-2xl">Suggested for you</h2>
      <div className="w-full h-full bg-yellow-400 relative">
        <div
          className="flex gap-2 overflow-x-hidden scroll-smooth w-full h-full"
          ref={scrollContainerRef}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <SuggestionCard key={i} number={i + 1} />
          ))}
        </div>
        {!isAtStart && (
          <button
            onClick={() => handleLeftClick()}
            className="absolute left-0 top-1/2"
          >
            left arrow
          </button>
        )}
        {!isAtEnd && (
          <button
            onClick={() => handleRightClick()}
            className="absolute right-0 top-1/2"
          >
            right arrow
          </button>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
