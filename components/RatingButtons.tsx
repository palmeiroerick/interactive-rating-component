"use client";

import { RatingContext } from "@/context/RatingContext";
import type { RatingValue } from "@/types/rating";
import { useContext } from "react";

type ButtonProps = {
  id: RatingValue;
};

const Button = ({ id }: ButtonProps) => {
  const { rating, useChangeRating } = useContext(RatingContext);

  const variants =
    rating === id ? "bg-orange text-white" : "bg-darkBlue text-mediumGrey ";

  return (
    <button
      id={id}
      onClick={useChangeRating}
      className={`${variants} flex h-10 w-10 items-center justify-center rounded-full pt-1 font-bold outline-none transition-colors duration-300 hover:bg-lightGrey hover:text-white lg:h-12 lg:w-12`}
    >
      {id}
    </button>
  );
};

const RatingButtons = () => {
  const buttons: RatingValue[] = ["1", "2", "3", "4", "5"];

  return (
    <div className="flex justify-between">
      {buttons.map((button, index) => {
        return <Button key={index} id={button} />;
      })}
    </div>
  );
};

export default RatingButtons;
