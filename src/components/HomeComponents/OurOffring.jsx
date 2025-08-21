import React from "react";
import Container from "../Common/Container";
import { AllImages } from "../AllImages/AllImages";
import { Star } from "lucide-react";

function StarRating({ rating }) {
  return (
    <div className="flex space-x-1 mb-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          className={`h-6 w-6 ${
            rating >= value
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function OurOffering() {
  const rating = 4;

  return (
    <section className="relative w-full bg-[#2e302e] py-[80px] md:py-[130px]">
      <Container>
        <h1 className="text-center text-2xl font-semibold text-SecondaryColor">
          OUR OFFERING
        </h1>

        <div className="max-w-[559px] mx-auto mt-8 relative our-Offringbg rounded-xl overflow-hidden">
          {/* Badge */}
          <div className="absolute -top-15 left-1/2 -translate-x-1/2 z-10">
            <div className="flex h-[210px] w-[210px] items-center justify-center rounded-full bg-[#1C1D20]">
              <span className="text-[180px] font-bold text-PrimaryColor">N</span>
            </div>
          </div>

          {/* Content */}
          <article className=" py-[64px] px-10 md:p-[64px] pt-6 mt-40 text-center text-white">
            <h2 className="text-2xl font-bold">HIRE US TO DO IT FOR YOU</h2>
            <h1 className=" text-[70px] md:text-[96px] font-black">AGENCY</h1>
            <p className="mt-2 text-lg font-light">
              Managed and "done-for-you" digital marketing services for
              small-to-large companies looking for hyper-growth. And yes, we
              guarantee.
            </p>

            <button className="group/button relative mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-PrimaryColor px-8 py-4 text-xl font-semibold text-TertiaryBlack transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-lime-500/30">
              Get Started
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-2000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="h-full w-8 bg-white/20" />
              </div>
            </button>

            {/* Rating */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-2">
              <StarRating rating={rating} />
              <span className="text-2xl font-light">
                5 stars out of 83 reviews
              </span>
            </div>
          </article>
        </div>
      </Container>

      {/* Background image */}
      <img
        src={AllImages.OurOffringimg}
        alt="Our Offering"
        className="absolute left-0 -top-0.5 h-auto w-[148px] md:w-[290px] lg:w-[440px] xl:w-[560px] 2xl:w-[740px]"
      />
    </section>
  );
}
