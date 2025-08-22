import React from "react";
import { AllImages } from "../AllImages/AllImages";

export default function Owner() {
  return (
    <div className=" py-[120px] md:py-[233px] bg-[#f3f3f3] text-TertiaryBlack relative w-full">
      <div className="max-w-[808px] mx-auto px-4">
        <div className="leading-[30px] text-lg">
          {/* Heading */}
          <h2 className="font-bold mb-6">Dear Ecom owner,</h2>

          {/* Paragraphs */}
          <div className="">
            We get it. Running an online store is hard. Really freaking hard.
            You’re probably wondering where your next sale will come from.
            Refreshing Shopify like it owes you money. Watching ad costs climb
            while your ROAS slides downhill. And on top of that… You’re juggling
            a bazillion “must-dos” every day. Should you launch a new product?
            Run a flash sale? Redesign your homepage? What about TikTok ads?
            Errrrrybody’s talking about TikTok ads. Or maybe you should post on
            Instagram five times a day? Send daily emails? Hire that “guru” who
            keeps promising “easy wins”? Somebody please pass me the aspirin.
            Most eCom founders have a bad case of “shiny object syndrome”… Mixed
            with a pinch of “I’ll just do it all myself”. So you end up doing a
            little of this, a little of that… And before you know it, you’re
            staring at your ad account wondering where all your money went. We
            call that a conversion graveyard. Also known as a nightmare. And
            we’d rather run out of coffee during Q4 than run a store that way.
            But this isn’t about us… it’s about you. You’re here because, deep
            down, you know your store isn’t where you want it to be. Or maybe
            you’re doing well, but you want more. More profit. More
            predictability. More sales without praying to the algorithm gods.
            More freedom. More time to actually enjoy the business you built.
            More trips where you’re not glued to your phone checking orders.
            Whatever “more” means for you… It all starts with taking the next
            step below. cue angels singing
          </div>
        </div>
      </div>
      {/* img */}
      <div className="absolute top-0 left-0 ">
        <img
          src={AllImages.ownerImg}
          className=" w-[300px] md:w-[500px] lg:w-[600px]  xl:w-[900px] 2xl:w-[1200px] h-full"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src={AllImages.ownerImg}
          className="w-[300px] md:w-[500px] lg:w-[600px]  xl:w-[900px] 2xl:w-[1200px] h-full rotate-180"
          alt=""
        />
      </div>
    </div>
  );
}
