import AsFeaturedIn from "@/components/HomeComponents/AsFeaturedIn";
import HomeHero from "@/components/HomeComponents/HomeHero";
import OurOffring from "@/components/HomeComponents/OurOffring";
import Owner from "@/components/HomeComponents/Owner";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <AsFeaturedIn />
      <Owner />
      <OurOffring />
    </div>
  );
}
