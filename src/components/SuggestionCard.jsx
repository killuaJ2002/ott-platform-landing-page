const SuggestionCard = ({ title, image }) => {
  return (
    <div className="min-w-40 2xl:min-w-48 h-full rounded-md bg-white/20 flex flex-col p-2 gap-2">
      <div
        className="h-[80%] lg:h-[75%] w-full rounded bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <h3 className="text-sm lg:text-base text-mainWhite">{title}</h3>
        <p className="text-xs lg:text-sm font-light text-white/70">Sub | Dub</p>
      </div>
    </div>
  );
};

export default SuggestionCard;
