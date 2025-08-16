import React from "react";
import Container from "../Common/Container";
import FeaturedMarquee from "../Common/FeaturedMarquee";
import useAsFeaturedInData from "@/hooks/useAsFeaturedInData";

export default function GrowMarquee() {
  const { featuredInData } = useAsFeaturedInData();

  return (
    <div className="py-[100px]">
      <Container>
        <FeaturedMarquee
          items={featuredInData}
          itemClassName="h-10 w-40 px-2 brightness-0 dark:invert"
          duration="20s"
          gap="5rem"
          durationClassName="[--duration:25s] [--gap:5rem]"
        />
        <FeaturedMarquee
          reverse
          items={featuredInData}
          itemClassName="h-10 w-40 px-2 brightness-0 dark:invert"
          durationClassName="[--duration:20s] [--gap:5rem]"
        />
        <FeaturedMarquee
          items={featuredInData}
          itemClassName="h-10 w-40 px-2 brightness-0 dark:invert"
          durationClassName="[--duration:15s] [--gap:5rem]"
        />
      </Container>
    </div>
  );
}
