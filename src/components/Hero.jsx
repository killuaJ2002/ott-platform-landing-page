import HeroCard from "./HeroCard";
import onePiece from "../assets/images/one-piece.jpeg";
import dandadan from "../assets/images/dandadan.webp";
const Hero = () => {
  return (
    <div className="w-full h-1/2 bg-transparent flex flex-col lg:flex-row gap-3 lg:gap-4 2xl:gap-6 mb-3 2xl:mb-5">
      <HeroCard
        title="One Piece"
        image={onePiece}
        genre={["action", "adventure", "shonen", "fantasy"]}
      />
      <HeroCard
        title="Dandadan"
        image={dandadan}
        genre={["fantasy", "romance", "adventure", "fantasy"]}
      />
    </div>
  );
};

export default Hero;
