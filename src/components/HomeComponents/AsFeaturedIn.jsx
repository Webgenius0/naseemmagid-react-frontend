import React from "react";
import Container from "../Common/Container";
import useAsFeaturedInData from "@/hooks/useAsFeaturedInData";
import { Marquee } from "../magicui/marquee";
import FeaturedMarquee from "../Common/FeaturedMarquee";

export default function AsFeaturedIn() {
  const { featuredInData } = useAsFeaturedInData();

  return (
    <div className="py-[80px] ">
      <Container>
        <FeaturedMarquee
          title="As Featured In"
          items={featuredInData}
          itemClassName="h-10 w-40 px-2 brightness-0 dark:invert"
          durationClassName="[--duration:20s] [--gap:5rem]"
        />
      </Container>
    </div>
  );
}
