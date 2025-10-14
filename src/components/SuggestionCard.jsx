const SuggestionCard = ({ title, image }) => {
  return (
    <div className="min-w-48 h-full rounded-xl bg-white/20 flex flex-col p-2 gap-1">
      <div
        className="h-[75%] w-full rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <h3 className="text-mainWhite">{title}</h3>
        <p className="text-sm font-light text-white/70">Sub | Dub</p>
      </div>
    </div>
  );
};

export default SuggestionCard;
