"use client";

import type { RatingValue } from "@/types/rating";
import type { ReactNode } from "react";
import { createContext, useState } from "react";

type RatingProviderProps = {
  children: ReactNode;
};

type RatingType = null | "1" | "2" | "3" | "4" | "5";

type RatingContextProps = {
  rating: RatingType;
  useChangeRating: (event: any) => void;
  submitState: boolean;
  useChangeSubmitState: () => void;
};

export const RatingContext = createContext<RatingContextProps>({
  rating: null,
  useChangeRating: () => {},
  submitState: false,
  useChangeSubmitState: () => {},
});

const RatingProvider = ({ children }: RatingProviderProps) => {
  const [rating, setRating] = useState<RatingType>(null);

  const useChangeRating = (event: any) => {
    const value: RatingValue = event.target.id;
    setRating(value);
  };

  const [submitState, setSubmitState] = useState<boolean>(false);

  const useChangeSubmitState = () => {
    if (rating) {
      setSubmitState(!submitState);
    } else {
      alert("Choose a value for rating");
    }
  };

  return (
    <RatingContext.Provider
      value={{ rating, useChangeRating, submitState, useChangeSubmitState }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export default RatingProvider;
