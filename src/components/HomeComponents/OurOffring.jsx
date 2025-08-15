import React, { useState } from "react";
import Container from "../Common/Container";
import { AllImages } from "../AllImages/AllImages";
import { Star } from "lucide-react";

export default function OurOffring() {
  const [rating, setRating] = useState(4);
  const [hoveredRating, setHoveredRating] = useState(null);

  return (
    <div className="py-[130px] bg-[#2e302e] relative w-full">
      <Container>
        <div className="">
          <h1 className="text-center text-2xl font-semibold text-SecondaryColor">
            OUR OFFERING
          </h1>
          <div className="max-w-[559px] mx-auto mt-8">
            {/* Circle */}
            <div className="relative our-Offringbg  w-full rounded-xl overflow-hidden">
              {/* Badge */}
              <div className="absolute -top-15 left-1/2 transform -translate-x-1/2 z-10 ">
                <div className="w-[210px] h-[210px] rounded-full  flex items-center justify-center bg-[#1C1D20]">
                  <span className="text-PrimaryColor text-[180px] font-bold">
                    K
                  </span>
                </div>
              </div>

              {/* Content behind the badge */}
              <div className="p-[64px] pt-6 text-white text-center text-2xl font-medium mt-40">
                <h2 className="text-2xl font-bold">HIRE US TO DO IT FOR YOU</h2>
                <h1 className="text-[96px] font-black">AGENCY</h1>
                <p className="text-lg font-light">
                  Managed and 'done-for-you digital marketing services for
                  mal-to-large companies looking to hyper-growth. And yes, we
                  guarantee
                </p>
                <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-PrimaryColor px-8 py-4 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-lime-500/30 w-full cursor-pointer mt-6">
                  <span className=" text-TertiaryBlack text-xl font-semibold">
                    Get Started
                  </span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-2000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                </button>
                {/*  */}

                <div className="flex justify-between items-center mt-6 gap-2">
                  <div className="flex space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                      <Star
                        key={ratingValue}
                        className={`h-6 w-6 cursor-pointer ${
                          (
                            hoveredRating !== null
                              ? hoveredRating >= ratingValue
                              : rating !== null && rating >= ratingValue
                          )
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-2xl font-light">
                    5 stars out of 83 reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* img */}
      <div className="absolute -top-0.5 left-0  ">
        <img
          src={AllImages.OurOffringimg}
          className="w-[740px] h-full"
          alt=""
        />
      </div>
    </div>
  );
}
