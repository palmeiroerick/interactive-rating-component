"use client";

import { RatingContext } from "@/context/RatingContext";
import { useContext } from "react";

const SubmitButton = () => {
  const { useChangeSubmitState } = useContext(RatingContext);

  return (
    <button
      onClick={useChangeSubmitState}
      className="h-10 rounded-full bg-orange pt-1 text-sm font-bold uppercase tracking-widest text-white outline-none transition-colors duration-300 hover:bg-white hover:text-orange"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
