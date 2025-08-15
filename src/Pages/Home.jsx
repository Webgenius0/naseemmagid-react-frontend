import AsFeaturedIn from "@/components/HomeComponents/AsFeaturedIn";
import BrandExperience from "@/components/HomeComponents/BrandExperience";
import HomeHero from "@/components/HomeComponents/HomeHero";
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
      <OurClientsSay/>
    </div>
  );
}
