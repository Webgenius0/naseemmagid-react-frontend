import React from "react";
import { Marquee } from "../magicui/marquee";
import Container from "../Common/Container";

export default function FeaturedMarquee({
  title,
  items = [],
  itemClassName,
  reverse,
  durationClassName,
}) {
  return (
    <div>
      <>
        {title ? (
          <h1 className="text-center text-2xl font-semibold">{title}</h1>
        ) : null}

        <div className="relative py-9">
          <Marquee reverse={reverse} className={durationClassName}>
            {items.map((item) => (
              <div
                key={item.id || item.name}
                className="flex items-center justify-between w-full"
              >
                <img src={item.svg} className={itemClassName} alt={item.name} />
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
