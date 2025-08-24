import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Verified from "../SVG/Verified";
import { AllImages } from "../AllImages/AllImages";

const reviews = [
  {
    name: "Derek Hill",
    rating: 5,
    review:
      "Really impressed by the attention to detail and support. Carlos, Rachel, and Alex \u2014 you guys are rockstars. Appreciate the quick responses and clarity every step of the way.",
    date: "May 28, 2023",
    type: "Agency",
    image: AllImages.avater7,
  },
  {
    name: "Sophie Lane",
    rating: 5,
    review:
      "The whole team at Nexal has been incredible. From our very first call to ongoing campaign updates, we\u2019ve felt fully supported. Special shoutout to Rachel, Nas, and Carlos.",
    date: "May 17, 2023",
    type: "Agency",
    image: AllImages.avater8,
  },
  {
    name: "Brent Walker",
    rating: 5,
    review:
      "Alex really took the time to understand our business. Felt like working with someone on the inside, not just an agency.",
    date: "June 30, 2022",
    type: "Agency",
    image: AllImages.avater9,
  },
  {
    name: "Tina Marsh",
    rating: 5,
    review:
      "The level of support we received from Nexal has been amazing. Special thanks to Carlos for keeping everything clear and moving.",
    date: "June 18, 2022",
    type: "Agency",
    image: AllImages.avater10,
  },
  {
    name: "Sophia Adams",
    rating: 5,
    review:
      "Fantastic experience so far. The team really understands eCommerce and how to scale.",
    date: "May 20, 2022",
    type: "Agency",
    image: AllImages.avater11,
  },
  {
    name: "Lily Jameson",
    rating: 5,
    review:
      "Sales are up, ads are working, and support is solid. That\u2019s all I could ask for.",
    date: "April 17, 2022",
    type: "Agency",
    image: AllImages.avater12,
  },
  {
    name: "Jaxon Reid",
    rating: 5,
    review:
      "We\u2019ve grown more in the last 3 months than we did all of last year.",
    date: "July 19, 2021",
    type: "Agency",
    image: AllImages.avater13,
  },
  {
    name: "Jason Lim",
    rating: 5,
    review:
      "Big thanks to Nas and the Nexal team. What stood out was how well they understood our business from the start. The landing page they delivered converted better than anything we\u2019ve run before.",
    date: "March 4, 2024",
    type: "Agency",
    image: AllImages.avater14,
  },
  {
    name: "Monica Ellis",
    rating: 5,
    review:
      "Our account was messy when we came to Nexal. Elijah cleaned everything up, organized our campaigns, and helped us better communicate our brand story.",
    date: "January 17, 2024",
    type: "Agency",
    image: AllImages.avater1,
  },
  {
    name: "Craig Dawson",
    rating: 5,
    review:
      "Melissa helped us clean up our entire campaign structure and made suggestions that instantly improved performance. So easy to work with.",
    date: "May 30, 2023",
    type: "Agency",
    image: AllImages.avater2,
  },
  {
    name: "Hannah Reeves",
    rating: 5,
    review:
      "I\u2019ve been working with Alex for a couple of months now, and I\u2019m seriously impressed. He\u2019s thoughtful, responsive, and really knows how to translate complex ideas into clean marketing.",
    date: "June 27, 2023",
    type: "Agency",
    image: AllImages.avater3,
  },
  {
    name: "Jasmine King",
    rating: 5,
    review:
      "I\u2019ve worked with a lot of agencies, and Alex has been one of the most consistent and proactive managers I\u2019ve dealt with. Always one step ahead.",
    date: "May 16, 2024",
    type: "Agency",
    image: AllImages.avater4,
  },
  {
    name: "Kate Morgan",
    rating: 5,
    review:
      "It\u2019s rare to find someone like Rachel \u2014 strategic, creative, and reliable. She helped us get clarity on our offer and where to focus next.",
    date: "February 1, 2023",
    type: "Agency",
    image: AllImages.avater5,
  },
  {
    name: "Lauren Matthews",
    rating: 5,
    review:
      "Amazing experience working with the entire Nexal team. Everyone\u2019s been friendly, sharp, and on the ball. Huge thanks to Alex, Rachel, and Nas for making this process so smooth.",
    date: "June 6, 2023",
    type: "Agency",
    image: AllImages.avater6,
  },
];

// ⭐ Reusable StarRating component
function StarRating({ rating = 4, totalStars = 5 }) {
  return (
    <div className="flex space-x-1 my-4">
      {Array.from({ length: totalStars }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 md:h-5 w-5 md:w-5",
            rating > i ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
}

const ReviewCard = ({ image, name, review, date, type, rating = 4 }) => {
  return (
    <figure
      className={cn(
        "relative w-[300px] lg:w-[424px] h-full rounded-xl border p-4 cursor-pointer overflow-hidden",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:shadow-md  duration-300",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      {/* User Info */}

      <div className="">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full"
            width="52"
            height="52"
            alt={name}
            src={image}
          />
          <div>
            <figcaption className="text-lg font-medium dark:text-white flex items-center gap-1">
              {name}
              <Verified />
            </figcaption>{" "}
          </div>
        </div>

        {/* Star Rating */}
        <StarRating rating={rating} />
      </div>

      {/* Review Body */}
      <blockquote className="mt-2 text-sm md:text-base">{review}</blockquote>

      {/* Footer */}
      <div className="flex justify-between mt-4 text-sm">
        <p className="text-gray-500">{date}</p>
        <Link className="text-red-500 font-bold">{type}</Link>
      </div>
    </figure>
  );
};

export function OurClientsSay() {
  const mid = Math.ceil(reviews.length / 2);
  const firstRow = reviews.slice(0, mid);
  const secondRow = reviews.slice(mid);

  return (
    <section className="py-[20px] md:py-[100px]">
      <h1 className="text-center text-3xl font-semibold text-TertiaryBlack">
        What our Clients Say about us
      </h1>

      {/* Reviews Marquee */}
      <div className="relative flex flex-col items-center justify-center gap-y-8 py-8 lg:py-[64px] w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:28s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>

        {/* Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background hidden md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background hidden md:block" />
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button className="buttonheartbeat rounded-md bg-PrimaryColor px-8 py-4 text-sm font-semibold text-TertiaryBlack cursor-pointer">
          View All
        </button>
      </div>
    </section>
  );
}
