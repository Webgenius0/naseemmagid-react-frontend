import AsFeaturedIn from "@/components/HomeComponents/AsFeaturedIn";
import BrandExperience from "@/components/HomeComponents/BrandExperience";
import GotQuestions from "@/components/HomeComponents/GotQuestions";
import GrowGlobe from "@/components/HomeComponents/GrowGlobe";
import GrowMarquee from "@/components/HomeComponents/GrowMarquee";
import HomeHero from "@/components/HomeComponents/HomeHero";
import IGuessWhat from "@/components/HomeComponents/IGuessWhat";
import { OurClientsSay } from "@/components/HomeComponents/OurClientsSay";
import OurOffring from "@/components/HomeComponents/OurOffring";
import Owner from "@/components/HomeComponents/Owner";
import ThePoweris from "@/components/HomeComponents/ThePoweris";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <AsFeaturedIn />
      <Owner />
      <OurOffring />
      <BrandExperience />
      <ThePoweris />
      <OurClientsSay />
      <GrowGlobe/>
      <GrowMarquee />
      {/* <GotQuestions />
      <IGuessWhat /> */}
    </div>
  );
}
