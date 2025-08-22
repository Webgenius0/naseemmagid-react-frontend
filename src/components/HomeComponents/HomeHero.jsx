import React, { useState } from "react";

import Container from "../Common/Container";
import { AllImages } from "../AllImages/AllImages";
import { ArrowRight } from "../SVG/ArrowRightSVG";

export default function HomeHero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative w-full">
      <>
        {!videoError && (
          <video
            className="w-full h-[100vh] xl:h-[650px] 2xl:h-[834px] object-cover"
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
        )}

        {videoError && (
          <video
            className="w-full h-[100vh] xl:h-[650px] 2xl:h-[834px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={AllImages?.heroVideo} type="video/mp4" />
          </video>
        )}
      </>

      <div className="absolute top-0 w-full h-[100vh] xl:h-[650px] 2xl:h-[834px] bg-black/60"></div>
      <Container>
        <div className="absolute inset-0 h-[100vh] xl:h-[650px] 2xl:h-[834px] flex flex-col justify-center items-center w-full mt-10 xl:mt-0">
          <h1 className="text-white text-[46px] md:text-[50px] xl:text-[64px] font-black max-w-[634px] text-center leading-[60px] xl:leading-[76.8px]">
            LIKE ROCKET FUEL FOR BUSINESS
          </h1>
          <p className=" text-lg md:text-xl xl:text-2xl font-light text-white mt-6 mb-12 max-w-[634px] text-center mx-auto leading-[30px] xl:leading-[36px]">
            Growing an eCom brand is hard. We make it easier, more predictable,
            less stressful, and more fun.
          </p>
          <div className="flex flex-col sm:flex-row items-center w-full max-w-[634px] px-4 gap-3 sm:gap-0">
            <input
              type="text"
              placeholder="Enter your email here and we'll send you somatic..."
              className="lg:py-4 lg:px-6 py-3 px-6  bg-white outline-0 rounded-full sm:rounded-l-full sm:rounded-r-none w-full text-base sm:text-lg"
            />
            <button
              className="text-TertiaryBlack font-semibold flex items-center justify-center gap-2 bg-PrimaryColor
   lg:py-4 lg:px-6 py-3 px-6 rounded-full sm:rounded-r-full sm:rounded-l-none w-full sm:w-[160px] cursor-pointer group text-lg sm:text-xl"
            >
              Do it{" "}
              <ArrowRight className="fill-white w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
