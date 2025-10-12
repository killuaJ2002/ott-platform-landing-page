import HeroCard from "./HeroCard";
import onePiece from "../assets/images/one-piece.jpeg";
import dandadan from "../assets/images/dandadan.webp";
const Hero = () => {
  return (
    <div className="w-full h-1/2 bg-transparent flex gap-6">
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
