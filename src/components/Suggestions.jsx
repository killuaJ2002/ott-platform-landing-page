import SuggestionCard from "./SuggestionCard";
const Suggestions = () => {
  return (
    <div className="flex-1 bg-trasparent flex flex-col gap-4">
      <h2 className="text-mainWhite text-2xl">Suggested for you</h2>
      <div className="w-full h-full bg-yellow-400 relative flex gap-2">
        <button>left arrow</button>
        <div className="flex overflow-x-auto scroll-smooth gap-2">
          {Array.from({ length: 20 }, (_, i) => (
            <SuggestionCard key={i} number={i + 1} />
          ))}
        </div>
        <button>right arrow</button>
      </div>
    </div>
  );
};

export default Suggestions;
