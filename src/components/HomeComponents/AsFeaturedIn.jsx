import React from "react";
import Container from "../Common/Container";
import useAsFeaturedInData from "@/hooks/useAsFeaturedInData";
import FeaturedMarquee from "../Common/FeaturedMarquee";

export default function AsFeaturedIn() {
  const { featuredInData } = useAsFeaturedInData();

  return (
    <div className="py-[80px] ">
      <Container>
        <FeaturedMarquee
          title="As Featured In"
          items={featuredInData}
          itemClassName="h-16 w-30 xl:w-40 px-2 object-contain "
          durationClassName="[--duration:20s] [--gap:2rem] md:[--gap:5rem]"
          ItemDivClassName=" py-5 md:py-6 lg:py-9"
        />
      </Container>
    </div>
  );
}
