import React from "react";

const SuggestionCard = ({ number }) => {
  return (
    <div className="min-w-56 h-full bg-blue-400 flex justify-center items-center text-4xl text-mainWhite">
      {number}
    </div>
  );
};

export default SuggestionCard;
