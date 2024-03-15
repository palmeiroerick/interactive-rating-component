"use client";

import Container from "@/components/Container";
import Illustration from "@/components/Illustration";
import RatingButtons from "@/components/RatingButtons";
import RatingState from "@/components/RatingState";
import Star from "@/components/Star";
import SubmitButton from "@/components/SubmitButton";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { RatingContext } from "@/context/RatingContext";
import { useContext } from "react";

export default function Home() {
  const { submitState } = useContext(RatingContext);

  return (
    <main>
      <Container>
        {submitState ? (
          <div className="flex h-full flex-col items-center justify-between pb-4 pt-2 transition-all duration-300 lg:py-6">
            <Illustration />
            <RatingState />
            <Title>Thank you!</Title>
            <Text className="text-center">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </Text>
          </div>
        ) : (
          <div className="flex h-full flex-col justify-between transition-all duration-300">
            <Star />
            <Title>How did we do?</Title>
            <Text>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Text>
            <RatingButtons />
            <SubmitButton />
          </div>
        )}
      </Container>
    </main>
  );
}
