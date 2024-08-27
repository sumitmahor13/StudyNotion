import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-[#1f71ff] via-[#449ad7] to-[#0a6870] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
      {" "}
    </span>
  );
};

export default HighlightText;
