import React from "react";
import Earth from "../Common/Earth";
import { AllImages } from "../AllImages/AllImages";
import Container from "../Common/Container";
import CountUp from "../Common/CountUp";

const statsData = [
  {
    title: "Revenue Generated",
    prefix: "$",
    value: 1.8,
    suffix: "B",
    desc: "We let our numbers do the talking. 1.8 Billion in reported client revenue and counting.",
  },
  {
    title: "Size Of Our Platform",
    value: 80,
    suffix: "K",
    desc: "80,000 customers and counting make up our diverse and ever growing platform.",
  },
  {
    title: "Our Reach",
    value: 84,
    suffix: "",
    desc: "Serving customers in over 84 different countries.",
  },
  {
    title: "Battle Tested",
    value: 184,
    suffix: "",
    desc: "Our strategies have been battle tested in over 184 different industries and niches.",
  },
];


export default function GrowGlobe() {
  return (
    <div className="bg-[#f0f9e5] relative w-full pt-[120px] md:pt-[212px]">
      <Container>
        <div className="max-w-[659px] mx-auto leading-[76.8px]">
          <h1 className=" text-[40px] md:text-[56px] lg:text-[64px] leading-12 md:leading-none text-center font-black text-TertiaryBlack">
            GROW 10X FASTER, BETTER, SAMARTER
          </h1>
          <p className=" text-lg md:text-xl lg:text-2xl font-light text-TertiaryBlack text-center mt-6 mb-10 md:mb-[78px]">
            Skip the guesswork, trial-and-error and never-ending shit show of
            trying to figure everything out yourself - for the very first time.
            And instead, grow your business with proven{" "}
            <span className="underline">client-getting-funnels</span>,
            frameworks and{" "}
            <span className="font-bold">scientific customer acquisition</span>{" "}
            (not hopes and prayers).
          </p>
        </div>
      </Container>
      <div className=" relative z-20">
        <Earth />
      </div>

      {/* card */}
      <div className="lg:absolute bottom-0 relative z-30 flex justify-center w-full">
        <Container>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 -mt-50 md:-mt-80 lg:-mt-0">
            {statsData.map((item, idx) => (
              <div key={idx} className="bg-white rounded-md cardBox p-6">
                <h1 className="text-xl xl:text-2xl font-bold text-TertiaryBlack">
                  {item.title}
                </h1>
                <hr className="bg-PrimaryColor h-[8px] my-3" />
                <div className="count-up-text text-[40px] font-bold text-TertiaryBlack mb-3">
                  <CountUp
                  from={0}
                  prefix={item.prefix}
                  to={item.value}
                  duration={2}
                  suffix={item.suffix}
                  className=""
                />
                </div>
                <p className="text-sm leading-[21px] text-TertiaryBlack">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="pointer-events-none z-25 left-0 w-full h-[200px] earthGradient absolute bottom-30 lg:bottom-0"></div>

      {/* img */}
      <div className="absolute top-0 -left-1">
        <img
          src={AllImages.GrowGlobe}
          className="w-[300px] md:w-[500px] lg:w-[600px]  xl:w-[900px] 2xl:w-[1200px] h-full"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 ">
        <img src={AllImages.GrowGlobe2} className="h-[400px]" alt="" />
      </div>
    </div>
  );
}
