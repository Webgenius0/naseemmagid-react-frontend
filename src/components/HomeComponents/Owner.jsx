import React from "react";
import { AllImages } from "../AllImages/AllImages";

export default function Owner() {
  return (
    <div className=" py-[233px] bg-[#f3f3f3] text-TertiaryBlack relative w-full">
      <div className="max-w-[808px] mx-auto ">
        <div className="leading-[30px] text-lg">
          {/* Heading */}
          <h2 className="font-bold mb-6">Dear Ecom owner,</h2>

          {/* Paragraphs */}
          <div className="">
            <p>
              We get it.
              <br />
              Running an online store is hard. Really freaking hard.
              <br />
              You’re probably wondering where your next sale will come from.
              <br />
              Refreshing Shopify like it owes you money.
              <br />
              Watching ad costs climb while your ROAS slides downhill.
              <br />
              And on top of that….
            </p>

            <p>
              You’re juggling a bazillion “must-dos” every day.
              <br />
              Should you launch a new product? Run a flash sale? Redesign your
              homepage?
              <br />
              What about TikTok ads? Errrrrrrbody’s talking about TikTok ads.
              <br />
              Or maybe you should post on Instagram five times a day? Send daily
              emails? Hire that “guru” who keeps promising “easy wins”?
              <br />
              Somebody please pass me the aspirin.
            </p>

            <p>
              Most eCom founders have a bad case of “shiny object syndrome”...
              <br />
              Mixed with a pinch of “I’ll just do it all myself”.
              <br />
              So you end up doing a little of this, a little of that…
              <br />
              And before you know it, you’re staring at your ad account
              wondering where all your money went.
            </p>

            <p>
              We call that a conversion graveyard.
              <br />
              Also known as a nightmare.
              <br />
              And we’d rather run out of coffee during Q4 than run a store that
              way.
              <br />
              But this isn’t about us… it’s about you.
            </p>

            <p>
              You’re here because, deep down, you know your store isn’t where
              you want it to be.
              <br />
              Or maybe you’re doing well, but you want more.
              <br />
              More profit. More predictability. More sales without praying to
              the algorithm gods.
            </p>

            {/* Subheading */}
            <h3 className="font-bold mt-8">More freedom.</h3>
            <br />
            <p>
              More time to actually enjoy the business you built.
              <br />
              More trips where you’re not glued to your phone checking orders.
              <br />
              Whatever “more” means for you…
              <br />
              It all starts with taking the next step below.
            </p>
            <br />
            {/* Closing */}
            <p className="font-bold ">cue angels singing</p>
          </div>
        </div>
      </div>
      {/* img */}
      <div className="absolute top-0 left-0 ">
        <img src={AllImages.ownerImg} className="w-[1200px] h-full" alt="" />
      </div>
      <div className="absolute bottom-0 right-0 ">
        <img
          src={AllImages.ownerImg}
          className="w-[1200px] h-full rotate-180"
          alt=""
        />
      </div>
    </div>
  );
}
