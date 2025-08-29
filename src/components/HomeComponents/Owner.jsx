import React from "react";
import { AllImages } from "../AllImages/AllImages";

export default function Owner() {
  return (
    <div className=" py-[120px] md:py-[233px] bg-[#f3f3f3] text-TertiaryBlack relative w-full">
      <div className="max-w-[808px] mx-auto px-4">
        <div className="leading-[30px] text-sm">
          {/* Heading */}
          <h2 className="font-bold mb-6">Dear Ecom Owner,</h2>

          {/* Paragraphs */}
          <div className="">
            <p>
              We get it.
              <br />
              <br />
              Running an online store is hard. Really freaking hard.
              <br />
              <br />
              You’re probably wondering where your next sale will come from.
              <br />
              <br />
              Worn down from trying to keep it all together.
              <br />
              <br />
              Feeling like each day takes more than it gives.
              <br />
              <br />
              And to top it all off,
              <br />
              <br />
              no one sees the pressure you’re under.
              <br />
              <br />
              Refreshing your store like it owes you money.
              <br />
              <br />
              Watching ad costs climb while your ROAS slides downhill.
              <br />
              <br />
              And on top of that….
            </p>
            <br />
            <p>
              You’re juggling a bazillion “must-dos” every day.
              <br />
              <br />
              Should you launch a new product? Run a flash sale? Redesign your
              homepage?
              <br />
              <br />
              What about TikTok ads?
              <br />
              <br />
              Errrrybody’s talking about TikTok ads.
              <br />
              <br />
              Or maybe you should post on Instagram five times a day?
              <br />
              <br />
              Send daily emails?
              <br />
              <br />
              Drop 2k on a logo?
              <br />
              <br />
              Hire that “guru” who keeps promising “easy wins”?
              <br />
              <br />
              *Somebody please pass me the aspirin*
            </p>
            <br />
            <p>
              Most Ecom owners have a bad case of “shiny object syndrome”…
              <br />
              <br />
              Mixed with a pinch of “I’ll just do it all myself”.
              <br />
              <br />
              So you end up doing a little of this, a little of that…
              <br />
              <br />
              And before you know it, you’re staring at your ad account
              wondering where all your money went.
            </p>
            <br />
            <p>
              We call that a conversion graveyard.
              <br />
              <br />
              Also known as a nightmare.
              <br />
              <br />
              And{" "}
              <span className="bg-[#006f00] text-white">
                we’d rather swim with sharks than operate a business like that.
              </span>
              <br />
              <br />
              But this isn’t about us… it’s about you.
            </p>
            <br />
            <p>
              You’re here because, deep down, you know your store isn’t where
              you want it to be.
              <br />
              <br />
              Or maybe you’re doing well, but you want more.
              <br />
              <br />
              More Security
              <br />
              <br />
              More profit.
              <br />
              <br />
              <span className="font-bold">More freedom.</span>
              <br />
              <br />
              <span className="font-bold underline">
                More time with your family.
              </span>
              <br />
              <br />
              More sales without praying to the algorithm gods.
            </p>
            {/* Subheading */}
            <br />
            More time to actually enjoy the business you built.
            <br />
            <br />
            <p>
              More business-class flights with your spouse to places that result
              in more sand between your toes.
              <br />
              <br />
              Whatever “more” means for you…
              <br />
              <br />
              It all starts with taking the next step below.
            </p>
            <br />
            {/* Closing */}
            <p className="font-bold italic">*cue angels singing*</p>
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
