import React from "react";
import Container from "../Common/Container";
import FeaturedMarquee from "../Common/FeaturedMarquee";
import useAsFeaturedInData from "@/hooks/useAsFeaturedInData";
import useBrandExperienceData from "@/hooks/useBrandExperienceData";
import useGrowMarqueedata from "@/hooks/useGrowMarqueedata";

export default function GrowMarquee() {
  const { featuredInData } = useAsFeaturedInData();
  const { brandExperienceData } = useBrandExperienceData();
  const { growMarqueedata } = useGrowMarqueedata();

  return (
    <div className="py-[30px] xl:py-[50px]">
      <Container>
        <FeaturedMarquee
          items={featuredInData}
          itemClassName="h-10 md:h-16 w-26 md:w-40 px-2 object-contain"
          duration="20s"
          gap="5rem"
          durationClassName="[--duration:25s]  [--gap:2rem] md:[--gap:5rem]"
          ItemClassName=" py-5 md:py-6 lg:py-9"
        />
        <FeaturedMarquee
          reverse
          items={brandExperienceData}
          itemClassName="h-10 md:h-16 w-26 md:w-40 px-2 object-contain"
          durationClassName="[--duration:20s]  [--gap:2rem] md:[--gap:5rem]"
          ItemClassName=" py-5 md:py-6 lg:py-9"
        />
        <FeaturedMarquee
          items={growMarqueedata}
          itemClassName="h-10 md:h-16 w-26 md:w-40 px-2 object-contain"
          durationClassName="[--duration:15s]  [--gap:2rem] md:[--gap:5rem]"
          ItemClassName=" py-5 md:py-6 lg:py-9"
        />
      </Container>
    </div>
  );
}
