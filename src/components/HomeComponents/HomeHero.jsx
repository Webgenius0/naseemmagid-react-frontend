import React, { useState } from "react";

import Container from "../Common/Container";
import { AllImages } from "../AllImages/AllImages";
import { ArrowRight } from "../SVG/ArrowRightSVG";

export default function HomeHero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative w-full">
      {!videoError ? (
        <video
          className="w-full h-[834px] object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
        >
          <source
            src="https://res.cloudinary.com/dbioemqb0/video/upload/v1692123456/heroVideo_ca2c1t.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <img
          src={AllImages?.heroFallbackImg}
          className="w-full h-[834px] object-cover object-top"
          alt="Hero Background"
        />
      )}

      <div className="absolute top-0 w-full h-[834px] bg-black/60"></div>
      <Container>
        <div className="absolute inset-0 h-[834px] flex flex-col justify-center items-center w-full">
          <h1 className="text-white text-[64px] font-black max-w-[634px] text-center leading-[76.8px]">
            LIKE AUTOPILOT FOR ECOM SALES
          </h1>
          <p className="text-2xl font-light text-white mt-6 mb-12 max-w-[634px] text-center mx-auto leading-[36px]">
            Growing an eCom brand is hard. We make it easier, more predictable,
            less stressful, and more fun.
          </p>
          <div className="flex items-center w-[634px]">
            <input
              type="text"
              placeholder="Enter your email here and we'll send you somaigc..."
              className=" py-4 px-6  bg-white outline-0 rounded-l-full w-[550px] text-xl"
            />
            <button
              className="text-TertiaryBlack font-semibold flex items-center gap-2 bg-PrimaryColor
             py-4 px-6 rounded-r-full w-[150px] cursor-pointer group text-xl"
            >
              Do it{" "}
              <ArrowRight className="fill-white w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
