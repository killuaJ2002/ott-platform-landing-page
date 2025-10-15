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
import hxh from "../assets/images/hunterxhunter.jpg";
import dn from "../assets/images/dn.jpg";
import sl from "../assets/images/sl.jpg";
import aot from "../assets/images/aot.jpg";
import konosuba from "../assets/images/konosuba.png";
import ff from "../assets/images/fireForce.jpeg";
import csm from "../assets/images/csm.jpg";
import naruto from "../assets/images/naruto.png";
import haikyuu from "../assets/images/haikyuu.jpg";
import hni from "../assets/images/hajimeNoIppo.jpg";
import cb from "../assets/images/cowboyBebop.png";
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
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.5; // 80% of visible width
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const handleRightClick = () => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.5;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
      title: "Spy x Family",
      image: spyXfamily,
    },
    {
      title: "Dr Stone",
      image: drStone,
    },
    {
      title: "Hunter x Hunter",
      image: hxh,
    },
    {
      title: "Death Note",
      image: dn,
    },
    {
      title: "Solo Levelling",
      image: sl,
    },
    {
      title: "Attack On Titan",
      image: aot,
    },
    {
      title: "Konosuba",
      image: konosuba,
    },
    {
      title: "Fire Force",
      image: ff,
    },
    {
      title: "Chainsaw Man",
      image: csm,
    },
    {
      title: "Naruto",
      image: naruto,
    },
    {
      title: "Haikyuu",
      image: haikyuu,
    },
    {
      title: "Hajime No Ippo",
      image: hni,
    },
    {
      title: "Cowboy Bebop",
      image: cb,
    },
  ];

  return (
    <div className="flex-1 bg-trasparent flex flex-col gap-3 2xl:gap-4">
      <h2 className="text-mainWhite lg:text-xl 2xl:text-2xl">
        Suggested for you
      </h2>
      <div className="w-full h-full bg-transparent relative">
        <div
          className="flex gap-2 lg:gap-4 2xl:gap-6 overflow-x-hidden scroll-smooth w-full h-full"
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
            <ChevronLeft className="lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" />
          </button>
        )}
        {!isAtEnd && (
          <button
            onClick={() => handleRightClick()}
            className="absolute right-0 top-0 text-mainWhite h-full"
          >
            <ChevronRight className="lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
