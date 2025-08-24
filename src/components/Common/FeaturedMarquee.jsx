import React from "react";
import { Marquee } from "../magicui/marquee";
import Container from "../Common/Container";

export default function FeaturedMarquee({
  title,
  items = [],
  itemClassName,
  reverse,
  durationClassName,
  ItemDivClassName,
}) {
  return (
    <div>
      <>
        {title ? (
          <h1 className="text-center text-2xl font-semibold">{title}</h1>
        ) : null}

        <div className={`relative ${ItemDivClassName}`}>
          <Marquee reverse={reverse} className={durationClassName}>
            {items.map((item , index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <img src={item.svg} className={`object-contain ${itemClassName} ${item.className || "h-16 w-30 md:w-40 px-2"}`} alt={item.name} />
              </div>
            ))}
          </Marquee>

          {/* Gradient fade effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </>
    </div>
  );
}
