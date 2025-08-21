import React from "react";
import Container from "../Common/Container";
import { Marquee } from "../magicui/marquee";
import useBrandExperienceData from "@/hooks/useBrandExperienceData";

export default function BrandExperience() {
  const { brandExperienceData } = useBrandExperienceData();

  return (
    <div className="py-[60px] md:py-[130px] ">
      <Container>
        <h1 className="text-center text-2xl font-semibold">Brand Experience</h1>
        <div className="relative py-9">
          <Marquee className="[--duration:20s] [--gap:2rem] md:[--gap:5rem]">
            {brandExperienceData.map((review) => (
              <div
                key={review.id}
                className="flex items-center justify-between w-full "
              >
                <img
                  src={review.svg}
                  className="h-16 w-30 md:w-40 px-2 object-contain"
                  alt={`${review.name}`}
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </Container>
    </div>
  );
}
