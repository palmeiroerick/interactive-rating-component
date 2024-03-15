"use client";

import { RatingContext } from "@/context/RatingContext";
import { useContext } from "react";

const RatingState = () => {
  const { rating } = useContext(RatingContext);

  return (
    <div className="rounded-full bg-darkBlue px-3 pb-[2px] pt-1 text-[15px] text-orange">
      You selected {rating} out of 5
    </div>
  );
};

export default RatingState;
